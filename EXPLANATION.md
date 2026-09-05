# SETU — What it is and how it's used

> A one-page brief you can paste into another chat to give an LLM full context on this project.

---

## 1. One-line pitch

**SETU is conversational middleware.** A small fine-tuned LLM sits between a customer chatting in natural language (English or Hinglish) and the client's existing backend APIs. The client declares their conversation flows in a **YAML config file**; SETU handles understanding the customer, following the flow, and generating replies. SETU never touches customer data directly — the client's own servers do the work.

Tagline the team uses internally:
> *"Bring your own APIs, bring your own YAML. SETU speaks English (and Hinglish) on top."*

---

## 2. The concept in three parts

### 2.1. Parser + Composer
SETU does two things, and only two things:

1. **Parse** — takes a natural-language customer message + the current YAML workflow + conversation history, and outputs a structured intent like:
   ```json
   { "intent": "return_request", "params": { "order_id": "FL1234567890", "reason": "size_issue" } }
   ```
2. **Compose** — takes a structured response from the client's backend and turns it into a natural, on-brand reply in the customer's language.

Everything between parse and compose (auth, order lookup, refund creation, CRM writes) is the **client's** infrastructure. SETU is not an agent; it is not a tool-calling framework; it does not hold state on the customer.

### 2.2. YAML-declarative workflows
The client defines their bot in a single YAML file. Two shapes are common:

- **Linear collect flow** — for booking, onboarding, lead capture. An ordered list of fields the bot asks for.
- **Intent-driven flow** — for customer support. A set of intents (order status, return, refund, cancel, damaged item, escalation), each with triggers, optional slots to collect, and a reply template.

The YAML also carries:
- **persona** — how the bot speaks (tone, language, formality)
- **greeting** — opening message
- **rules** — hard constraints (never ask for OTP, always empathise first, only reply in Hinglish, etc.)
- **reference data** — policies, timings, prices, addresses the bot can quote

At runtime the YAML is injected into the model's system prompt. The model interprets it directly — there is no external YAML parser + orchestrator. This is what makes onboarding fast: the client edits a config file, not a state machine.

### 2.3. Client-side API sovereignty
SETU is stateless with respect to customer data. It never receives:
- order IDs backed by real records
- payment info
- customer PII beyond what's in the live conversation

The client's server owns the round-trip: parse → fetch from own APIs → compose → send. This is a **major** enterprise selling point vs. Intercom Fin, Ada, Yellow.ai, and OpenAI-based bots — data residency is guaranteed by architecture, not by contract.

---

## 3. The model layer

### 3.1. What ships today (v2)
- **Base:** `unsloth/meta-llama-3.1-8b-instruct-unsloth-bnb-4bit` (Meta Llama 3.1 8B Instruct, 4-bit quantised via Unsloth, ~5 GB)
- **Adapter:** `setu_lora_v2` — a LoRA (~50 MB) trained on top of the base
- **LoRA config:** `r=32, alpha=64, dropout=0.05`, targets all attention + MLP projections (`q, k, v, o, gate, up, down`)
- **Training:** 2 epochs, 326 steps, batch size 1 → **~1,300 unique training examples**
- **Loss curve:** 1.56 → 0.03 in ~30 steps. This is *format memorisation* — the LoRA was trained to reliably emit the expected structured output, not to be a good general chatbot.

**Positioning of v2:** English customer-support parser/composer with deterministic structured-output behaviour.

### 3.2. Where the product is heading (v3, planned)
- **15,000-25,000 training examples** across 5 e-commerce verticals (fashion, electronics, groceries, beauty, home)
- **30% Hindi + Hinglish + Tamil + Bengali** — this is the India unlock
- **40% multi-turn dialogs** (3-6 turns) so the model can sustain longer conversations
- **20+ distinct YAML schemas** in the training data so it doesn't overfit to one shape
- LoRA config bumped to `r=64, alpha=128` for extra capacity
- DPO/KTO pass after SFT to teach good-vs-bad structured output preferences
- Held-out eval set of 500 conversations with per-vertical accuracy tracking

The current sample workflow ([frontend/sample_workflow.yaml](frontend/sample_workflow.yaml)) is an **AJIO order-support bot in Hinglish** — an intentional demo of where v3 is going, not what v2 was primarily trained for.

### 3.3. Base model choice
Staying on Llama 3.1 8B for at least 12 months. Reasons:
- 4-bit 8B fits on any modern GPU with 8+ GB VRAM (L40S, RTX 4090, A10G)
- Cheap inference (~$0.001-0.002/message at scale)
- Better data → better model. Gains from more training data will dwarf gains from bigger base models at this scale.

Bigger bases (Llama 3.1 70B, Qwen 2.5 14B, Mistral Small 3) are on the table only for enterprise tier if 8B plateaus.

---

## 4. Repository layout

```
SETU/
├── README.md                    # Auto-generated HuggingFace model card. NOT project docs.
├── EXPLANATION.md               # ← this file
├── GO_TO_MARKET.md              # Full GTM strategy, ICP, pricing, hosting, benchmarks
├── adapter_config.json          # LoRA config (r=32, alpha=64, target modules)
├── adapter_model.safetensors    # LoRA weights (~50 MB)
├── chat_template.jinja          # Stock Llama 3.1 chat template
├── tokenizer.json               # Tokenizer
├── tokenizer_config.json
├── trainer_state.json           # Training run state (326 steps, loss log)
├── checkpoint-300/              # Intermediate checkpoint
├── checkpoint-326/              # Final checkpoint
└── frontend/                    # Local test harness
    ├── README.md                # How to run the local server
    ├── requirements.txt         # Python deps (fastapi, uvicorn, torch cu121, transformers, peft, bitsandbytes)
    ├── server.py                # FastAPI backend: /chat streams tokens, injects YAML into system prompt
    ├── index.html               # Chat UI + Workflow YAML paste panel
    └── sample_workflow.yaml     # AJIO Hinglish order-support demo workflow
```

Key runtime detail: `frontend/server.py` loads the base model + LoRA via **Unsloth** first (faster), falls back to **transformers + peft + bitsandbytes** if Unsloth import fails. Streams tokens back to the browser as they are generated (`TextIteratorStreamer`).

---

## 5. How SETU is used end-to-end

### 5.1. Client integration (production)
```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐     ┌─────────────┐
│  Customer   │────▶│ Client's chat │────▶│  SETU /parse │     │  Client's   │
│ (WhatsApp,  │     │  frontend     │     │              │──┐  │  own APIs   │
│  web chat)  │◀────│  (existing)   │◀────│ SETU /compose│  │  │ (OMS, CRM,  │
└─────────────┘     └───────────────┘     └──────────────┘  │  │  payments)  │
                                                            │  └─────────────┘
                                                            └──────┬──────────
                                                                   │
                                          {intent, params} routed to client backend
                                          backend fetches → returns structured result
                                          SETU composes natural-language reply
```

**Per-turn flow:**
1. Customer sends a message ("mera order kahan hai, FL1234567890").
2. Client's chat layer forwards `{ messages, workflow_yaml, session_state }` to `POST /v1/parse`.
3. SETU returns `{ intent: "order_status", params: { order_id: "FL1234567890" }, reply_stub: "..." }`.
4. Client's server calls its own OMS: `GET /orders/FL1234567890`.
5. Client's server calls `POST /v1/compose` with the backend response + conversation context.
6. SETU returns a natural Hinglish reply: "Aapka order 'Out for Delivery' stage mein hai, aaj sham 7 baje tak pahunch jayega."
7. Client sends that back to the customer.

### 5.2. Local test harness (what exists today in this repo)
The `frontend/` folder is a stripped-down single-turn version of this loop for **testing the model + YAML behaviour locally**. It's not the production API.

- The UI has a **Workflow** panel where you paste YAML and click **Apply**.
- The YAML is stored client-side and sent with every `/chat` request.
- The server merges it into the system prompt with instructions like *"You are a customer-facing assistant driven by the YAML workflow below. Read it, then greet the customer and drive the conversation step-by-step..."*
- The model then acts as parser + composer in one pass (there's no real backend to route intents to — the model just plays out the conversation as if the backend were present).

**Requires:** a CUDA GPU with 6+ GB VRAM. Base is 4-bit 5 GB + KV cache. Doesn't run on CPU practically (would be 20-40 seconds per reply).

### 5.3. Sample YAML shape (from [frontend/sample_workflow.yaml](frontend/sample_workflow.yaml))
```yaml
name: "AJIO Customer Support — Order Help"
language: hinglish
persona: |
  You are AJIO's customer support assistant on WhatsApp. Warm, patient,
  professional. Reply in Hinglish (Hindi in Latin script)...
greeting: |
  Namaste! AJIO customer support mein aapka swagat hai...

initial_ask:
  field: order_id
  ask: "Apna AJIO order ID bhejiye — 'FL' se start hota hai, 10 digits ka."

intents:
  - id: return_request
    triggers: ["return", "wapas", "return karna hai"]
    collect:
      - field: return_reason
        ask: "Return reason kya hai? 1) Size... 2) Quality..."
    reply: |
      Return request register kar li hai. Pickup 2-3 din mein schedule hoga...
    conditions:
      - if: "product category is 'innerwear' or 'swimwear'"
        reply: "Hygiene reasons ki wajah se yeh non-returnable hai."

policies:
  return_window: "15 din"
  refund_timeline:
    prepaid_upi: "2-3 working days"
    prepaid_card: "5-7 working days"

rules:
  - Har reply Hinglish mein — Hindi words, Latin script.
  - Ek message mein ek hi kaam.
  - Customer frustrated lage to pehle empathy dikhao.
  - Kabhi bhi OTP/CVV/card number mat maango.
```

The model reads this entire YAML on every turn and follows it.

---

## 6. Deployment modes (product plan)

Three modes shipped from day 1:

| Mode | For | Client experience | Data path |
|---|---|---|---|
| **A — Managed SaaS** | SMB (~70% of revenue) | Upload YAML, get API key | Client → SETU cloud → client's APIs → SETU cloud → client |
| **B — BYOC** | Mid-market with data concerns (~25%) | Terraform module, Docker image (vLLM), deploys into their AWS/GCP/Azure VPC | Client's data never leaves their VPC. SETU has metering/telemetry only. |
| **C — On-prem / air-gapped** | Enterprise BFSI, healthcare, gov (~5%) | Bare-metal install, 4-8 week cycle, $50k+ setup fee | Fully offline. |

**Hosting for Mode A:** launch on Runpod Serverless L40S (Mumbai region), scale-to-zero, ~$0.001/message. Graduate to dedicated L40S with vLLM continuous batching once MRR clears ~$5k.

---

## 7. Target customer (ICP)

**Primary (first 12 months):** mid-market **Indian D2C e-commerce brands** doing ₹5-100 Cr ARR, with:
- WhatsApp/web chat as primary support channel
- An existing OMS with APIs (Shopify, Unicommerce, Vinculum, custom)
- 2-8 human agents doing 500-5000 tickets/day
- Discomfort sending customer data to OpenAI / US-hosted LLMs
- No budget for $500/agent/month Intercom Fin

**Buyer:** Head of CX or Head of Ops (not the CTO — buys on deflection rate and CSAT, not tech elegance).

**Secondary:** SEA and MENA e-commerce SMBs with the same profile.

**Sector expansion after e-com:** fintech customer support, government citizen services (the name सेतु literally means "bridge"), healthcare intake, logistics ops, EdTech support.

---

## 8. What SETU is NOT

Being explicit about this because it drives every product decision:

- **Not a general-purpose chatbot** — that's ChatGPT.
- **Not a CX suite** with helpdesk, ticketing, analytics — that's Zendesk / Freshworks / Intercom.
- **Not a no-code builder** — that's Voiceflow / Landbot.
- **Not an agent framework** — no autonomous tool use, no free-form reasoning loops.
- **Not a knowledge base** — the YAML is the truth; the model doesn't retrieve from docs.
- **Not multilingual today** — English is v2, Hinglish + Hindi + Tamil + Bengali come in v3.

Also explicitly saying **no** to: emotional support / mental health, legal advice, medical diagnosis, anything requiring 100% factual accuracy without a verification layer.

---

## 9. Unit economics (for context)

- Typical support turn: ~300 input tokens + ~150 output tokens ≈ **2.3 seconds** on L40S with vLLM.
- **COGS per message:** ~$0.002 at launch, dropping to ~$0.001 at scale.
- **COGS per 6-8 turn session:** $0.012-$0.016 at launch, $0.006-$0.008 at scale.
- **vs Intercom Fin:** SETU is **60-100× cheaper** per resolution.

Pricing tiers (SaaS): Starter $99/mo (10k msgs), Growth $499/mo (100k msgs), Scale $2,499/mo (750k msgs), Enterprise custom (~$5k+/mo).

Real margin comes from **services**: custom LoRA fine-tune on client data ($2-5k one-time + $500/mo maintenance), YAML authoring workshops ($1,500), integration engineering ($150/hr).

---

## 10. Current state (as of this doc)

**Shipped:**
- `setu_lora_v2` LoRA adapter (English, format-reliable structured output)
- Local test harness: FastAPI server + chat UI + workflow paste panel
- One sample Hinglish workflow (AJIO order support) as a demo

**Not yet shipped (next priorities):**
- Production `/v1/parse` and `/v1/compose` API endpoints
- Hosting on Runpod Serverless with vLLM
- v3 LoRA (15-25k examples, multilingual, multi-vertical, DPO pass)
- BYOC Docker image
- Metering, auth, dashboard
- SETU Studio (hosted YAML authoring environment) — later, year 2 wedge

**Full GTM plan** (pricing, benchmarks, 90-day plan, risks, competitive positioning) is in [GO_TO_MARKET.md](GO_TO_MARKET.md).

---

## 11. Glossary of terms used in this project

- **YAML workflow** — a config file describing intents, fields to collect, persona, rules, and reference data. The client's source of truth for what the bot does.
- **Intent** — a customer goal (`order_status`, `return_request`, `refund_status`, etc.). SETU's parser maps free text to one of these.
- **Slot / field** — a piece of information the bot needs to fulfil an intent (order_id, phone, reason).
- **Parser** — the SETU function that turns customer text + YAML + history into `{intent, params}`.
- **Composer** — the SETU function that turns a backend response + context into natural-language reply.
- **Session state** — light per-conversation memory (which fields have been collected, which intent is active). Held client-side, passed with each request.
- **LoRA** — Low-Rank Adaptation. A ~50 MB delta on top of the base 5 GB model. Cheap to train, cheap to swap.
- **BYOC** — Bring Your Own Cloud. Client hosts the model inside their own VPC.
- **v2** — the current shipped LoRA (English, ~1,300 examples, format-focused).
- **v3** — the next LoRA (planned: 15-25k examples, multilingual, multi-vertical, DPO).

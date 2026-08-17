import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 pt-20">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black text-gradient mb-6"
            >
              Democratizing Vernacular AI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-foreground max-w-3xl mx-auto font-light leading-relaxed"
            >
              We are building India's premier API-first, open-core Vernacular AI platform designed specifically to break the language barrier for the nation's 60M+ MSMEs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glow bg-card/40 backdrop-blur-md p-10 border border-border/50 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-foreground-muted leading-relaxed text-lg">
                At Klevora, we are moving beyond Western-centric LLMs. Our mission is to empower tier-2 and tier-3 MSMEs with cost-effective, specialized Small Language Models (SLMs) fine-tuned for Indian dialects. By providing open-source foundational APIs, we aim to unlock massive economic growth and operational profitability for small businesses across India.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glow bg-card/40 backdrop-blur-md p-10 border border-border/50 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-foreground-muted leading-relaxed text-lg">
                We envision a decentralized and sovereign AI innovation ecosystem in India. We believe AI should not be restricted to elite labs. Through our Open-Core MIT-licensed models and premium specialized APIs (like Conversational Commerce and GST compliance), we are establishing a scalable architecture for digital empowerment.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-10"
          >
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Why an Open-Core API Platform?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Cost-Efficient SLMs</h3>
                <p className="text-foreground-muted">
                  Unlike expensive frontier LLMs, our Small Language Models require less compute and drastically lower the operational costs of AI adoption for bootstrapped MSMEs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Vernacular Edge</h3>
                <p className="text-foreground-muted">
                  A single Hindi sentence costs 3-4x more tokens in English models. We built our tokenization explicitly for Indian languages, enabling high accuracy and low cost.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-3">Data Sovereignty</h3>
                <p className="text-foreground-muted">
                  Our models can be deployed locally at edge locations (like CSCs or POS machines), ensuring sensitive citizen and business data remains private.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Open-Source Foundation</h3>
                <p className="text-foreground-muted">
                  Our base NLP libraries are open-sourced under an MIT license, driving community-led innovation, transparency, and developer goodwill.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Purpose-Built Modules</h3>
                <p className="text-foreground-muted">
                  Instead of a generic chatbot, we offer strict, specialized APIs like GST reconciliation and Conversational Commerce that solve real administrative pain points.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-3">Scale Beyond India</h3>
                <p className="text-foreground-muted">
                  Once proven in India's complex linguistic landscape, our modular architecture is built to seamlessly adapt to other mixed-language emerging markets globally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

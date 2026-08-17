import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Server, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Languages className="w-8 h-8 text-primary" />,
    title: "Small Language Models (SLMs)",
    description: "Fine-tuned specifically for 22+ Indian languages including Hinglish, Tamil, Telugu, and Marathi. Achieve higher accuracy for local use cases than monolithic LLMs."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Cost-Effective Inference",
    description: "Drastically reduce inference and training costs. By optimizing tokens for Indian languages, we deliver powerful AI services at a fraction of the cost of hyperscalers."
  },
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "Edge Deployable",
    description: "Architected to run efficiently on modest servers and edge devices like POS machines or Common Service Centers (CSCs) where constant cloud access is unfeasible."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Data Privacy & Sovereign AI",
    description: "Keep sensitive citizen and customer interactions private. Our open-core approach contributes to India's sovereign AI ecosystem without relying on foreign APIs."
  }
];

const VernacularAISection = () => {
  return (
    <section id="vernacular-ai" className="py-24 relative overflow-hidden bg-card/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
          >
            The Power of Vernacular AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Built on a foundational Open-Core API, our models are designed to overcome the digital divide and empower India's 60M+ MSMEs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background/40 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Animated language pills floating in background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-20">
          <motion.div 
            animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[-10%] px-4 py-2 bg-primary/20 rounded-full text-primary font-bold text-xl blur-sm"
          >
            नमस्ते
          </motion.div>
          <motion.div 
            animate={{ x: ["100%", "0%"], opacity: [0, 1, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute top-[60%] right-[-10%] px-4 py-2 bg-secondary/20 rounded-full text-secondary-foreground font-bold text-xl blur-[2px]"
          >
            வணக்கம்
          </motion.div>
          <motion.div 
            animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }} 
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
            className="absolute top-[80%] left-[-10%] px-4 py-2 bg-accent/20 rounded-full text-accent-foreground font-bold text-xl blur-sm"
          >
            నమస్కారం
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VernacularAISection;

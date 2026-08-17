import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductModulesSection = () => {
  return (
    <section id="product-modules" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Purpose-Built AI Modules
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Start with high-impact, focused automation tools designed to tackle the biggest administrative bottlenecks for MSMEs in India.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Module 1: Conversational Commerce */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.3)] transition-all duration-500 group"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 bg-primary rounded-2xl shadow-glow flex items-center justify-center relative z-10"
              >
                <MessageCircle className="w-12 h-12 text-white" />
              </motion.div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Conversational Commerce Assistant</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deploy an intelligent chatbot accessible via WhatsApp or a simple web interface. Handle common business inquiries in Hinglish and regional tongues seamlessly.
              </p>
              <ul className="space-y-3 mb-8">
                {['Manage FAQs instantly', 'Assist with basic order processing', 'Provide real-time inventory updates', 'Code-mixed language support (Hinglish)'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Explore Module <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Module 2: GST Compliance */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_-5px_rgba(var(--secondary),0.3)] transition-all duration-500 group"
          >
            <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-24 h-24 bg-secondary rounded-2xl shadow-glow-strong flex items-center justify-center relative z-10"
              >
                <FileText className="w-12 h-12 text-secondary-foreground" />
              </motion.div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">GST Compliance Assistant</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A specialized tool that addresses a critical administrative pain point. Automate invoice reading and auto-populate returns efficiently.
              </p>
              <ul className="space-y-3 mb-8">
                {['Read & extract data from invoices', 'Auto-populate GST returns', 'Reconcile data automatically', 'Ensure 100% compliance'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  Explore Module <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
          {/* Module 3: More Upcoming */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_-5px_rgba(var(--accent),0.3)] transition-all duration-500 group flex flex-col justify-center items-center text-center p-8"
          >
            <div className="w-24 h-24 mb-6 bg-accent/20 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-accent">...</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">More Modules Upcoming</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are constantly working on new open-source Vernacular AI modules for India's MSMEs. Stay tuned for updates!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductModulesSection;

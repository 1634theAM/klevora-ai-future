import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    title: "Phase 1: Foundation & Validation",
    date: "Aug 2026 - Dec 2026",
    description: "Securing DPIIT recognition and leveraging non-dilutive government grants (MeitY GENESIS, SISFS) to bootstrap the dream with zero equity dilution.",
    status: "current"
  },
  {
    title: "Phase 2: Development & Incubation",
    date: "Jan 2027 - Jun 2027",
    description: "Building the engine. Expanding language support, launching the developer portal, and validating the open-core API with early adopter MSMEs.",
    status: "upcoming"
  },
  {
    title: "Phase 3: Launch & Early Monetization",
    date: "Jul 2027 - Dec 2027",
    description: "Public beta launch of the premium API. Focusing on converting free users to paid plans and achieving positive cash flow from operations.",
    status: "upcoming"
  },
  {
    title: "Phase 4: Scaling & Expansion",
    date: "Jan 2028 onwards",
    description: "Beyond the starting line. Evaluating seed funding, adapting SLMs for other emerging markets, and embedding the AI assistant into popular e-commerce platforms.",
    status: "upcoming"
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-card/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Our Bootstrapped Roadmap
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A milestone-driven, capital-efficient journey from ideation to early revenue, fueled by India's non-dilutive startup ecosystem.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[28px] md:left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)] z-10"></div>
                
                {/* Content Box */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${phase.status === 'current' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted text-muted-foreground border border-border'}`}>
                      {phase.date}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

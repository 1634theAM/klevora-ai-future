import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

import swImg from '@/assets/sw.png';
import atharvImg from '@/assets/atharv.jpeg';

const founders = [
  {
    name: "Swanand Vaidya",
    role: "Chief Executive Officer",
    image: swImg,
    links: {
      linkedin: "https://www.linkedin.com/in/swanandvaidya/"
    }
  },
  {
    name: "Atharv More",
    role: "Chief Technology Officer",
    image: atharvImg,
    links: {
      linkedin: "https://www.linkedin.com/in/moreatharv/",
      instagram: "https://www.instagram.com/devs.404/"
    }
  }
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Meet the Founders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The visionaries behind Klevora, building the vernacular AI infrastructure for India's future.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-card bg-muted shadow-xl group-hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.6)] transition-all duration-500">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social links overlay */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {founder.links.linkedin && (
                    <a href={founder.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-primary/80 backdrop-blur-md rounded-full text-white transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {founder.links.instagram && (
                    <a href={founder.links.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-primary/80 backdrop-blur-md rounded-full text-white transition-colors duration-300">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{founder.name}</h3>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{founder.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;

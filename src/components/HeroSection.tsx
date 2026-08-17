import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Play, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < 0 || rect.bottom > viewHeight) {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoRef]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 z-10 overflow-hidden pt-32 pb-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(280_85%_55%)]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <motion.div 
        className="text-center relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient block mb-2">Klevora</span>
          <span className="block text-foreground text-4xl md:text-6xl lg:text-7xl pb-2">
            Your Klever Upgrade
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
          Empowering India's MSMEs with an open-source, API-first Vernacular AI platform. Scale your business with cost-effective <strong className="text-foreground">Small Language Models (SLMs)</strong> designed for local languages and local nuances.
        </motion.p>

        {/* Primary CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link to="/contact">
            <Button className="btn-primary inline-flex items-center gap-2 h-14 px-8 text-lg rounded-full shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_-10px_rgba(var(--primary),0.7)] transition-all duration-300">
              APIs Live Soon
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
          <a href="#product-modules" className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-foreground bg-secondary/50 hover:bg-secondary/80 rounded-full backdrop-blur-sm transition-all duration-300">
            Explore Modules
          </a>
        </motion.div>

        {/* Video and Description */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 bg-card/30 p-8 md:p-12 rounded-3xl border border-border/50 backdrop-blur-xl">
          <div className="lg:w-1/2 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Vernacular First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Speak your customers' language.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="font-semibold text-foreground">At Klevora,</span> we’re breaking the language barrier. Global LLMs struggle with Indian dialects, but our fine-tuned SLMs excel in Hinglish, Tamil, Telugu, Marathi, and more.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We provide the building blocks—text normalization, script conversion, and tokenization—so you can deploy Conversational Commerce and GST tools right to the edge, efficiently and privately.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">22+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Languages</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">10x</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Cheaper</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">Edge</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Ready</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
            <video
              ref={videoRef}
              src="/videos/klevora-klevi.mp4"
              className="w-full h-full object-cover bg-black"
              onClick={togglePlayPause}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300"
                aria-label="Play video"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-primary/90 hover:bg-primary rounded-full shadow-[0_0_30px_rgba(var(--primary),0.8)] transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </button>
            )}
            
            {/* Live Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-medium text-white/90">Live Demo</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import avatar1 from '@/assets/1North.jpg';
import avatar2 from '@/assets/PES.png';


const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Before Klevora, managing our rural customers in their local dialects was a massive challenge. With Klevora's Vernacular Conversational Commerce API, our WhatsApp bot now seamlessly interacts with customers in Hindi and Marathi, handling FAQs and orders. It's like having a 24/7 localized support team at a fraction of the cost.",
      name: "1North",
      title: "INDIA",
      avatar: avatar1,
      rating: 5
    },
    {
      quote: "Filing GST and reconciling invoices was a huge administrative burden for our small team. Klevora's GST Compliance Assistant completely automated data extraction from our regional invoices. The open-core architecture gives us peace of mind regarding data privacy, and it saves us hours of manual entry every week.",
      name: "Prathamesh Energy Solution",
      title: "INDIA",
      avatar: avatar2,
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative py-12 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Hear From Our Users
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Real people, real businesses, real results. Here's what happens when you upgrade to AI.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card-glow max-w-3xl mx-auto text-center p-8 rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-foreground-muted">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-card-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-card-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2 ">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-foreground-muted/30 hover:bg-foreground-muted/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

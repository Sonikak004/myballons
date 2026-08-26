"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Anjali M.",
    text: "My Balloons My Props made my daughter's 1st birthday an absolute dream! The decorations were flawlessly executed and the team was so professional. Highly recommend for any event in Bangalore!",
  },
  {
    id: 2,
    name: "Rohan K.",
    text: "Unmatched creativity and stress-free planning. They handled our corporate gala with such precision, transforming the venue completely. Truly the best event management company.",
  },
  {
    id: 3,
    name: "Sneha P.",
    text: "We hired them for our engagement party and the floral setups were breathtaking. They listened to our ideas and brought them to life beyond our expectations. 10/10!",
  },
  {
    id: 4,
    name: "Kavita S.",
    text: "The baby shower decorations were straight out of a fairy tale! The balloon arches and pastel themes were just gorgeous. Thank you for making it so special.",
  },
  {
    id: 5,
    name: "Arjun D.",
    text: "Absolutely brilliant service. We needed a massive stage setup for a product launch and they delivered perfection without any hassle. Highly recommended.",
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextReview = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-primary text-white w-full min-h-[100svh] flex flex-col justify-center py-12 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative items-stretch">
          {/* Left: Sticky Header Container */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-[30vh] flex flex-col gap-4 lg:gap-6">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-3 lg:mb-6">
                Loved by <br/><span className="text-secondary italic">Our Clients</span>
              </h2>
              <p className="text-white/70 font-light text-sm sm:text-base lg:text-lg mb-4 lg:mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0">
                We take pride in turning your visions into reality. Here is what our clients have to say about our meticulous planning and flawless execution.
              </p>
              
              {/* Google Badge */}
              <div className="inline-flex items-center gap-3 lg:gap-4 bg-white/5 border border-white/10 p-3 lg:p-4 rounded-2xl backdrop-blur-sm transform scale-90 lg:scale-100 origin-center lg:origin-left">
                <span className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center p-1.5 lg:p-2 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="flex gap-1 text-accent mb-0.5 lg:mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={12} className="lg:w-3.5 lg:h-3.5" />
                    ))}
                  </div>
                  <div className="text-white text-xs lg:text-sm font-medium">4.9/5 Average Rating</div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Right: Desktop Scrolling Review Cards */}
          <div className="hidden lg:flex lg:w-2/3 flex-col gap-12 w-full">
            {testimonials.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full shrink-0 bg-white/5 border border-white/10 p-12 rounded-[2rem] relative hover:bg-white/10 transition-colors duration-500 flex flex-col items-start text-left"
              >
                <Quote className="absolute top-8 right-8 text-white/5" size={80} />
                
                <div className="flex justify-start gap-1 mb-6 text-accent w-full">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                
                <p className="text-2xl text-white/90 font-serif font-light leading-relaxed mb-8 relative z-10 whitespace-normal">
                  "{review.text}"
                </p>
                
                <div className="flex flex-row items-center justify-start gap-4 relative z-10 w-full mt-auto">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold font-serif text-lg shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h4 className="font-bold text-lg text-white tracking-wide leading-tight">{review.name}</h4>
                    <span className="text-white/50 text-sm tracking-wider uppercase font-medium mt-1">Verified Client</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Mobile Single Card Viewer */}
          <div className="lg:hidden w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[1.5rem] relative flex flex-col items-center text-center shadow-2xl"
              >
                <Quote className="absolute top-4 right-4 text-white/5" size={40} />
                
                <div className="flex justify-center gap-1 mb-4 text-accent w-full">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={14} />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-white/90 font-serif font-light leading-relaxed mb-6 relative z-10 line-clamp-4">
                  "{testimonials[activeIdx].text}"
                </p>
                
                <div className="flex flex-row items-center justify-center gap-3 relative z-10 w-full mt-auto">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold font-serif text-base shrink-0 shadow-lg">
                    {testimonials[activeIdx].name.charAt(0)}
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h4 className="font-bold text-sm text-white tracking-wide leading-tight">{testimonials[activeIdx].name}</h4>
                    <span className="text-white/50 text-[10px] tracking-wider uppercase font-medium mt-0.5">Verified Client</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button 
                onClick={prevReview}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} className="text-white/70" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? 'bg-secondary w-6' : 'bg-white/20 w-1.5'}`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextReview}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight size={16} className="text-white/70" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

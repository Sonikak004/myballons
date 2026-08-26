"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.85; // rough width of one card
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-white w-full py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-stretch">
          {/* Left: Sticky Header Container */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-[30vh] flex flex-col gap-6">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Loved by <br/><span className="text-secondary italic">Our Clients</span>
              </h2>
              <p className="text-white/70 font-light text-lg mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0">
                We take pride in turning your visions into reality. Here is what our clients have to say about our meticulous planning and flawless execution.
              </p>
              
              {/* Google Badge */}
              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </span>
                <div>
                  <div className="flex gap-1 text-accent mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={14} />
                    ))}
                  </div>
                  <div className="text-white text-sm font-medium">4.9/5 Average Rating</div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Right: Scrolling Review Cards */}
          <div className="lg:w-2/3 w-full">
            <div ref={scrollRef} className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-6 lg:gap-12 pb-4 lg:pb-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-[calc(100vw-2rem)] md:w-full -mx-4 px-4 md:mx-0 md:px-0">
              {testimonials.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="w-[85vw] md:w-[400px] lg:w-full shrink-0 snap-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] relative hover:bg-white/10 transition-colors duration-500"
                >
                  <Quote className="absolute top-8 right-8 text-white/5" size={80} />
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={20} />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-serif font-light leading-relaxed mb-8 relative z-10 whitespace-normal">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold font-serif text-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-white tracking-wide">{review.name}</h4>
                      <span className="text-white/50 text-xs md:text-sm tracking-wider uppercase font-medium">Verified Client</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Scroll Indicators */}
            <div className="flex lg:hidden justify-center items-center gap-4 mt-6">
              <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} className="text-white/70" />
              </button>
              <span className="text-white/30 text-sm font-light tracking-widest uppercase">Swipe</span>
              <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={24} className="text-white/70" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

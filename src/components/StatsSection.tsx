"use client";

import { motion, useInView } from "framer-motion";
import { Star, Briefcase, Users, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// A neat counter component that animates from 0 to the target number
function Counter({ end, duration = 2, decimals = 0, suffix = "" }: { end: number, duration?: number, decimals?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        // easeOutQuart easing for a smooth slowdown
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(easeProgress * end);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

const stats = [
  {
    id: 1,
    end: 18,
    decimals: 0,
    suffix: "+",
    label: "Services Offered",
    icon: Briefcase,
    delay: 0.1,
  },
  {
    id: 2,
    end: 4.9,
    decimals: 1,
    suffix: "",
    label: "36 Customer Reviews",
    icon: Star,
    isRating: true,
    delay: 0.2,
  },
  {
    id: 3,
    end: 1200,
    decimals: 0,
    suffix: "+",
    label: "Happy Customers",
    icon: Users,
    delay: 0.3,
  }
];

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
  }
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-primary text-white w-full overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 uppercase tracking-wider"
          >
            🌟 Trusted by our customers
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Proven Success in Numbers
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-24">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                {stat.isRating ? (
                  <div className="flex gap-1 mb-4 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={24} />
                    ))}
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                    <Icon size={32} />
                  </div>
                )}
                
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 tabular-nums">
                  <Counter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                </h3>
                <p className="text-white/70 text-lg font-light tracking-wide text-center">
                  {stat.label}
                </p>
                {stat.isRating && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-1">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </span>
                    <span className="text-white/60 text-sm font-medium">Google Reviews</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-6 italic text-sm md:text-base">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary font-serif">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-white">{review.name}</h4>
                  <span className="text-white/50 text-xs">Verified Customer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

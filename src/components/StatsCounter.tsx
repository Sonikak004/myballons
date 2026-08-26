"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

function Counter({ end, duration = 2, decimals = 0, suffix = "" }: { end: number, duration?: number, decimals?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
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
  { id: 1, end: 18, decimals: 0, suffix: "+", label: "Services Offered" },
  { id: 2, end: 4.9, decimals: 1, suffix: "", label: "Average Rating", isRating: true },
  { id: 3, end: 1200, decimals: 0, suffix: "+", label: "Happy Customers" },
];

export default function StatsCounter() {
  return (
    <section className="py-10 md:py-12 bg-white w-full border-b border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Modest Elegant Number */}
              <div className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-primary mb-2 md:mb-3 tracking-tighter tabular-nums leading-none">
                <Counter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              
              {/* Optional Rating Stars right below the number */}
              {stat.isRating && (
                <div className="flex gap-1 mb-2 text-accent group-hover:scale-110 transition-transform duration-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} className="drop-shadow-sm" />
                  ))}
                </div>
              )}
              
              {/* Elegant Label */}
              <p className="text-foreground/60 text-base md:text-lg font-light uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

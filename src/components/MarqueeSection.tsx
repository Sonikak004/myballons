"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function MarqueeSection() {
  return (
    <section className="relative bg-primary py-12 md:py-16 w-full overflow-hidden flex items-center border-y border-white/10">
      
      {/* 
        Using Framer Motion for infinite smooth scrolling.
        We duplicate the content array to ensure a seamless loop.
      */}
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
          // By doubling the content inside this single scrolling div and animating to -50%, it loops perfectly.
        >
          {/* We render the same items multiple times to ensure the loop fills the screen */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white uppercase tracking-wider">
                Let's Create Something Beautiful
              </h2>
              <Sparkles className="text-accent shrink-0" size={40} />
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white/50 uppercase tracking-wider">
                Uniquely Yours
              </h2>
              <Sparkles className="text-secondary shrink-0" size={40} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient edges to fade out the text as it enters/leaves the screen */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
    </section>
  );
}

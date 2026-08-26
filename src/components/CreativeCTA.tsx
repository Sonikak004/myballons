"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CreativeCTA() {
  return (
    <section className="bg-background py-32 w-full flex items-center justify-center relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mb-8"
        >
          <Sparkles className="text-accent w-6 h-6 md:w-8 md:h-8" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 leading-tight tracking-tight"
        >
          Let's Create Something <span className="text-secondary italic">Beautiful.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-full mx-auto mb-10"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Every celebration is a blank canvas. Whether you envision an intimate romantic setting or a vibrant, high-energy party, we design experiences that are <span className="font-medium text-foreground">uniquely yours.</span>
        </motion.p>
        
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the background slightly slower than the scroll speed for a parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-[120%]"
        style={{ y }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            We Bring Your Vision to Life
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Our team of expert planners ensures seamless execution and exceptional memories for you and your guests. Every detail handled with precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

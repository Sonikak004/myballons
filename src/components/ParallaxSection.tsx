"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
      className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-[120%]"
        style={{ y }}
      >
        <div className="absolute w-full h-[125%] -top-[25%] left-0">
          <Image
            src="/gallery/photo-3.jpg"
            alt="Beautiful balloon decoration"
            fill
            priority={false}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
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
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Every celebration is a blank canvas. Whether you envision an intimate romantic setting or a vibrant, high-energy party, we design experiences that are uniquely yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

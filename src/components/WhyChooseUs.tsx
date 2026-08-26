"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Expanding Text Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0, letterSpacing: "-0.1em" }}
            whileInView={{ scale: 1, opacity: 1, letterSpacing: "normal" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-secondary rounded-full mb-8"
          />

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed"
          >
            With years of experience, we bring a touch of magic to every event. Our commitment to excellence and eye for detail ensures that your special moments are nothing short of spectacular.
          </motion.p>
        </div>

        {/* Side-by-Side Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/video-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/10" />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl md:translate-y-12"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/video-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/10" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

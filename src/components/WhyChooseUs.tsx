"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = [
    "/videos/video-2.mp4",
    "/videos/video-3.mp4",
    "/videos/video-4.mp4"
  ];

  useEffect(() => {
    // Cut to the next video every 3 seconds for a high-energy "mashup" edit feel
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6"
          >
            Why Choose Us
          </motion.h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-8" />
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70 font-light max-w-2xl"
          >
            With years of experience, we bring a touch of magic to every event. Our commitment to excellence ensures your special moments are nothing short of spectacular.
          </motion.p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto md:auto-rows-[340px]">
          
          {/* Box 1: Large Video Box (2x2) - Dynamic Montage */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-h-[400px] md:min-h-0 bg-black"
          >
            {videos.map((src, idx) => (
              <video 
                key={src}
                autoPlay 
                loop 
                muted 
                playsInline 
                onLoadedData={(e) => {
                  e.currentTarget.currentTime = 3; // Skip first 3 seconds universally
                }}
                className={`absolute w-full h-[115%] -top-[15%] left-0 object-cover transition-opacity duration-700 ease-in-out ${
                  idx === activeVideo ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white z-10">
              <Sparkles className="text-secondary mb-4" size={40} />
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Unmatched Creativity</h3>
              <p className="text-white/80 font-light leading-relaxed max-w-md text-lg">We don't just follow trends; we set them with bespoke, personalized designs tailored exactly to your vision.</p>
            </div>
          </motion.div>

          {/* Box 2: Stress-Free Planning (1x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 bg-primary rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 text-white/5 pointer-events-none">
              <HeartHandshake size={160} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Stress-Free Planning</h3>
              <p className="text-white/70 font-light leading-relaxed text-sm">From conceptualization to the final toast, we handle the logistics so you can actually enjoy your event without lifting a single finger.</p>
            </div>
          </motion.div>

          {/* Box 3: Flawless Execution (1x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-center border border-primary/5"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <ShieldCheck className="text-secondary" size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">Flawless Execution</h3>
            <p className="text-foreground/60 font-light text-sm leading-relaxed">Our eagle-eye for detail ensures absolute perfection. Every timeline, every centerpiece, executed exactly as planned.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

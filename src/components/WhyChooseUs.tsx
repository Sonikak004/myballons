"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
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
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
          
          {/* Box 1: Large Video Box (2x2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-h-[400px] md:min-h-0"
          >
            <video autoPlay loop muted playsInline className="absolute w-full h-[115%] -top-[15%] left-0 object-cover">
              <source src="/videos/video-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white z-10">
              <Sparkles className="text-secondary mb-4" size={32} />
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Unmatched Creativity</h3>
              <p className="text-white/80 font-light leading-relaxed max-w-sm">We don't just follow trends; we set them with bespoke, personalized designs tailored exactly to your vision.</p>
            </div>
          </motion.div>

          {/* Box 2: Wide Text Box (2x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 bg-primary rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-white/5 pointer-events-none">
              <HeartHandshake size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">Stress-Free Planning</h3>
              <p className="text-white/70 font-light leading-relaxed max-w-md">From conceptualization to the final toast, we handle the logistics so you can actually enjoy your event without lifting a single finger.</p>
            </div>
          </motion.div>

          {/* Box 3: Square Photo (1x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-h-[250px] md:min-h-0"
          >
            <Image 
              src="/gallery/photo-6.jpg"
              alt="Beautiful event setup"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="absolute w-full h-[115%] -top-[15%] left-0 object-cover"
            />
          </motion.div>

          {/* Box 4: Square Text Box (1x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-center items-center text-center border border-primary/5"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <ShieldCheck className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">Flawless<br/>Execution</h3>
            <p className="text-foreground/60 text-sm font-light">Our eagle-eye for detail ensures absolute perfection.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

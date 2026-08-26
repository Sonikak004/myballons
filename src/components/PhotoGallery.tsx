"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/gallery/photo-13.jpg",
  "/gallery/photo-14.jpg",
  "/gallery/photo-15.jpg",
  "/gallery/photo-16.jpg",
  "/gallery/photo-17.jpg",
  "/gallery/photo-18.jpg",
];

// Duplicate the array to create a seamless infinite loop
const filmStripImages = [...images, ...images];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            A Glimpse of Magic
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/70 font-light max-w-2xl mx-auto"
          >
            Browse through some of our most memorable events and breathtaking setups.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col py-4">
        
        {/* Subtle white fade gradients on the edges for a premium look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* The continuously moving film strip */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className="flex gap-4 md:gap-8 w-max px-4 md:px-8"
        >
          {filmStripImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] sm:w-[450px] md:w-[600px] aspect-[16/9] shrink-0 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              {/* Aggressive 25% watermark crop */}
              <div className="absolute w-full h-[125%] -top-[25%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
                <Image 
                  src={src} 
                  alt="Event Setup Frame" 
                  fill 
                  sizes="(max-width: 768px) 450px, 600px" 
                  className="object-cover" 
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}

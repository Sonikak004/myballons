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

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
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

        {/* CSS Masonry Layout (Pinterest Style) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {images.map((src, idx) => {
            // Assign varying heights to create the authentic masonry look
            let aspectClass = "aspect-square";
            if (idx % 3 === 0) aspectClass = "aspect-[3/4]"; // Tall portrait
            else if (idx % 2 === 0) aspectClass = "aspect-[4/3]"; // Wide landscape

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative w-full ${aspectClass} block mb-4 md:mb-6 rounded-3xl overflow-hidden shadow-lg group cursor-pointer break-inside-avoid`}
              >
                {/* 25% aggressive crop to hide watermarks */}
                <div className="absolute w-full h-[125%] -top-[25%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
                  <Image 
                    src={src} 
                    alt={`Event Gallery Photo ${idx + 1}`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover" 
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

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

// Tailwind classes for the perfect 4x3 flush bento box
const bentoClasses = [
  "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto", // Photo 1: Large Square
  "md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto",  // Photo 2: Wide Landscape
  "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto", // Photo 3: Small Square
  "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto", // Photo 4: Small Square
  "md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto",  // Photo 5: Wide Landscape
  "md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto",  // Photo 6: Wide Landscape
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

        {/* Flush Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-4 md:gap-6 w-full">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative w-full h-full ${bentoClasses[idx]} rounded-3xl overflow-hidden shadow-lg group cursor-pointer`}
            >
              {/* 25% aggressive crop to hide watermarks */}
              <div className="absolute w-full h-[125%] -top-[25%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
                <Image 
                  src={src} 
                  alt={`Event Gallery Photo ${idx + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover" 
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

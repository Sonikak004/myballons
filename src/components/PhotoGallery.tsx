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

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[minmax(300px,_400px)_minmax(300px,_400px)_minmax(300px,_400px)] gap-4 md:gap-6">
          
          {/* Large Landscape - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-1 relative aspect-[16/9] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
              <Image
                src="/gallery/photo-13.jpg"
                alt="Grand Corporate Setup"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

          {/* Tall Portrait - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 relative aspect-[3/4] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
              <Image
                src="/gallery/photo-14.jpg"
                alt="Elegant Wedding Arch"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

          {/* Square - Middle Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 relative aspect-square md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
              <Image
                src="/gallery/photo-15.jpg"
                alt="Neon Birthday Party"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

          {/* Medium Landscape - Middle Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 relative aspect-[4/3] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
              <Image
                src="/gallery/photo-16.jpg"
                alt="Intimate Anniversary Dinner"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

          {/* Wide Landscape - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-1 relative aspect-[16/9] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
              <Image
                src="/gallery/photo-17.jpg"
                alt="Floral Centerpiece"
                fill
                sizes="(max-width: 768px) 100vw, 41vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

          {/* Large Landscape - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-7 md:row-span-1 relative aspect-[21/9] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <div className="absolute w-full h-[115%] -top-[15%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
              <Image
                src="/gallery/photo-18.jpg"
                alt="Outdoor Event Lighting"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

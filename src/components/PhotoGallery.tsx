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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt="Event Gallery Photo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute w-full h-[115%] -top-[15%] left-0 object-cover transition-transform duration-700 group-hover:scale-110 origin-bottom"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

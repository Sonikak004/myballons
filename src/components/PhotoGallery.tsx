"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/gallery/photo-19.jpg",
  "/gallery/photo-20.webp",
  "/gallery/photo-21.webp",
  "/gallery/photo-23.webp",
  "/gallery/photo-24.webp",
  "/gallery/photo-25.webp",
  "/gallery/photo-26.webp",
  "/gallery/photo-27.webp",
  "/gallery/photo-28.webp",
  "/gallery/photo-29.webp",
  "/gallery/photo-30.jpg",
  "/gallery/photo-31.webp",
  "/gallery/photo-32.webp",
];

// Tailwind classes for the perfect flush bento box, completely responsive!
const bentoClasses = [
  "col-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto", 
  "col-span-1 md:col-span-2 md:row-span-1 aspect-square md:aspect-auto",
  "col-span-1 md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  "col-span-1 md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
  "col-span-1 md:col-span-2 md:row-span-1 aspect-square md:aspect-auto",
  "col-span-2 md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto", 
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-12 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            A Glimpse of Magic
          </h2>
          <p className="text-foreground/70 font-light max-w-2xl mx-auto">
            Browse through some of our most memorable events and breathtaking setups.
          </p>
        </div>

        {/* Flush Bento Box Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[300px] gap-4 md:gap-6 w-full">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`relative w-full h-full ${bentoClasses[idx % bentoClasses.length]} rounded-3xl overflow-hidden shadow-lg group cursor-pointer`}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

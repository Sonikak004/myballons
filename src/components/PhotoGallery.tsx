"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/gallery/photo-13.jpg",
  "/gallery/photo-14.jpg",
  "/gallery/photo-15.jpg",
  "/gallery/photo-16.jpg",
  "/gallery/photo-17.jpg",
  "/gallery/photo-18.jpg",
];

const gridClasses = [
  "md:col-span-8 md:row-span-1 aspect-[16/9] md:aspect-auto",
  "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto",
  "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto",
  "md:col-span-4 md:row-span-1 aspect-[4/3] md:aspect-auto",
  "md:col-span-5 md:row-span-1 aspect-[16/9] md:aspect-auto",
  "md:col-span-7 md:row-span-1 aspect-[21/9] md:aspect-auto",
];

const rotations = [-12, 8, -6, 14, -5, 10];

export default function PhotoGallery() {
  const [phase, setPhase] = useState<"hidden" | "pile" | "grid">("hidden");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView && phase === "hidden") {
      setPhase("pile");
      // Wait for all 6 photos to drop into the pile (6 * 0.15s = 0.9s), plus a short beat to admire the pile.
      const timer = setTimeout(() => {
        setPhase("grid");
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isInView, phase]);

  return (
    <section id="gallery" className="py-24 bg-white w-full overflow-hidden">
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

        <div ref={ref} className="relative min-h-[600px] w-full flex items-center justify-center">
          
          {phase === "hidden" && <div className="w-full h-full min-h-[600px]" />}

          {/* PHASE 1: PHOTO DUMP PILE */}
          {phase === "pile" && (
            <div className="relative w-[300px] h-[400px]">
              {images.map((src, idx) => (
                <motion.div
                  key={`pile-${idx}`}
                  layoutId={`photo-${idx}`}
                  initial={{ y: -800, opacity: 0, rotate: rotations[idx] - 30, scale: 1.5 }}
                  animate={{ y: 0, opacity: 1, rotate: rotations[idx], scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    damping: 15, 
                    stiffness: 100, 
                    delay: idx * 0.15 
                  }}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[8px] border-white origin-center"
                  style={{ zIndex: idx }}
                >
                  <div className="absolute w-full h-[125%] -top-[25%] left-0 bg-gray-200">
                    <Image src={src} alt="Photo Dump" fill sizes="300px" className="object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* PHASE 2: SPREAD OUT INTO MASONRY GRID */}
          {phase === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[minmax(300px,_400px)_minmax(300px,_400px)_minmax(300px,_400px)] gap-4 md:gap-6 w-full">
              {images.map((src, idx) => (
                <motion.div
                  key={`grid-${idx}`}
                  layoutId={`photo-${idx}`}
                  transition={{ 
                    type: "spring", 
                    damping: 18, 
                    stiffness: 80,
                    delay: idx * 0.05 // Slight stagger when expanding
                  }}
                  className={`${gridClasses[idx]} relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer z-10 hover:z-20`}
                >
                  <div className="absolute w-full h-[125%] -top-[25%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center bg-gray-200">
                    <Image src={src} alt="Event Gallery" fill sizes="100vw" className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

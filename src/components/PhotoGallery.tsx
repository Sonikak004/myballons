"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [photoStates, setPhotoStates] = useState<string[]>(Array(6).fill("hidden"));

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      setPhotoStates((prev) => {
        const newStates = images.map((_, idx) => {
          // Each photo drops in at a different 10% scroll threshold (0.1, 0.2, 0.3, 0.4, 0.5, 0.6)
          const dropThreshold = (idx + 1) * 0.10;
          // All photos spread into the grid simultaneously at 80% scroll
          const gridThreshold = 0.80;

          if (v < dropThreshold) return "hidden";
          if (v >= dropThreshold && v < gridThreshold) return "pile";
          return "grid";
        });
        
        // Only trigger React state update if something actually changed
        if (JSON.stringify(prev) === JSON.stringify(newStates)) return prev;
        return newStates;
      });
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} id="gallery" className="h-[400vh] bg-white w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center py-24">
        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col relative">
          
          <div className="text-center mb-12 shrink-0 z-50">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              A Glimpse of Magic
            </h2>
            <p className="text-foreground/70 font-light max-w-2xl mx-auto">
              Keep scrolling to unpack our most memorable events and breathtaking setups.
            </p>
          </div>

          <div className="relative flex-grow w-full flex items-center justify-center">
            
            {/* PHASE 1: HIDDEN (Off-screen left and right) */}
            <div className="absolute inset-0 pointer-events-none">
              {images.map((src, idx) => photoStates[idx] === "hidden" && (
                <motion.div
                  key={`hidden-${idx}`}
                  layoutId={`photo-${idx}`}
                  transition={{ type: "spring", damping: 20, stiffness: 60 }}
                  className="absolute top-1/2 -translate-y-1/2 w-[350px] md:w-[450px] aspect-[4/5] bg-white p-4 pb-16 shadow-2xl border border-gray-100"
                  style={{
                    left: idx % 2 === 0 ? "-100vw" : "150vw", // Alternate left and right
                    rotate: idx % 2 === 0 ? -45 : 45
                  }}
                >
                  <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                     <Image src={src} alt="Gallery" fill sizes="450px" className="object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PHASE 2: PHOTO DUMP PILE (Center) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-[350px] md:w-[450px] aspect-[4/5]">
                {images.map((src, idx) => photoStates[idx] === "pile" && (
                  <motion.div
                    key={`pile-${idx}`}
                    layoutId={`photo-${idx}`}
                    transition={{ type: "spring", damping: 15, stiffness: 90 }}
                    className="absolute inset-0 bg-white p-4 pb-16 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 origin-center pointer-events-auto"
                    style={{ zIndex: idx, rotate: rotations[idx] }}
                  >
                    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                      <div className="absolute w-full h-[125%] -top-[25%] left-0">
                        <Image src={src} alt="Photo Dump" fill sizes="450px" className="object-cover" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* PHASE 3: SPREAD OUT INTO MASONRY GRID */}
            <div className="absolute inset-0 w-full h-full pb-12 flex items-center justify-center pointer-events-none">
              <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[minmax(200px,_25vh)_minmax(200px,_25vh)_minmax(200px,_25vh)] gap-4 md:gap-6 w-full h-full max-h-full">
                {images.map((src, idx) => (
                  <div key={`slot-${idx}`} className={`${gridClasses[idx]} relative`}>
                    {photoStates[idx] === "grid" && (
                      <motion.div
                        layoutId={`photo-${idx}`}
                        transition={{ type: "spring", damping: 20, stiffness: 80 }}
                        className={`absolute inset-0 bg-white p-2 pb-8 shadow-xl border border-gray-100 group cursor-pointer z-10 hover:z-20 pointer-events-auto`}
                        style={{ rotate: 0 }}
                      >
                        <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                          <div className="absolute w-full h-[125%] -top-[25%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
                            <Image src={src} alt="Event Gallery" fill sizes="100vw" className="object-cover" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

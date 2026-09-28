"use client";

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

const slides = [
  "/gallery/photo-27.webp",
  "/gallery/photo-28.webp",
  "/gallery/photo-29.webp",
  "/gallery/photo-30.jpg",
  "/gallery/photo-31.webp",
  "/gallery/photo-32.webp",
  // Duplicates for seamless reel effect
  "/gallery/photo-27.webp",
  "/gallery/photo-28.webp",
  "/gallery/photo-29.webp",
  "/gallery/photo-30.jpg",
  "/gallery/photo-31.webp",
  "/gallery/photo-32.webp",
]

export default function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5 })]
  )

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerUp', () => {
        const autoScroll = emblaApi.plugins().autoScroll;
        if (autoScroll && !autoScroll.isPlaying()) autoScroll.play();
      });
    }
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-6 md:mb-12 flex flex-col items-center">
          <motion.div 
            
            
            
            
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-3 md:mb-4">
              Moments We Cherish
            </h2>
            <p className="text-foreground/70 font-light text-base md:text-lg">
              A curated collection of extraordinary setups.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Full-bleed Carousel */}
      <div className="w-full mt-2 md:mt-4 cursor-grab active:cursor-grabbing">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -ml-6">
            {slides.map((src, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-6"
              >
                <div 
                  className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="absolute w-full h-[125%] -top-[25%] left-0 transition-transform duration-700 group-hover:scale-105 origin-center">
                    <Image 
                      src={src}
                      alt="Event Setup Showcase"
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 30vw"
                      className="object-cover"
                     quality={100} />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0 z-10 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

const slides = [
  "/gallery/photo-7.jpg",
  "/gallery/photo-8.jpg",
  "/gallery/photo-9.jpg",
  "/gallery/photo-10.jpg",
  "/gallery/photo-11.jpg",
  // Duplicates for seamless reel effect
  "/gallery/photo-7.jpg",
  "/gallery/photo-8.jpg",
  "/gallery/photo-9.jpg",
  "/gallery/photo-10.jpg",
  "/gallery/photo-11.jpg",
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
    <section className="py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Moments We Cherish
            </h2>
            <p className="text-foreground/70 font-light text-lg">
              A curated collection of extraordinary setups.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Full-bleed Carousel */}
      <div className="w-full mt-12 cursor-grab active:cursor-grabbing">
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
                  <Image 
                    src={src}
                    alt="Event Setup Showcase"
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 30vw"
                    className="absolute w-full h-[115%] -top-[15%] left-0 object-cover transition-transform duration-700 group-hover:scale-105 origin-bottom"
                  />
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

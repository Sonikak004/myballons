"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Corporate Excellence Gala",
    category: "Corporate Events",
    desc: "A sophisticated setup designed for a fortune 500 company, featuring elegant lighting and bespoke centerpieces.",
    image: "/gallery/photo-12.jpg",
    bgColor: "bg-[#fcfbf8]",
  },
  {
    id: 2,
    title: "Enchanted Garden Wedding",
    category: "Weddings",
    desc: "A breathtaking outdoor ceremony with lush floral arches, romantic seating, and fairy lights.",
    image: "/gallery/photo-13.jpg",
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "Neon Birthday Bash",
    category: "Private Parties",
    desc: "A high-energy birthday celebration complete with neon signs, custom dance floors, and dynamic lighting.",
    image: "/gallery/photo-14.jpg",
    bgColor: "bg-[#fcfbf8]",
  },
  {
    id: 4,
    title: "Elegant Anniversary Setup",
    category: "Celebrations",
    desc: "An intimate and luxurious setting to celebrate years of togetherness, featuring custom photo walls.",
    image: "/gallery/photo-15.jpg",
    bgColor: "bg-white",
  },
];

export default function StackedEvents() {
  return (
    <section className="bg-background relative w-full pb-12 md:pb-24">
      
      <div className="py-12 md:py-24 text-center px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4"
        >
          Signature Experiences
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70 font-light max-w-2xl mx-auto text-lg"
        >
          Scroll to explore our meticulously crafted events.
        </motion.p>
      </div>

      <div className="relative w-full">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`sticky top-0 h-[100svh] w-full flex items-center justify-center ${event.bgColor} shadow-[0_-10px_40px_rgba(0,0,0,0.1)]`}
            style={{
              zIndex: index + 10,
            }}
          >
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* Left Image */}
              <div className="w-full md:w-1/2 h-[50svh] md:h-full relative overflow-hidden shrink-0">
                <div className="absolute w-full h-[125%] -top-[25%] left-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center py-8 md:py-16 px-6 sm:px-8 md:px-16 lg:px-24">
                <span className="inline-block py-1 px-3 md:px-4 rounded-full border border-primary/20 text-primary text-xs md:text-sm font-medium mb-3 md:mb-6 uppercase tracking-wider w-fit">
                  {event.category}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-primary mb-3 md:mb-6 leading-tight">
                  {event.title}
                </h3>
                <p className="text-sm md:text-lg text-foreground/70 font-light leading-relaxed max-w-md">
                  {event.desc}
                </p>
                <div className="mt-6 md:mt-10">
                  <a 
                    href="#contact" 
                    className="pb-1 md:pb-2 border-b-2 border-primary text-primary text-sm md:text-base font-medium hover:text-secondary hover:border-secondary transition-colors inline-block"
                  >
                    Plan Similar Event
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

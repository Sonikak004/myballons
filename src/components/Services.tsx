"use client";

import React from 'react';
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { 
  Sparkles, Gift, PartyPopper, Cake, Star, 
  Briefcase, Utensils, Users, Flower2, Church, School, Crown, HeartHandshake, Tent 
} from "lucide-react";

const servicesTop = [
  { title: "Corporate & Conferences", icon: Briefcase, desc: "Professional event management" },
  { title: "Weddings & Engagements", icon: HeartHandshake, desc: "Complete wedding coordination" },
  { title: "Birthday & Theme Parties", icon: Cake, desc: "Immersive themes & home decor" },
  { title: "Baby Showers", icon: Gift, desc: "Beautiful setups for parents-to-be" },
  { title: "Floral & Balloon Decor", icon: Flower2, desc: "Custom arches, styling & flowers" },
  { title: "Catering Services", icon: Utensils, desc: "Delicious & tailored menus" },
];

const servicesBottom = [
  { title: "Children's Parties", icon: PartyPopper, desc: "Fun-filled kid's celebrations" },
  { title: "Religious Events", icon: Church, desc: "Respectful coordination & setups" },
  { title: "School Events", icon: School, desc: "Engaging school functions" },
  { title: "Anniversary Celebrations", icon: Star, desc: "Custom anniversary decor" },
  { title: "Community Events", icon: Users, desc: "Large-scale planning & coordination" },
  { title: "Retirement Parties", icon: Tent, desc: "Memorable milestone celebrations" },
  { title: "Bridal Shows", icon: Crown, desc: "Seamless show management" },
];

const ServiceCard = ({ service }: { service: any }) => {
  const Icon = service.icon;
  return (
    <div className="flex-[0_0_auto] min-w-[240px] md:min-w-[350px] pl-3 md:pl-6">
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 group flex items-start gap-3 md:gap-4 h-full">
        <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base md:text-lg font-bold font-serif text-primary leading-tight mb-1 md:mb-2">
            {service.title}
          </h3>
          <p className="text-xs md:text-sm text-foreground/60 font-light leading-snug">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const [emblaRefTop] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })]
  );

  const [emblaRefBottom] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1, direction: 'backward' })]
  );

  return (
    <section id="services" className="py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            The Journey & Services
          </motion.h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-accent rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-foreground/70 font-light max-w-2xl mx-auto"
          >
            From conceptualization to execution, we offer a comprehensive range of event management services tailored to your needs.
          </motion.p>
        </div>

      </div>

      {/* Marquee Top */}
      <div className="w-full mb-6 md:mb-8 cursor-grab active:cursor-grabbing">
        <div className="embla overflow-hidden" ref={emblaRefTop}>
          <div className="embla__container flex -ml-4 md:-ml-6 py-2">
            {/* Render 3 times for seamless looping */}
            {[...servicesTop, ...servicesTop, ...servicesTop].map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Bottom */}
      <div className="w-full cursor-grab active:cursor-grabbing">
        <div className="embla overflow-hidden" ref={emblaRefBottom}>
          <div className="embla__container flex -ml-4 md:-ml-6 py-2">
            {[...servicesBottom, ...servicesBottom, ...servicesBottom].map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

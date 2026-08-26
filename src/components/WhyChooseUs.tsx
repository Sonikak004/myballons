"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const polaroids = [
    {
      src: "/gallery/photo-13.jpg",
      caption: "Stuthi's 1st Birthday",
      rotate: "-rotate-6",
      zIndex: "z-10",
      position: "top-[5%] left-[2%] md:top-[5%] md:left-[5%]",
      width: "w-[200px] sm:w-[230px] md:w-[280px]"
    },
    {
      src: "/gallery/photo-14.jpg",
      caption: "Ushith Reddy, Turns 1",
      rotate: "rotate-3",
      zIndex: "z-20",
      position: "top-[25%] right-[2%] md:top-[25%] md:right-[5%]",
      width: "w-[220px] sm:w-[250px] md:w-[300px]"
    },
    {
      src: "/gallery/photo-15.jpg",
      caption: "Flawless Execution",
      rotate: "-rotate-2",
      zIndex: "z-30",
      position: "bottom-[5%] left-[10%] md:bottom-[5%] md:left-[15%]",
      width: "w-[210px] sm:w-[240px] md:w-[290px]"
    }
  ];

  const features = [
    {
      title: "Unmatched Creativity",
      description: "We don't just follow trends; we set them with bespoke, personalized designs tailored exactly to your vision.",
      color: "bg-secondary",
      textColor: "text-secondary"
    },
    {
      title: "Stress-Free Planning",
      description: "From conceptualization to the final toast, we handle the logistics so you can actually enjoy your event without lifting a single finger.",
      color: "bg-primary",
      textColor: "text-primary"
    },
    {
      title: "Flawless Execution",
      description: "Our eagle-eye for detail ensures absolute perfection so that your special moments run smoothly and exactly as planned.",
      color: "bg-accent",
      textColor: "text-accent-foreground"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          >
            Why Hosts <span className="text-secondary">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70 font-light"
          >
            With years of experience, we bring a touch of magic to every event. Our commitment to excellence ensures your special moments are nothing short of spectacular.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left: Polaroid Stack (Scrapbook Idea) */}
          <div className="relative w-full h-[450px] sm:h-[500px] md:h-[700px] flex items-center justify-center">
            {/* Background decorative elements */}
            <div className="absolute top-[10%] left-[20%] w-3 h-3 rounded-full bg-accent opacity-70" />
            <div className="absolute top-[40%] right-[10%] w-2 h-2 rounded-full bg-secondary opacity-70" />
            <div className="absolute bottom-[20%] left-[15%] w-2.5 h-2.5 rounded-full bg-primary opacity-70" />

            {polaroids.map((polaroid, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: polaroid.rotate === "rotate-3" ? 3 : (polaroid.rotate === "-rotate-6" ? -6 : -2) }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`absolute ${polaroid.position} ${polaroid.width} ${polaroid.zIndex} hover:z-40 transition-all duration-300 hover:scale-105 group cursor-pointer`}
              >
                {/* Polaroid Frame */}
                <div className="bg-white p-2 sm:p-3 pb-10 sm:pb-12 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15)] rounded-sm group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] transition-shadow">
                  {/* Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-16 sm:w-20 h-6 sm:h-7 bg-white/50 border border-white/60 shadow-sm z-20 backdrop-blur-sm" />
                  
                  {/* Image Container with Watermark Crop */}
                  <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden pointer-events-none">
                    <div className="absolute w-full h-[125%] -top-[25%] left-0">
                      <Image 
                        src={polaroid.src} 
                        alt={polaroid.caption} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 250px, 300px"
                      />
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 right-2 sm:left-4 sm:right-4 text-center">
                    <span className="font-serif italic text-foreground text-sm sm:text-lg md:text-xl font-medium tracking-wide">
                      {polaroid.caption}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Text Tags */}
          <div className="flex flex-col gap-10 md:gap-12 pl-0 md:pl-10 lg:pl-16">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Pin / Connector Line */}
                <div className="absolute left-0 top-1 md:top-2 flex flex-col items-center h-full">
                  <div className={`w-4 h-4 rounded-full shadow-md ${feature.color} relative z-10 group-hover:scale-125 transition-transform duration-300`} />
                  {idx !== features.length - 1 && (
                    <div className="w-[2px] h-[calc(100%+2rem)] md:h-[calc(100%+2.5rem)] bg-gradient-to-b from-foreground/10 to-transparent mt-2 border-l border-dashed border-foreground/20" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-3 ${feature.textColor === 'text-accent-foreground' ? 'text-primary' : feature.textColor}`}>
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 font-light leading-relaxed text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

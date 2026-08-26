"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
      <Navbar />
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          playsInline
          onLoadedMetadata={(e) => {
            // Cut the starting 3 seconds of the video
            (e.target as HTMLVideoElement).currentTime = 3;
          }}
          onEnded={(e) => {
            // When the video finishes, loop back to 3 seconds instead of 0
            const video = e.target as HTMLVideoElement;
            video.currentTime = 3;
            video.play();
          }}
          // To globally crop the watermark logo/number at the top, we make the video 20% taller
          // and shift it up by 20%, cutting the top off entirely across all devices.
          className="absolute w-full h-[120%] -top-[20%] left-0 object-cover"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium mb-6 uppercase tracking-widest">
            Event Management Company
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Unforgettable <span className="text-accent italic">Experiences</span> <br />
            for Every Occasion
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            From birthdays and weddings to corporate events, our expert planners handle every detail with precision and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/30 w-full sm:w-auto"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        }}
      >
        <span className="text-white/70 text-xs tracking-widest uppercase mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

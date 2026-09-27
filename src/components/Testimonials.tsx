"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section className="bg-primary text-white w-full min-h-[100svh] flex flex-col justify-center py-12 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative items-start">
          {/* Left: Header Container */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-[30vh] flex flex-col gap-4 lg:gap-6">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-3 lg:mb-6">
                Loved by <br/><span className="text-secondary italic">Our Clients</span>
              </h2>
              <p className="text-white/70 font-light text-sm sm:text-base lg:text-lg mb-4 lg:mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0">
                We take pride in turning your visions into reality. Here is what our clients have to say about our meticulous planning and flawless execution.
              </p>
              
              {/* Google Badge */}
              <div className="inline-flex items-center gap-3 lg:gap-4 bg-white/5 border border-white/10 p-3 lg:p-4 rounded-2xl backdrop-blur-sm transform scale-90 lg:scale-100 origin-center lg:origin-left">
                <span className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center p-1.5 lg:p-2 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="flex gap-1 text-accent mb-0.5 lg:mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={12} className="lg:w-3.5 lg:h-3.5" />
                    ))}
                  </div>
                  <div className="text-white text-xs lg:text-sm font-medium">4.9/5 Average Rating</div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Right: Starwall Widget */}
          <div className="lg:w-2/3 w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 md:p-8">
            <div id="reviews-widget-277"></div>
            <Script src="https://starwall.io/embed/s3ztRU3v3Ubmilo1fzDA1Jbsa8rmG7zG/widget.js" strategy="lazyOnload" />
          </div>

        </div>
      </div>
    </section>
  );
}

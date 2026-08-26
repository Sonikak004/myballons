"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Unmatched Creativity",
    description: "We don't just follow trends; we set them with bespoke, personalized designs tailored to your vision.",
    icon: Sparkles,
  },
  {
    title: "Stress-Free Planning",
    description: "From conceptualization to the final toast, we handle the logistics so you can actually enjoy your event.",
    icon: HeartHandshake,
  },
  {
    title: "Flawless Execution",
    description: "Our eagle-eye for detail ensures that your special moments run smoothly and exactly as planned.",
    icon: ShieldCheck,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Single Premium Video */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105"
              >
                <source src="/videos/video-2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side: Text & Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-secondary rounded-full mb-8" />
            
            <p className="text-lg text-foreground/80 font-light leading-relaxed mb-12">
              With years of experience, we bring a touch of magic to every event. Our commitment to excellence and eye for detail ensures that your special moments are nothing short of spectacular.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <feature.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

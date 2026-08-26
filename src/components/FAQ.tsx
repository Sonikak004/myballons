"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book your services?",
    answer: "We recommend booking at least 3-6 months in advance for large events like weddings and corporate galas. For smaller parties and balloon decorations, 4-6 weeks is usually sufficient. However, we do try to accommodate last-minute requests when our schedule permits."
  },
  {
    question: "Do you offer customizable packages?",
    answer: "Absolutely! We understand that every event is unique. We offer fully customizable packages tailored to your specific vision, budget, and guest count. During our initial consultation, we'll discuss your needs and create a bespoke plan."
  },
  {
    question: "Do you travel for events outside Bengaluru?",
    answer: "Yes, while we are based in Begur, Bengaluru, we are equipped to travel for destination events. Travel and accommodation fees may apply depending on the location."
  },
  {
    question: "Who will be handling my event on the day?",
    answer: "You will have a dedicated lead planner and an experienced on-site team ensuring everything runs smoothly from setup to teardown. We handle the logistics so you can enjoy your event."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-black/10 rounded-2xl overflow-hidden bg-background/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-primary pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-transform duration-300">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-foreground/70 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

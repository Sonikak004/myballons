"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919035106677?text=Hi!%20I%20would%20like%20to%20plan%20an%20event."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-bounce" />
      
      {/* Ping animation behind the button */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
    </a>
  );
}

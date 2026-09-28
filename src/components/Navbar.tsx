"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? "bg-white shadow-sm py-2"
          : isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2"
        >
          <div 
            className={`relative transition-all duration-300 -ml-2 md:-ml-4 ${
              isScrolled 
                ? "h-10 w-32 md:h-14 md:w-44" 
                : "h-16 w-48 md:h-24 md:w-64"
            }`}
          >
            <Image
              src="/logo.png"
              alt="My Balloons My Prop's"
              fill
              className="object-contain object-left"
              priority
             quality={100} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#') && link.href.length > 1) {
                  e.preventDefault();
                  document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                } else if (link.href === '#') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? "text-foreground hover:text-secondary" : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919035106677"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-all flex items-center justify-center relative z-50 ${
            mobileMenuOpen 
              ? "bg-black/5 text-black hover:bg-black/10" 
              : isScrolled 
                ? "bg-primary/10 text-primary hover:bg-primary/20" 
                : "bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - Full Screen Takeover (Pure CSS for zero lag) */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-32 px-8 pb-8 overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary hover:text-secondary text-3xl font-serif font-bold py-2 transition-colors border-b border-gray-100"
              onClick={(e) => {
                if (link.href.startsWith('#') && link.href.length > 1) {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else if (link.href === '#') {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                } else {
                  setMobileMenuOpen(false);
                }
              }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-8 mt-auto">
            <a
              href="https://wa.me/919035106677"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center text-center px-6 py-4 rounded-full font-bold text-lg bg-secondary text-white shadow-xl shadow-secondary/30 active:scale-95 transition-all"
            >
              Plan Your Event
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

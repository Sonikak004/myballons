import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

// Lazy load everything below the fold so the initial page load is lightning fast
const StatsCounter = dynamic(() => import("@/components/StatsCounter"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"));
const Services = dynamic(() => import("@/components/Services"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const StackedEvents = dynamic(() => import("@/components/StackedEvents"));
const CarouselSection = dynamic(() => import("@/components/CarouselSection"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppCTA = dynamic(() => import("@/components/WhatsAppCTA"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <StatsCounter />
      <WhyChooseUs />
      <Services />
      <PhotoGallery />
      <Testimonials />
      <StackedEvents />
      <CarouselSection />
      <FAQ />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}

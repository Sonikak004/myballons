import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import WhyChooseUs from "@/components/WhyChooseUs";
import PhotoGallery from "@/components/PhotoGallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import StackedEvents from "@/components/StackedEvents";
import CarouselSection from "@/components/CarouselSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

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

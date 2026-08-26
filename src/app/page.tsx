import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import PhotoGallery from "@/components/PhotoGallery";
import Services from "@/components/Services";
import StackedEvents from "@/components/StackedEvents";
import CarouselSection from "@/components/CarouselSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyChooseUs />
      <Services />
      <PhotoGallery />
      <StackedEvents />
      <CarouselSection />
      <FAQ />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}

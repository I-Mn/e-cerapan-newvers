import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StepsSection from "@/components/StepsSection";
import ServiceSection from "@/components/ServiceSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <StepsSection />
      <ServiceSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
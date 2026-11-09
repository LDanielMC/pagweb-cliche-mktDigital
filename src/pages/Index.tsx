import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CTABanner
        eyebrow="Hablemos"
        heading={<>¿Listo para dar el primer <span className="text-gradient italic">paso</span>?</>}
        subtext="Cuéntanos sobre tu negocio y juntos encontramos el servicio que más te conviene."
        ctaLabel="Ir a Contacto"
        waLabel="Escríbenos ahora"
      />
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital marketing background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Agencia de Marketing Digital
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8"
        >
          Tu mejor{" "}
          <span className="text-gradient italic font-medium">ángulo</span>
          <br />
          en el mundo
          <br />
          <span className="text-accent">virtual</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformamos marcas con estrategias digitales que generan impacto real.
          Creatividad, datos y resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portafolio"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-base hover:bg-primary/90 transition-all duration-300 glow-primary"
          >
            Ver Portafolio
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 border border-foreground/20 text-foreground rounded-full font-body font-medium text-base hover:border-accent hover:text-accent transition-all duration-300"
          >
            Nuestros Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

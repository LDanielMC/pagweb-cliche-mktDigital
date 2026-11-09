import { motion, useReducedMotion } from "framer-motion";
import { Zap, Eye, Heart } from "lucide-react";
import { focusRevealProps } from "@/hooks/useAngleReveal";

const values = [
  {
    icon: Eye,
    title: "Visión Estratégica",
    description: "Cada proyecto comienza con un análisis profundo para encontrar el ángulo perfecto de tu marca.",
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description: "Nos mantenemos a la vanguardia de las tendencias digitales para darte ventaja competitiva.",
  },
  {
    icon: Heart,
    title: "Pasión por los Resultados",
    description: "No nos conformamos con lo bonito. Medimos, optimizamos y entregamos resultados reales.",
  },
];

const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="nosotros" className="section-padding bg-background relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative aperture iris — the lens standing in for the old quote mark */}
      <svg
        className="absolute top-4 right-4 md:top-0 md:right-0 w-64 h-64 md:w-96 md:h-96 text-foreground/[0.04] pointer-events-none select-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1="50" y1="50" x2="50" y2="2"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${(360 / 7) * i} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
              Creatividad con{" "}
              <span className="text-gradient italic">propósito</span>
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              En <strong className="text-foreground">Cliché Marketing Digital</strong> combinamos
              creatividad estratégica con datos. Cada negocio tiene un ángulo único —
              nuestro equipo multidisciplinario lo encuentra y lo hace brillar donde más importa.
            </p>
          </motion.div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...focusRevealProps(index * 0.15, !!reduceMotion)}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8 transition-all duration-400 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

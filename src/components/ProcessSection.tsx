import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, BarChart2 } from "lucide-react";
import { useAngleReveal, focusRevealProps } from "@/hooks/useAngleReveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analizamos tu marca, competencia y audiencia para identificar oportunidades reales en el mercado digital.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    description:
      "Diseñamos un plan personalizado con objetivos claros, canales óptimos y mensajes que conectan con tu público.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ejecución",
    description:
      "Creamos y lanzamos campañas, contenido y activos digitales con estándares de calidad premium.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Optimización",
    description:
      "Medimos cada resultado, aprendemos y ajustamos continuamente para maximizar tu retorno de inversión.",
  },
];

const ProcessSection = () => {
  const connectorRef = useRef(null);
  const connectorInView = useInView(connectorRef, { once: true, margin: "-10%" });
  const headerReveal = useAngleReveal("50% 100%");
  const reduceMotion = useReducedMotion();

  return (
    <section id="proceso" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          {...headerReveal}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Nuestro{" "}
            <span className="text-gradient italic">proceso</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) — a sprocket-perforated filmstrip, animates in on viewport */}
          <div ref={connectorRef} className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px z-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 border-t-2 border-dotted border-accent/60"
              initial={{ scaleX: 0, originX: 0 }}
              animate={connectorInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              {...focusRevealProps(index * 0.15, !!reduceMotion)}
              className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                <step.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <span className="font-display text-5xl font-bold text-foreground/5 absolute top-4 right-6 select-none">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

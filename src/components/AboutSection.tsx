import { motion } from "framer-motion";
import { Zap, Eye, Heart } from "lucide-react";

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
  return (
    <section id="nosotros" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Quiénes somos</p>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
              Creatividad con{" "}
              <span className="text-gradient italic">propósito</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Somos una agencia de marketing digital que combina creatividad estratégica con
              datos para posicionar marcas en el mundo virtual. Creemos que cada negocio tiene
              un ángulo único que merece ser contado.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Desde estrategias de contenido hasta campañas de performance, nuestro equipo
              multidisciplinario trabaja para que tu marca destaque donde más importa.
            </p>
          </motion.div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-1">
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

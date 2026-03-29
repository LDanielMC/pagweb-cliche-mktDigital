import { motion } from "framer-motion";
import { Target, TrendingUp, Palette, BarChart3, Globe, Video } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Estrategia Digital",
    description: "Diseñamos planes integrales que alinean tus objetivos con las oportunidades del mercado digital.",
  },
  {
    icon: Palette,
    title: "Branding & Diseño",
    description: "Creamos identidades visuales memorables que conectan con tu audiencia y diferencian tu marca.",
  },
  {
    icon: TrendingUp,
    title: "Social Media",
    description: "Gestión estratégica de redes sociales con contenido que genera engagement y comunidad.",
  },
  {
    icon: BarChart3,
    title: "Publicidad Digital",
    description: "Campañas de paid media optimizadas para maximizar tu ROI en cada plataforma.",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web que combinan diseño excepcional con rendimiento y experiencia de usuario.",
  },
  {
    icon: Video,
    title: "Producción Audiovisual",
    description: "Contenido visual de alto impacto: video, fotografía y motion graphics para tu marca.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Lo que hacemos</p>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Servicios que{" "}
            <span className="text-gradient italic">transforman</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:glow-accent"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl font-medium mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const clients = [
  { name: "Cliente 01", category: "Branding & Social Media" },
  { name: "Cliente 02", category: "Estrategia Digital" },
  { name: "Cliente 03", category: "Desarrollo Web" },
  { name: "Cliente 04", category: "Publicidad Digital" },
  { name: "Cliente 05", category: "Social Media" },
  { name: "Cliente 06", category: "Branding & Diseño" },
  { name: "Cliente 07", category: "Producción Audiovisual" },
  { name: "Cliente 08", category: "Estrategia Digital" },
  { name: "Cliente 09", category: "Social Media" },
  { name: "Cliente 10", category: "Desarrollo Web" },
  { name: "Cliente 11", category: "Publicidad Digital" },
];

const colors = [
  "from-primary/20 to-accent/10",
  "from-accent/15 to-primary/10",
  "from-primary/15 to-primary/5",
  "from-accent/10 to-accent/20",
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="section-padding relative">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Nuestro trabajo</p>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Portafolio de{" "}
            <span className="text-gradient italic">éxito</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl text-lg">
            Marcas que han confiado en nosotros para llevar su presencia digital al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 hover:border-accent/40 transition-all duration-500 cursor-pointer ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`bg-gradient-to-br ${colors[index % colors.length]} ${index === 0 ? "h-80 md:h-full" : "h-56 md:h-64"} flex flex-col justify-end p-6 md:p-8`}>
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-accent" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-foreground/5 group-hover:border-accent/20 group-hover:scale-150 transition-all duration-700" />

                <div>
                  <p className="text-accent/80 font-body text-xs tracking-widest uppercase mb-2">
                    {client.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {client.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

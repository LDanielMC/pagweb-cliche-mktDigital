import { motion } from "framer-motion";
import { useAngleReveal } from "@/hooks/useAngleReveal";
import callos       from "@/assets/portafolio/callos.webp";
import faisan       from "@/assets/portafolio/faisan.webp";
import lucca        from "@/assets/portafolio/lucca.webp";
import felix        from "@/assets/portafolio/felix.webp";
import msAgros      from "@/assets/portafolio/ms agros.webp";
import asbios       from "@/assets/portafolio/asbios.webp";
import cerritos     from "@/assets/portafolio/cerritos.webp";
import sirloncito   from "@/assets/portafolio/sirloncito.webp";
import beautyMaster from "@/assets/portafolio/bm.webp";
import campestre    from "@/assets/portafolio/campestre.webp";
import clinica      from "@/assets/portafolio/clinica.webp";

const clients = [
  { name: "Callos",        category: "Producción Audiovisual",     logo: callos },
  { name: "Faisán",        category: "Social Media",               logo: faisan },
  { name: "Lucca",         category: "Posicionamiento SEO",        logo: lucca },
  { name: "Félix",         category: "Desarrollo Web",             logo: felix },
  { name: "MS Agros",      category: "Branding & Diseño",          logo: msAgros },
  { name: "Campestre",     category: "Social Media",               logo: campestre },
  { name: "Cerritos",      category: "Producción Audiovisual",     logo: cerritos },
  { name: "Sirloncito",    category: "Branding & Diseño",          logo: sirloncito },
  { name: "Beauty Master", category: "Estrategia Digital",         logo: beautyMaster },
  { name: "Asbios",        category: "Social Media",               logo: asbios },
  { name: "Clínica",       category: "Publicidad Digital",         logo: clinica },
];

const rotations = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.5, -2, 1.2, -1.5, 2.5, -1];

const PortfolioSection = () => {
  const headerReveal = useAngleReveal();

  return (
    <section id="portafolio" className="section-padding relative overflow-hidden">

      {/* ── Ambient blur ── */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          {...headerReveal}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20"
        >
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-light">
              Portafolio de{" "}
              <span className="text-gradient italic">éxito</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-base md:text-right max-w-xs leading-relaxed">
            Marcas que han confiado en nosotros para llevar su presencia digital al siguiente nivel.
          </p>
        </motion.div>

        {/* ── Polaroid grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30, rotate: rotations[index] }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] w-full max-w-[180px]"
              style={{ transformOrigin: "center bottom" }}
            >
              {/* Photo area */}
              <div className="bg-gray-50 p-4 pt-4 pb-3 flex items-center justify-center h-28 sm:h-32 md:h-36">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Category label */}
              <div className="px-3 pt-1.5 pb-3 bg-white text-center">
                <p className="font-body text-xs tracking-widest uppercase text-primary/60">
                  {client.category}
                </p>
              </div>

              {/* Thumbtack pin */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                {/* Head */}
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 via-cyan-600 to-teal-700 shadow-md ring-1 ring-cyan-500/40 relative">
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/40" />
                </div>
                {/* Needle */}
                <div className="w-px h-2.5 bg-gradient-to-b from-cyan-600/70 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Count line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-16 text-muted-foreground/40 font-body text-xs tracking-widest uppercase"
        >
          <span className="w-8 h-px bg-border/50" />
          Presencia que destaca.
          <span className="w-8 h-px bg-border/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

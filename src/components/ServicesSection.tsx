import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Target, TrendingUp, Palette, BarChart3, Globe, Video, ArrowUpRight, Search, Zap, Heart, X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useAngleReveal, focusRevealProps } from "@/hooks/useAngleReveal";
import ApertureField from "@/components/ApertureField";
import ViewfinderFrame from "@/components/ViewfinderFrame";
import estrategiaVideo from "@/assets/videos servicios/Estrategia Digital.mp4";
import brandingVideo from "@/assets/videos servicios/Branding & Diseño.mp4";
import socialMediaVideo from "@/assets/videos servicios/social media.mp4";
import publicidadVideo from "@/assets/videos servicios/Publicidad Digital.mp4";
import sitiosWebVideo from "@/assets/videos servicios/sitios web.mp4";
import audiovisualVideo from "@/assets/videos servicios/Producción Audiovisual.mp4";
import seoVideo from "@/assets/videos servicios/Posicionamiento SEO.mp4";
import automatizacionesVideo from "@/assets/videos servicios/Automatizaciones.mp4";
import fidelizacionVideo from "@/assets/videos servicios/Fidelización de Clientes.mp4";

const services = [
  {
    icon: Target,
    title: "Estrategia Digital",
    description: "Definimos junto contigo el camino a seguir en el mundo digital, con un plan claro y adaptado a los objetivos de tu negocio.",
    tag: "Planificación",
    videoSrc: estrategiaVideo,
    details: {
      intro: "Antes de publicar, anunciar o diseñar, es fundamental saber exactamente qué quieres lograr y cuál es el mejor camino para llegar ahí. Eso es lo que construimos juntos.",
      points: [
        "Analizamos tu situación actual en el mundo digital",
        "Definimos metas claras y alcanzables para tu negocio",
        "Creamos un plan de acción con pasos y tiempos concretos",
        "Hacemos seguimiento continuo para ajustar y mejorar",
      ],
    },
  },
  {
    icon: Palette,
    title: "Branding & Diseño",
    description: "Desarrollamos la imagen visual de tu marca: logo, colores y estilo gráfico, para que transmita quién eres y sea fácil de reconocer.",
    tag: "Identidad",
    videoSrc: brandingVideo,
    details: {
      intro: "Tu marca es mucho más que un logo. Es la primera impresión que das y lo que hace que te recuerden. Nos encargamos de que esa imagen sea coherente, profesional y tuya.",
      points: [
        "Diseño de logo e identidad visual desde cero",
        "Definición de paleta de colores y tipografías representativas",
        "Materiales gráficos adaptados a todos tus canales",
        "Manual de identidad para mantener coherencia visual",
      ],
    },
  },
  {
    icon: TrendingUp,
    title: "Social Media",
    description: "Administramos tus redes sociales con publicaciones regulares y contenido pensado para que más personas conozcan tu negocio.",
    tag: "Redes Sociales",
    videoSrc: socialMediaVideo,
    videoTrim: { start: 1, end: 5 },
    details: {
      intro: "Tener redes sociales activas y bien gestionadas marca la diferencia. Nos ocupamos de todo: qué publicar, cuándo hacerlo y cómo hablarle a tu audiencia.",
      points: [
        "Gestión completa de tus perfiles en todas las redes sociales",
        "Creación de contenido planificado y adaptado a tu audiencia",
        "Atención y respuesta oportuna a tu comunidad",
        "Reportes periódicos de crecimiento y alcance",
      ],
    },
  },
  {
    icon: BarChart3,
    title: "Publicidad Digital",
    description: "Orientamos y gestionamos tu inversión publicitaria para que cada peso que destines a campañas publicitarias se traduzca en resultados reales.",
    tag: "Anuncios",
    videoSrc: publicidadVideo,
    details: {
      intro: "Hacemos que tu inversión en publicidad llegue exactamente a quien la necesita ver.",
      points: [
        "Creación de campañas publicitarias en diferentes plataformas",
        "Definición del público objetivo para tu negocio",
        "Monitoreo y ajuste continuo de anuncios",
        "Reporte claro del rendimiento de cada campaña",
      ],
    },
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Diseñamos y desarrollamos tu sitio web con una apariencia profesional, carga rápida y fácil navegación en cualquier dispositivo.",
    tag: "Página Web",
    videoSrc: sitiosWebVideo,
    details: {
      intro: "Tu sitio web es tu presencia en internet las 24 horas. Lo hacemos profesional, rápido y fácil de usar.",
      points: [
        "Diseño personalizado adaptado a tu marca",
        "Compatible con celular, tablet y computadora",
        "Velocidad de carga optimizada",
        "Configurado para aparecer en Google",
      ],
    },
  },
  {
    icon: Video,
    title: "Producción Audiovisual",
    description: "Producimos videos y fotografía profesional de tu negocio para que cuentes con material de calidad en tus canales digitales.",
    tag: "Video & Foto",
    videoSrc: audiovisualVideo,
    details: {
      intro: "El contenido visual conecta mejor con las personas. Te damos el material para destacar.",
      points: [
        "Grabación de video y fotografía profesional",
        "Edición y postproducción incluidas",
        "Contenido listo para redes sociales y web",
        "Estilo visual coherente con tu marca",
      ],
    },
  },
  {
    icon: Search,
    title: "Posicionamiento SEO",
    description: "Trabajamos para que tu negocio aparezca entre los primeros resultados cuando alguien busca en Google lo que tú ofreces.",
    tag: "Google",
    videoSrc: seoVideo,
    details: {
      intro: "Cuando alguien busca lo que tú ofreces, queremos que te encuentre a ti primero.",
      points: [
        "Optimización de tu sitio para aparecer en Google",
        "Selección de palabras clave relevantes para tu negocio",
        "Mejora continua de tu posición en buscadores",
        "Análisis de resultados con métricas claras y comprensibles",
      ],
    },
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Configuramos herramientas que realizan tareas repetitivas de forma automática, ahorrando tiempo y reduciendo errores en tu operación.",
    tag: "Productividad",
    videoSrc: automatizacionesVideo,
    details: {
      intro: "Configuramos herramientas que trabajan por ti para que te enfoques en lo que importa.",
      points: [
        "Creamos soluciones de automatización a medida para cualquier área de tu negocio",
        "Flujos de trabajo automáticos adaptados a tu negocio",
        "Integración de herramientas para que todo trabaje en conjunto",
        "Más eficiencia, menos carga diaria",
      ],
    },
  },
  {
    icon: Heart,
    title: "Fidelización de Clientes",
    description: "Diseñamos acciones y estrategias para que tus clientes actuales sigan eligiéndote y recomienden tu negocio a otros.",
    tag: "Retención",
    videoSrc: fidelizacionVideo,
    details: {
      intro: "Que tus clientes regresen y te recomienden es el resultado más valioso que existe.",
      points: [
        "Estrategias para mantener contacto con tus clientes",
        "Acciones que premian y reconocen su lealtad",
        "Comunicación relevante después de cada venta",
        "Seguimiento para identificar áreas de mejora",
      ],
    },
  },
];

const ServiceModal = ({
  activeIndex,
  navDirection,
  onNavigate,
  onClose,
}: {
  activeIndex: number;
  navDirection: 1 | -1;
  onNavigate: (dir: 1 | -1) => void;
  onClose: () => void;
}) => {
  const service = services[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const trim = 'videoTrim' in service ? (service.videoTrim as { start: number; end: number } | undefined) : undefined;

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < services.length - 1;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && canPrev) onNavigate(-1);
      if (e.key === "ArrowRight" && canNext) onNavigate(1);
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const container = modalRef.current;
        if (!container) return;
        const focusables = container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, onNavigate, onClose, canPrev, canNext]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current && trim) videoRef.current.currentTime = trim.start;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && trim && videoRef.current.currentTime >= trim.end) {
      videoRef.current.currentTime = trim.start;
      videoRef.current.play();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) onNavigate(diff > 0 ? 1 : -1);
  };

  return (
    <AnimatePresence>
      {/* Wrapper: always centered, pb-20 on mobile to clear floating WhatsApp button */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-20 md:pb-6 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal card */}
        <motion.div
          key={activeIndex}
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="relative z-10 w-full max-w-sm md:max-w-xl bg-background rounded-2xl shadow-2xl border border-border/30 h-[520px] md:h-[640px] flex flex-col overflow-hidden"
          initial={{ x: navDirection * 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: navDirection * -60, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Body: single column on all sizes */}
          <div className="flex flex-col flex-1 overflow-hidden">

            {/* ── Video panel — compact banner on all sizes ── */}
            <div className="w-full h-36 md:h-52 shrink-0 bg-black relative">
              <video
                ref={videoRef}
                src={service.videoSrc as string}
                autoPlay
                muted
                loop={!trim}
                playsInline
                disablePictureInPicture
                className="w-full h-full object-cover pointer-events-none"
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
              />
              {/* Tag overlay */}
              <span className="absolute bottom-3 left-3 font-body text-xs tracking-[0.2em] uppercase text-white/60 bg-black/40 rounded-full px-2 py-0.5">
                {service.tag}
              </span>
            </div>

            {/* ── Content panel — header/CTA/nav fixed, only inner content scrolls ── */}
            <div className="flex flex-col flex-1 overflow-hidden">

              {/* Header: icon + title + close — always visible */}
              <div className="flex items-start justify-between gap-3 p-5 sm:p-6 pb-3 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 id="service-modal-title" className="font-heading text-lg md:text-xl font-medium text-foreground leading-snug">
                    {service.title}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="w-8 h-8 rounded-full bg-secondary hover:bg-border flex items-center justify-center shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <X size={14} className="text-foreground/70" />
                </button>
              </div>

              {/* Scrollable area: intro + points */}
              <div className="flex-1 overflow-y-auto min-h-0 px-5 sm:px-6">
                {/* Intro */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {(service.details as { intro: string; points: string[] }).intro}
                </p>
                <ul className="flex flex-col gap-2">
                  {(service.details as { intro: string; points: string[] }).points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-foreground/80 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA — always visible */}
              <div className="px-5 sm:px-6 pt-3 shrink-0">
                <a
                  href="#contacto"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-primary text-white rounded-full font-body text-sm font-medium hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Consultar este servicio
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Navigation footer — always fixed at bottom */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-t border-border/30 shrink-0 mt-3">
                <button
                  onClick={() => onNavigate(-1)}
                  disabled={!canPrev}
                  className="flex items-center gap-1.5 font-body text-xs text-muted-foreground disabled:opacity-25 hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-secondary"
                >
                  <ChevronLeft size={13} /> Anterior
                </button>

                {/* Progress dots */}
                <div className="flex items-center">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { const dir = i > activeIndex ? 1 : -1; onNavigate(dir); }}
                      aria-label={`Ir a ${services[i].title}`}
                      className="group p-2.5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "w-4 h-1.5 bg-primary"
                            : "w-1.5 h-1.5 bg-border group-hover:bg-primary/40"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate(1)}
                  disabled={!canNext}
                  className="flex items-center gap-1.5 font-body text-xs text-muted-foreground disabled:opacity-25 hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-secondary"
                >
                  Siguiente <ChevronRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [navDirection, setNavDirection] = useState<1 | -1>(1);
  const headerReveal = useAngleReveal();
  const reduceMotion = useReducedMotion();

  const handleNavigate = (dir: 1 | -1) => {
    setNavDirection(dir);
    setActiveIndex(prev => {
      if (prev === null) return null;
      const next = prev + dir;
      return next >= 0 && next < services.length ? next : prev;
    });
  };

  return (
    <>
    <section id="servicios" className="section-padding bg-background relative overflow-hidden">

      <ApertureField />

      {/* Corner frame tag — camera HUD readout, not a kicker over the headline */}
      <span className="hidden lg:block absolute top-10 right-10 md:right-20 font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground/30 tabular-nums">
        Lo que hacemos — 09 servicios
      </span>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          {...headerReveal}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20"
        >
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-light">
              Servicios que{" "}
              <span className="text-gradient italic">transforman</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-base md:text-right max-w-xs leading-relaxed">
            Un catálogo completo de soluciones digitales diseñadas para hacer crecer tu marca.
          </p>
        </motion.div>

        {/* ── Catalog: horizontal snap on mobile, grid on md+ ── */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-5 sm:-mx-8 md:mx-0 px-5 sm:px-8 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...focusRevealProps(index * 0.07, !!reduceMotion)}
              className="group relative flex flex-col p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-400 overflow-hidden cursor-pointer shrink-0 w-[80vw] sm:w-72 md:w-auto snap-center md:snap-align-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${service.title}`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <ViewfinderFrame
                inset="inset-2"
                color="text-primary/0 group-hover:text-primary/40"
                className="transition-colors duration-400"
              />

              {/* Ghost number */}
              <span className="absolute top-4 right-5 font-display text-6xl font-light text-foreground/[0.04] group-hover:text-primary/8 transition-colors duration-500 select-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-400 group-hover:scale-110">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/50 group-hover:text-primary/50 transition-colors duration-300 mt-1">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Bottom row: ver más label + arrow */}
              <div className="flex items-center justify-between mt-5">
                {'videoSrc' in service && service.videoSrc ? (
                  <span className="font-body text-xs text-primary/70 dark:text-white/60 group-hover:text-primary dark:group-hover:text-white underline underline-offset-2 transition-colors duration-200 select-none">
                    Ver más
                  </span>
                ) : <span />}
                <div className="w-7 h-7 rounded-full border border-border/40 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={13} className="text-muted-foreground/30 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary/0 via-accent to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-muted-foreground/40">
          <span className="text-xs tracking-[0.2em] uppercase font-body">Desliza para ver más</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="opacity-50">
            <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>

      {/* Modal */}
      {activeIndex !== null && (
        <ServiceModal
          activeIndex={activeIndex}
          navDirection={navDirection}
          onNavigate={handleNavigate}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
};

export default ServicesSection;

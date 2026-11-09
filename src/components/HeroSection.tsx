import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowDown, Pause, Play } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import ViewfinderFrame from "@/components/ViewfinderFrame";
import logoOriginal from "@/assets/logoclicheoriginal.webp";
import logoNuevo from "@/assets/logoclichemodooscuro.webp";

import img03 from "@/assets/FOTOSPAGINA/IMG_0222.webp";
import img04 from "@/assets/FOTOSPAGINA/IMG_0712.webp";
import img05 from "@/assets/FOTOSPAGINA/IMG_0778.webp";
import img06 from "@/assets/FOTOSPAGINA/IMG_1537.webp";
import img07 from "@/assets/FOTOSPAGINA/IMG_1691.webp";
import img09 from "@/assets/FOTOSPAGINA/IMG_1863.webp";
import img12 from "@/assets/FOTOSPAGINA/IMG_3376.webp";
import img13 from "@/assets/FOTOSPAGINA/IMG_3436-2.webp";
import img14 from "@/assets/FOTOSPAGINA/IMG_3612.webp";
import img15 from "@/assets/FOTOSPAGINA/IMG_5373.webp";
import img16 from "@/assets/FOTOSPAGINA/IMG_7588-2.webp";
import img17 from "@/assets/FOTOSPAGINA/IMG_8093.webp";
import img18 from "@/assets/FOTOSPAGINA/IMG_8190.webp";
import img19 from "@/assets/FOTOSPAGINA/IMG_8197.webp";
import img20 from "@/assets/FOTOSPAGINA/IMG_8669.webp";
import img21 from "@/assets/FOTOSPAGINA/IMG_8778.webp";
import img22 from "@/assets/FOTOSPAGINA/IMG_9292.webp";
import img23 from "@/assets/FOTOSPAGINA/IMG_9319.webp";

const slides = [
  // priority order (user-selected)
  img15, img23, img07, img04, img19, img03,
  // remaining
  img05, img06, img09, img12, img13, img14,
  img16, img17, img18, img20, img21, img22,
];

const N = slides.length;
const INTERVAL = 4000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const primaryCta = useMagnetic<HTMLAnchorElement>();

  const panelRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState<{ x: number; y: number } | null>(null);
  const hasFinePointer = useRef(false);
  useEffect(() => {
    hasFinePointer.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const handlePanelMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setHovering(true);
    if (!hasFinePointer.current || prefersReducedMotion || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  const handlePanelMouseLeave = () => {
    setHovering(false);
    setGlow(null);
  };

  const resetTimer = useCallback(() => setTimerKey((k) => k + 1), []);

  const next = useCallback(() => { setCurrent((c) => (c + 1) % N); resetTimer(); }, [resetTimer]);
  const prev = useCallback(() => { setCurrent((c) => (c - 1 + N) % N); resetTimer(); }, [resetTimer]);

  useEffect(() => {
    if (hovering || userPaused || prefersReducedMotion) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % N), INTERVAL);
    return () => clearInterval(t);
  }, [hovering, userPaused, timerKey, prefersReducedMotion]);

  return (
    <section id="hero" className="relative flex flex-col md:flex-row min-h-screen md:h-screen md:overflow-hidden bg-background">

      {/* ══ LEFT — brand content ══ */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-[46%] px-8 sm:px-12 lg:px-16 xl:px-20 pt-24 pb-10 md:py-0 bg-background shrink-0 order-last md:order-first">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className="h-16 sm:h-20 md:h-24 lg:h-28 flex items-center">
            <img src={logoOriginal} alt="Cliché Marketing Digital" className="h-full w-auto dark:hidden" />
            <img src={logoNuevo} alt="Cliché Marketing Digital" className="h-full w-auto hidden dark:block" />
          </div>
        </motion.div>

        {/* Slogan — the display voice carries its own weight, no kicker above it */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, rotate: -3, filter: "blur(10px)" }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "0% 100%" }}
          className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.05] mb-5 sm:mb-6 text-foreground"
        >
          Tu mejor{" "}
          <span className="text-gradient italic">ángulo</span>
          {" "}en el<br className="hidden sm:block" /> mundo virtual
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground font-body text-sm md:text-base max-w-xs lg:max-w-sm mb-4 leading-relaxed"
        >
          Transformamos marcas con estrategias digitales que generan impacto real.
        </motion.p>

        {/* Technical readout — the "ángulo" made literal, camera HUD style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 tabular-nums mb-8 sm:mb-10"
        >
          ∠ 37° · f/1.4 · Cuernavaca, MX
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-10 sm:mb-14"
        >
          <motion.a
            ref={primaryCta.ref}
            style={primaryCta.style}
            onMouseMove={primaryCta.onMouseMove}
            onMouseLeave={primaryCta.onMouseLeave}
            whileTap={{ scale: 0.95 }}
            href="#portafolio"
            className="px-6 sm:px-7 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-colors duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver Portafolio
          </motion.a>
          <a
            href="#servicios"
            className="px-6 sm:px-7 py-3 border border-border text-foreground rounded-full font-body font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Nuestros Servicios
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 text-muted-foreground"
        >
          <ArrowDown size={14} />
          <span className="text-xs tracking-[0.25em] uppercase font-body">Explorar</span>
        </motion.div>
      </div>

      {/* ══ RIGHT — photo carousel ══ */}
      <div
        ref={panelRef}
        className="relative w-full md:flex-1 h-[55vh] md:h-full shrink-0 order-first md:order-last"
        onMouseMove={handlePanelMouseMove}
        onMouseLeave={handlePanelMouseLeave}
      >
        {/* Photos */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            decoding="async"
          />
        </AnimatePresence>

        {/* Permanent lens vignette — darkens corners like a fast prime wide open */}
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(0,0,0,0.35)]" />

        {/* Cursor-reactive light — desktop only, off under reduced motion */}
        {glow && (
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
            style={{
              background: `radial-gradient(480px circle at ${glow.x}% ${glow.y}%, hsl(178 100% 75% / 0.35), transparent 60%)`,
            }}
          />
        )}

        {/* Viewfinder corner brackets — "in frame" framing device */}
        <ViewfinderFrame color="text-white/50" inset="inset-5 sm:inset-6" />

        {/* Left-edge gradient for seamless blend with content panel */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent hidden md:block pointer-events-none" />
        {/* Top vignette on mobile */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-transparent md:hidden pointer-events-none" />

        {/* Top HUD strip — tally light + agency label, replaces the old kicker line */}
        <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-2.5 px-6 py-4 bg-gradient-to-b from-black/50 to-transparent">
          <span
            className="w-1.5 h-1.5 rounded-full tally-dot"
            style={prefersReducedMotion ? undefined : { animation: "tally-pulse 2s ease-in-out infinite" }}
          />
          <span className="text-white/70 text-[11px] tracking-[0.25em] uppercase font-body">
            Agencia de Marketing Digital
          </span>
        </div>

        {/* Bottom navigation bar */}
        <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-between px-5 py-4 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="p-2 rounded-full border border-white/30 text-white hover:bg-primary hover:border-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="p-2 rounded-full border border-white/30 text-white hover:bg-primary hover:border-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); resetTimer(); }}
                aria-label={`Foto ${i + 1}`}
                className="group p-2.5 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-4 h-1 bg-white"
                      : "w-1 h-1 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Pause/play + counter — reads like a film frame counter */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Reanudar carrusel" : "Pausar carrusel"}
              className="p-1.5 rounded-full text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {userPaused ? <Play size={13} /> : <Pause size={13} />}
            </button>
            <span className="text-white/60 text-xs font-body tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

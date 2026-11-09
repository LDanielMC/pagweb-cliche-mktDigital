import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useAngleReveal, focusRevealProps } from "@/hooks/useAngleReveal";

const stats = [
  { value: 5, suffix: "+", label: "Años de experiencia" },
  { value: 98, suffix: "%", label: "Satisfacción del cliente" },
  { value: 100, suffix: "%", label: "Atención personalizada" },
  { value: 99, suffix: "%", label: "Tasa de retención de clientes" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const headerReveal = useAngleReveal("50% 100%");
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...headerReveal} className="mb-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light">
            Resultados que{" "}
            <span className="text-gradient italic">respaldan</span>
            {" "}el ángulo
          </h2>
        </motion.div>

        {/* ── Light-meter readout: each stat is a counter window ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...focusRevealProps(index * 0.1, !!reduceMotion)}
              className="relative text-center p-6 md:p-8 rounded-2xl border border-border/40 bg-card/40 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 group overflow-hidden"
            >
              {/* Corner exposure tick */}
              <span className="absolute top-3 left-4 font-body text-[10px] tracking-widest text-muted-foreground/25 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="font-display text-5xl md:text-6xl font-light text-gradient mb-3 tabular-nums">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-3" />
              <p className="text-muted-foreground font-body text-xs md:text-sm leading-snug">
                {stat.label}
              </p>

              {/* Bottom accent — lights up like an exposure indicator on hover */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary/0 via-accent to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

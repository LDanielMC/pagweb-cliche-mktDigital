import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";
import { useMagnetic } from "@/hooks/useMagnetic";

interface CTABannerProps {
  eyebrow: string;
  heading: ReactNode;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  waLabel?: string;
}

const CTABanner = ({
  heading,
  subtext,
  ctaLabel = "Contáctanos",
  ctaHref = "#contacto",
  waLabel = "WhatsApp",
}: CTABannerProps) => {
  const primaryMagnetic = useMagnetic<HTMLAnchorElement>();
  const waMagnetic = useMagnetic<HTMLAnchorElement>();

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-background">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      {/* Subtle center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(1,73,168,0.07),transparent)]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-5xl font-light text-foreground mb-4 leading-tight"
        >
          {heading}
        </motion.h2>

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            {subtext}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <motion.a
            ref={primaryMagnetic.ref}
            style={primaryMagnetic.style}
            onMouseMove={primaryMagnetic.onMouseMove}
            onMouseLeave={primaryMagnetic.onMouseLeave}
            whileTap={{ scale: 0.95 }}
            href={ctaHref}
            className="flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-full font-body font-medium text-sm hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-colors duration-300 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {ctaLabel}
            <ArrowRight size={14} />
          </motion.a>
          <motion.a
            ref={waMagnetic.ref}
            style={waMagnetic.style}
            onMouseMove={waMagnetic.onMouseMove}
            onMouseLeave={waMagnetic.onMouseLeave}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 border border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-foreground rounded-full font-body font-medium text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.002 2.667C8.636 2.667 2.668 8.636 2.668 16c0 2.338.627 4.624 1.816 6.625L2.667 29.333l6.896-1.795A13.267 13.267 0 0 0 16.002 29.333C23.368 29.333 29.335 23.364 29.335 16S23.368 2.667 16.002 2.667zm0 24.267a10.912 10.912 0 0 1-5.562-1.524l-.399-.237-4.094 1.065 1.088-3.975-.26-.408A10.912 10.912 0 0 1 5.068 16c0-6.031 4.904-10.933 10.934-10.933S26.935 9.969 26.935 16 22.032 26.934 16.002 26.934zm5.993-8.19c-.328-.164-1.942-.958-2.243-1.067-.3-.11-.519-.164-.737.164-.219.328-.847 1.067-1.039 1.286-.191.219-.382.246-.71.082-.328-.164-1.384-.51-2.636-1.626-.974-.868-1.632-1.94-1.823-2.268-.191-.328-.02-.505.144-.668.148-.147.328-.382.492-.573.164-.191.219-.328.328-.546.11-.219.055-.41-.027-.573-.082-.164-.737-1.776-1.01-2.432-.266-.639-.536-.552-.737-.562-.191-.009-.41-.011-.628-.011-.219 0-.573.082-.873.41-.3.328-1.148 1.122-1.148 2.736s1.175 3.175 1.339 3.394c.164.219 2.312 3.53 5.603 4.951.783.338 1.394.54 1.87.691.786.25 1.501.215 2.066.13.63-.094 1.942-.794 2.216-1.561.273-.767.273-1.424.191-1.561-.082-.137-.3-.219-.628-.383z"/>
            </svg>
            {waLabel}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;

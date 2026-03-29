import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Contacto</p>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
              ¿Listo para encontrar tu{" "}
              <span className="text-gradient italic">mejor ángulo</span>?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Cuéntanos tu proyecto y descubramos juntos cómo llevar tu marca
              al siguiente nivel en el mundo digital.
            </p>

            <div className="space-y-5">
              <a href="mailto:hola@angulo.agency" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors font-body group">
                <div className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                hola@angulo.agency
              </a>
              <a href="tel:+521234567890" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors font-body group">
                <div className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +52 123 456 7890
              </a>
              <div className="flex items-center gap-4 text-muted-foreground font-body">
                <div className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Ciudad de México, MX
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-5 p-8 rounded-2xl bg-card border border-border/50">
              <div>
                <label className="text-sm text-muted-foreground font-body mb-2 block">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground font-body placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground font-body mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground font-body placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground font-body mb-2 block">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground font-body placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 glow-primary group"
              >
                Enviar Mensaje
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

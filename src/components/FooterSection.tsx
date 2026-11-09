import { Instagram, Facebook } from "lucide-react";
import logoNegro from "@/assets/logoclichenegro.webp";
import logoBlanco from "@/assets/logoclicheblanco.webp";

const FooterSection = () => {
  return (
    <footer className="relative pt-16 pb-8 px-6 md:px-12">
      {/* Gradient top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center mb-4">
              <img src={logoNegro} alt="Cliché Marketing Digital" className="h-10 dark:hidden" />
              <img src={logoBlanco} alt="Cliché Marketing Digital" className="h-10 hidden dark:block" />
            </a>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Tu mejor ángulo en el mundo virtual. Creatividad, estrategia y resultados reales.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-accent uppercase mb-4">Navegación</p>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Portafolio", "Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase() === "inicio" ? "hero" : item.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-accent uppercase mb-4">Síguenos</p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/cliche.digital", label: "Instagram de Cliché Marketing Digital" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577410242912", label: "Facebook de Cliché Marketing Digital" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cliché Marketing Digital. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground italic">
            "Tu mejor ángulo en el mundo virtual"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-wider text-foreground">
            ÁNGULO<span className="text-accent">.</span>
          </span>
          <span className="text-muted-foreground font-body text-sm ml-4">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

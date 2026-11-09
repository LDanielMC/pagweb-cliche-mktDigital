import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/config/contact";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/config/emailjs";
import { useAngleReveal } from "@/hooks/useAngleReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import ViewfinderFrame from "@/components/ViewfinderFrame";

type Status = "idle" | "sending" | "success" | "error";

const inputClass = "w-full px-4 py-3 rounded-xl bg-secondary border text-foreground font-body placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<"email" | "phone", string>>>({});
  const [touched, setTouched] = useState<Partial<Record<"email" | "phone", boolean>>>({});
  const headerReveal = useAngleReveal();
  const submitMagnetic = useMagnetic<HTMLButtonElement>(0.15);

  const validate = (field: string, value: string) => {
    if (field === "email") {
      return value && !EMAIL_RE.test(value) ? "Ingresa un email válido" : "";
    }
    if (field === "phone") {
      if (!value) return "";
      if (!/^\d+$/.test(value)) return "Solo se permiten números";
      if (value.length !== 10) return "Debe tener exactamente 10 dígitos";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm(prev => ({ ...prev, phone: digits }));
      if (touched.phone) setErrors(prev => ({ ...prev, phone: validate("phone", digits) }));
      return;
    }
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === "email" && touched.email) setErrors(prev => ({ ...prev, email: validate("email", value) }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email" || name === "phone") {
      setTouched(prev => ({ ...prev, [name]: true }));
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const isValid = () =>
    form.name.trim() &&
    form.email.trim() &&
    EMAIL_RE.test(form.email) &&
    form.message.trim() &&
    (!form.phone || form.phone.length === 10);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, phone: true });
    setErrors({ email: validate("email", form.email), phone: validate("phone", form.phone) });
    if (!isValid()) return;
    setStatus("sending");
    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone ? `+52 ${form.phone}` : "No proporcionado",
        message: form.message,
      };
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - CTA */}
          <motion.div {...headerReveal}>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
              ¿Listo para tu mejor{" "}
              <span className="text-gradient italic">ángulo</span>
              {" "}digital?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Cuéntanos tu proyecto y encontramos juntos tu ángulo.
            </p>

            <div className="space-y-4 mt-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 font-body group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-0.5">Email</p>
                  <p className="text-sm">{CONTACT_EMAIL}</p>
                </div>
              </a>
              <a href={CONTACT_PHONE_TEL} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 font-body group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-0.5">Teléfono</p>
                  <p className="text-sm">{CONTACT_PHONE}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground font-body">
                <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-0.5">Ubicación</p>
                  <p className="text-sm">Cuernavaca, Morelos</p>
                </div>
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative space-y-5 p-7 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <ViewfinderFrame inset="inset-2.5" color="text-primary/25" />
              <div>
                <label htmlFor="contact-name" className="text-sm text-muted-foreground font-body mb-2 block">Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm text-muted-foreground font-body mb-2 block">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="tu@email.com"
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`${inputClass} ${errors.email ? "border-red-500/60" : "border-border/50 focus:border-primary/50"}`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />{errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-sm text-muted-foreground font-body mb-2 block">
                  Teléfono <span className="text-muted-foreground/40">(opcional — para contactarte por WhatsApp)</span>
                </label>
                <div className="flex gap-2">
                  {/* Fixed dial code — México only, see PRODUCT.md Operating Context */}
                  <span
                    aria-hidden="true"
                    className="flex items-center px-3 rounded-xl bg-secondary border border-border/50 text-muted-foreground font-body text-sm whitespace-nowrap shrink-0"
                  >
                    🇲🇽 +52
                  </span>
                  {/* Phone number */}
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel-national"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="10 dígitos"
                    maxLength={10}
                    inputMode="numeric"
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone
                        ? "contact-phone-error"
                        : form.phone.length > 0
                          ? "contact-phone-hint"
                          : undefined
                    }
                    className={`${inputClass} ${errors.phone ? "border-red-500/60" : "border-border/50 focus:border-primary/50"}`}
                  />
                </div>
                {errors.phone && (
                  <p id="contact-phone-error" className="mt-1.5 text-xs font-body text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />{errors.phone}
                  </p>
                )}
                {form.phone.length > 0 && !errors.phone && (
                  <p id="contact-phone-hint" className="mt-1.5 text-xs font-body text-muted-foreground/50">
                    {form.phone.length}/10 dígitos
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm text-muted-foreground font-body mb-2 block">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm font-body text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ¡Mensaje enviado! Te contactaremos pronto.
                </div>
              )}
              {status === "error" && (
                <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm font-body text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Hubo un error. Intenta de nuevo o escríbenos directamente.
                </div>
              )}

              <motion.button
                ref={submitMagnetic.ref}
                style={submitMagnetic.style}
                onMouseMove={submitMagnetic.onMouseMove}
                onMouseLeave={submitMagnetic.onMouseLeave}
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-colors duration-300 glow-primary group disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

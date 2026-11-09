import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { WHATSAPP_URL } from "@/config/contact";

const WhatsAppFloat = () => {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const run = async () => {
      await controls.start({
        opacity: 1, scale: 1, y: 0,
        transition: { delay: 1.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      });
      if (!prefersReducedMotion) {
        controls.start({
          y: [0, -8, 0],
          transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        });
      }
    };
    run();
  }, [controls, prefersReducedMotion]);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg hover:shadow-xl transition-colors duration-300 overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={controls}
      whileHover={{ scale: 1.05, y: 0 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <span className="p-3 md:pl-4 md:py-3">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg" className="md:!w-[22px] md:!h-[22px]">
          <path d="M16.002 2.667C8.636 2.667 2.668 8.636 2.668 16c0 2.338.627 4.624 1.816 6.625L2.667 29.333l6.896-1.795A13.267 13.267 0 0 0 16.002 29.333C23.368 29.333 29.335 23.364 29.335 16S23.368 2.667 16.002 2.667zm0 24.267a10.912 10.912 0 0 1-5.562-1.524l-.399-.237-4.094 1.065 1.088-3.975-.26-.408A10.912 10.912 0 0 1 5.068 16c0-6.031 4.904-10.933 10.934-10.933S26.935 9.969 26.935 16 22.032 26.934 16.002 26.934zm5.993-8.19c-.328-.164-1.942-.958-2.243-1.067-.3-.11-.519-.164-.737.164-.219.328-.847 1.067-1.039 1.286-.191.219-.382.246-.71.082-.328-.164-1.384-.51-2.636-1.626-.974-.868-1.632-1.94-1.823-2.268-.191-.328-.02-.505.144-.668.148-.147.328-.382.492-.573.164-.191.219-.328.328-.546.11-.219.055-.41-.027-.573-.082-.164-.737-1.776-1.01-2.432-.266-.639-.536-.552-.737-.562-.191-.009-.41-.011-.628-.011-.219 0-.573.082-.873.41-.3.328-1.148 1.122-1.148 2.736s1.175 3.175 1.339 3.394c.164.219 2.312 3.53 5.603 4.951.783.338 1.394.54 1.87.691.786.25 1.501.215 2.066.13.63-.094 1.942-.794 2.216-1.561.273-.767.273-1.424.191-1.561-.082-.137-.3-.219-.628-.383z"/>
        </svg>
      </span>
      <span className="font-body text-sm font-medium pr-4 py-3 hidden md:inline md:max-w-0 md:group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap">
        ¡Escríbenos!
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;

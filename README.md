# Cliché Marketing Digital — sitio web

Sitio: https://cliche.com.mx

Sitio web de la agencia Cliché Marketing Digital, de Cuernavaca, Morelos: presenta sus nueve servicios, su proceso de trabajo y su portafolio de clientes, y lleva al visitante a contactarla por WhatsApp, teléfono, correo o formulario. Está dirigido a dueños de pequeños y medianos negocios locales que buscan una agencia. **En producción.**

## Funcionalidades principales

- **Página de una sola vista** con navegación por secciones: portada, servicios, llamada a la acción, cifras, proceso de trabajo, portafolio, nosotros y contacto.
- **Nueve servicios:** estrategia digital, branding y diseño, social media, publicidad digital, desarrollo web, producción audiovisual, posicionamiento SEO, automatizaciones y fidelización de clientes, tres de ellos con video de demostración.
- **Proceso en cuatro pasos:** diagnóstico, estrategia, ejecución y optimización.
- **Portafolio** con los logotipos de los clientes y el servicio que se les brinda.
- **Varias vías de contacto:** botón flotante y enlaces de WhatsApp con mensaje prellenado, teléfono, correo y formulario con validación de correo y teléfono que envía el mensaje con EmailJS.
- **Tema claro y oscuro** con selector, guardado en el navegador, y logotipo que cambia con el tema.
- **Identidad visual propia** inspirada en el logotipo de cámara de la marca: marcos de visor, efecto de enfoque y animaciones con Framer Motion.
- **SEO:** idioma `es`, título y descripción, URL canónica, `hreflang`, Open Graph, Twitter Card, datos estructurados JSON-LD, `robots.txt` y `sitemap.xml`.
- **Herramientas de optimización** de imágenes, logotipos y videos en `scripts/`.

## Capturas

<!-- Agrega aquí tus imágenes, por ejemplo: ![Portada](docs/capturas/portada.png) -->

_Pendiente._

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18.3, TypeScript 5.8, React Router 6.30 |
| Build | Vite 5.4 con `@vitejs/plugin-react-swc` |
| Estilos y UI | Tailwind CSS 3.4, shadcn/ui (Radix UI), Framer Motion 12, Lucide |
| Correo | EmailJS (`@emailjs/browser` 4) |
| Optimización de medios | Sharp, FFmpeg (`fluent-ffmpeg`, `ffmpeg-static`) |
| Pruebas | Vitest 3 y Playwright 1.58 |
| Hosting | Firebase Hosting |

## Arquitectura

Aplicación de una sola página (SPA) sin backend propio:

- `src/pages/Index.tsx` compone el sitio con una sección por componente en `src/components/`.
- `src/config/contact.ts` concentra el número de WhatsApp, el mensaje prellenado, el correo y el teléfono; `src/config/emailjs.ts` guarda la configuración de EmailJS.
- `src/hooks/` incluye `useTheme` (tema claro/oscuro), `useAngleReveal` y `useMagnetic` (animaciones).
- `src/components/ui/` contiene los componentes base de shadcn/ui.
- `scripts/` tiene los programas de Node que optimizan imágenes, logotipos y videos.
- `PRODUCT.md` y `DESIGN.md` documentan el propósito del sitio y su sistema de diseño.
- `firebase.json` publica la carpeta `dist` y redirige todas las rutas a `index.html`.

## Instalación y ejecución

Requisitos: Node.js 18 o superior y npm.

```bash
git clone https://github.com/LDanielMC/pagweb-cliche-mktDigital.git
cd pagweb-cliche-mktDigital
npm install
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Sirve la compilación para revisarla |
| `npm run lint` | Revisa el código con ESLint |
| `npm run optimize-images` | Optimiza las imágenes de `src/assets` |
| `npm run optimize-videos` | Optimiza los videos de los servicios |

Los datos de contacto y de EmailJS se editan en `src/config/`; el proyecto no usa variables de entorno.

### Despliegue

```bash
npm run build
firebase deploy --only hosting
```

## Pruebas

```bash
npm test    # vitest run
```

Vitest está configurado, pero por ahora solo existe una prueba de ejemplo (`src/test/example.test.ts`). El repositorio también incluye la configuración base de Playwright, sin pruebas de extremo a extremo escritas.

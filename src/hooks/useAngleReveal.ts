import { useReducedMotion } from "framer-motion";

/**
 * The site's signature scroll-reveal, reimagined for the lens-studio world:
 * a section's thesis block enters slightly rotated and out of focus, as if
 * someone is turning a manual lens ring, and settles flat and sharp. Fuses
 * the original "ángulo" rotation with a focus-pull (blur → 0), literalizing
 * both "finding your angle" and "coming into focus" at once.
 * `prefers-reduced-motion` collapses it to a simple fade with no rotation,
 * blur, or vertical travel.
 */
export function useAngleReveal(origin: string = "0% 100%") {
  const reduce = useReducedMotion();

  if (reduce) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.4 },
    };
  }

  return {
    initial: { opacity: 0, y: 36, rotate: -4, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    style: { transformOrigin: origin },
  };
}

/**
 * Secondary reveal for cards, grid items, and body content: a plain
 * focus-pull (blur + fade + rise, no rotation) — the thesis block's rotation
 * stays a one-place signature, not a general entrance animation.
 */
export function useFocusReveal(delay = 0) {
  const reduce = useReducedMotion();
  return focusRevealProps(delay, !!reduce);
}

/**
 * Non-hook variant of the focus-pull reveal, for use inside `.map()` loops
 * where calling a hook per item would break the rules of hooks. Read
 * `useReducedMotion()` once at the top of the component and pass it in.
 */
export function focusRevealProps(delay = 0, reduce = false) {
  if (reduce) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.4, delay },
    };
  }

  return {
    initial: { opacity: 0, y: 22, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

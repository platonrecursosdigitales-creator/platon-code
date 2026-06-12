import type { Variants, Transition } from "framer-motion";

export const easePremium = [0.22, 1, 0.36, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const transitionPremium: Transition = {
  duration: 0.9,
  ease: easePremium,
};

/** Entrance like the preloader: blur + scale + fade + slight rise */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)", scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: transitionPremium,
  },
};

/** Same as revealUp but accepts an index for stagger via custom prop */
export const revealUpStagger: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...transitionPremium, delay: 0.06 * i },
  }),
};

/** Container that staggers its children */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Word/line mask reveal (clip-path) — preloader-style */
export const lineMask: Variants = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.05 + i * 0.08, ease: easePremium },
  }),
};

export const viewportOnce = { once: true, margin: "-80px" };

/* ---------- Awwwards-style varied scroll patterns ---------- */

/** Slide in from the left with mask + slight rotation */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -64, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeOutExpo, delay: 0.05 * i },
  }),
};

/** Slide in from the right (mirror) */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 64, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeOutExpo, delay: 0.05 * i },
  }),
};

/** Editorial mask reveal: clip from bottom, used for headlines */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 24 },
  show: (i: number = 0) => ({
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 1.1, ease: easeOutExpo, delay: 0.08 * i },
  }),
};

/** Card lift (used for plans/cards): scale + rise */
export const cardLift: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOutExpo, delay: 0.07 * i },
  }),
};

/** Used for vertical line draws (timelines, dividers) */
export const lineDraw: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.2, ease: easeOutExpo } },
};

/** Used for horizontal line draws (rules under headers) */
export const lineDrawX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.0, ease: easeOutExpo } },
};

/** Alternating helper: even from left, odd from right */
export const alt = (i: number) => (i % 2 === 0 ? slideInLeft : slideInRight);

/** Pop-in for badges/pills */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  show: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo, delay: 0.025 * i },
  }),
};
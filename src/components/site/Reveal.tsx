import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealUp, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "header" | "article" | "li";
  withScan?: boolean;
};

/**
 * Wraps content with a preloader-style entrance:
 * fade + slight rise + blur-out + scale-in. Optional brand scan line.
 */
const Reveal = ({ children, delay = 0, className = "", as = "div", withScan = false }: Props) => {
  const reduce = useReducedMotion();
  const Comp: any = motion[as];

  if (reduce) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      className={`relative ${className}`}
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ ...revealUp.show, delay } as any}
    >
      {children}
      {withScan && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 h-px bg-brand/60"
          initial={{ top: "0%", opacity: 0 }}
          whileInView={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </Comp>
  );
};

export default Reveal;
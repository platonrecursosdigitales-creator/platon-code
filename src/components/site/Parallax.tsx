import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Pixels of vertical drift between viewport entry and exit. Negative = up. */
  offset?: number;
};

/**
 * Lightweight scroll-driven parallax. Used to give sections depth without
 * heavy WebGL — element drifts as the section crosses the viewport.
 */
const Parallax = ({ children, className = "", offset = -60 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [Math.abs(offset), -Math.abs(offset) + (offset < 0 ? 0 : 0)]);

  if (reduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div className="h-full w-full" style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default Parallax;
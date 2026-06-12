import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

type Props = {
  words: string[];
  /** ms each word stays visible */
  interval?: number;
  className?: string;
  /** Optional fixed min width in ch to avoid layout shift */
  minCh?: number;
};

/**
 * Elegant word morpher — cycles through related concepts to tell the
 * full story of what we do, in the same line of copy.
 * Uses a vertical slide + blur transition (editorial / tech feel).
 */
const RotatingWord = ({ words, interval = 2200, className = "", minCh }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [inView, words.length, interval, reduce]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span
      ref={ref}
      className={`relative inline-flex align-baseline overflow-hidden ${className}`}
      style={{ minWidth: `${minCh ?? longest.length}ch`, height: "1.05em", lineHeight: 1 }}
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWord;
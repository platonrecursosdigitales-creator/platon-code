import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  /** ms per character */
  speed?: number;
  /** Custom variable speed function (charIndex, char) => ms */
  variableSpeed?: (index: number, char: string) => number;
  /** ms before starting once in view */
  delay?: number;
  className?: string;
  /** Show blinking caret while typing (and keep after). */
  caret?: boolean;
  /** Hide caret once finished. */
  caretHideOnDone?: boolean;
  /** Re-run every time it enters viewport. */
  loop?: boolean;
  as?: "span" | "p" | "h2" | "div";
};

/**
 * Fast, professional typewriter. Triggers on scroll-in.
 * Used to invite the eye to keep reading at strategic anchors.
 */
const Typewriter = ({
  text,
  speed = 28,
  variableSpeed,
  delay = 0,
  className = "",
  caret = true,
  caretHideOnDone = false,
  loop = false,
  as = "span",
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !loop, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [out, setOut] = useState(reduce ? text : "");
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce || !inView) return;
    setOut("");
    setDone(false);
    let i = 0;
    let raf = 0;
    const start = window.setTimeout(() => {
      const tick = () => {
        i += 1;
        setOut(text.slice(0, i));
        if (i < text.length) {
          const charSpeed = variableSpeed ? variableSpeed(i, text[i]) : speed;
          raf = window.setTimeout(tick, charSpeed) as unknown as number;
        } else {
          setDone(true);
        }
      };
      tick();
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(raf);
    };
  }, [inView, text, speed, variableSpeed, delay, reduce]);

  const Tag: any = as;
  return (
    <Tag ref={ref} className={className}>
      {out}
    </Tag>
  );
};

export default Typewriter;
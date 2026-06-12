import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Awwwards-style page-wide scroll progress bar.
 * Sits fixed under the navbar and gives constant feedback of position.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-brand"
    />
  );
};

export default ScrollProgress;
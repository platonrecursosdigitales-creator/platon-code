import { motion, useReducedMotion } from "framer-motion";
import Typewriter from "./Typewriter";
import statueImg from "@/assets/platon-statue.png";

const BRAND = "Platon Code";

const Hero = ({ loaded = true, onAgenda }: { loaded?: boolean; onAgenda: () => void }) => {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="inicio"
      className="relative h-[100svh] w-full flex items-center overflow-hidden bg-bone"
    >
      {/* Statue — right side, feathered edges, behind text */}
      <motion.img
        src={statueImg}
        alt="Platon Statue"
        draggable={false}
        initial={reduce ? false : { opacity: 0, y: 50, filter: "blur(8px)" }}
        animate={reduce ? undefined : loaded ? { opacity: 0.9, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(8px)" }}
        transition={{ duration: 1.8, ease, delay: 0.4 }}
        className="pointer-events-none select-none absolute right-[-2vw] bottom-0 h-[85vh] w-auto object-contain object-bottom z-0 opacity-90"
        style={{
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
          maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
        }}
      />

      {/* Left lockup — Platon Code + Digital Business Suite */}
      <div className="absolute left-[4vw] top-1/2 -translate-y-[60%] z-10 w-[60vw]">
        <div className="flex flex-col w-max">
          <h1
            className="font-display font-semibold text-ink leading-[0.9] tracking-tight text-[45px] md:text-[65px] lg:text-[85px]"
            aria-label={BRAND}
          >
            {loaded ? (
              <Typewriter 
                text={BRAND} 
                delay={200}
                variableSpeed={(i) => (i < 7 ? 40 : 160)} 
              />
            ) : (
              <span className="opacity-0">{BRAND}</span>
            )}
          </h1>

          {/* Digital Business Suite — slides down from behind */}
          <div className="mt-2 overflow-hidden w-full relative">
            <motion.div
              initial={reduce ? false : { y: "-110%" }}
              animate={reduce ? undefined : loaded ? { y: 0 } : { y: "-110%" }}
              transition={{ duration: 0.8, ease, delay: 1.2 }}
              className="font-mono uppercase text-ink tracking-[0.2em] opacity-60 text-[27px] md:text-[39px] lg:text-[51px]"
            >
              Digital Business Suite
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


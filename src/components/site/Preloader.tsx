import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import logoSrc from "@/assets/platon-logo-vector.svg";

/**
 * Preloader cinematográfico — 7 fases:
 * 1. Takeover (overlay + grid sutil)
 * 2. Formación del logo (draw-on + barrido azul)
 * 3. Naming (mask reveal)
 * 4. Hold de marca
 * 5. Giro + arrastre + reducción a punto
 * 6. Cortina recta hacia arriba
 * 7. Desmonte
 */

const ease = [0.22, 1, 0.36, 1] as const;
const easeCurtain = [0.76, 0, 0.24, 1] as const;

type Phase = "form" | "name" | "hold" | "spin" | "curtain" | "done";

const Preloader = ({ onDone }: { onDone: () => void }) => {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [phase, setPhase] = useState<Phase>("form");

  // Duraciones por dispositivo
  const T = reduce
    ? { form: 350, name: 250, hold: 200, spin: 0, curtain: 250 }
    : isMobile
      ? { form: 700, name: 450, hold: 250, spin: 550, curtain: 550 }
      : { form: 900, name: 600, hold: 450, spin: 800, curtain: 750 };

  useEffect(() => {
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setPhase("name"), T.form));
    timers.push(window.setTimeout(() => setPhase("hold"), T.form + T.name));
    timers.push(window.setTimeout(() => setPhase(reduce ? "curtain" : "spin"), T.form + T.name + T.hold));
    timers.push(window.setTimeout(() => setPhase("curtain"), T.form + T.name + T.hold + T.spin));
    timers.push(window.setTimeout(() => setPhase("done"), T.form + T.name + T.hold + T.spin + T.curtain));
    timers.push(window.setTimeout(onDone, T.form + T.name + T.hold + T.spin + T.curtain + 50));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bloquear scroll durante el preloader
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, []);

  const showName = phase === "name" || phase === "hold" || phase === "spin";
  const spinning = phase === "spin";
  const showDot = phase === "spin" || phase === "curtain";

  const logoSize = isMobile ? 132 : 180;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ backgroundColor: "#FAECD6", willChange: "transform" }}
          initial={{ y: 0 }}
          animate={phase === "curtain" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: T.curtain / 1000, ease: easeCurtain }}
        >
          {/* Grid técnico sutil */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(2,0,41,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,0,41,0.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
            }}
          />

          {/* Centro */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Wrapper que se desplaza al hacer spin (logo + nombre como un todo) */}
            <motion.div
              className="relative flex flex-col items-center"
              animate={
                spinning && !reduce
                  ? { x: isMobile ? -120 : -180 }
                  : { x: 0 }
              }
              transition={{ duration: T.spin / 1000, ease }}
              style={{ willChange: "transform" }}
            >
              {/* LOGO */}
              <motion.div
                className="relative"
                style={{ width: logoSize, height: logoSize, willChange: "transform, opacity, filter" }}
                initial={{ opacity: 0, scale: 0.82, rotate: -6, filter: "blur(8px)" }}
                animate={
                  spinning && !reduce
                    ? { opacity: 1, scale: 0.08, rotate: -180, filter: "blur(0px)" }
                    : { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }
                }
                transition={
                  spinning
                    ? { duration: T.spin / 1000, ease }
                    : { duration: T.form / 1000, ease }
                }
              >
                <img
                  src={logoSrc}
                  alt="Platon Code"
                  draggable={false}
                  className="absolute inset-0 h-full w-full"
                  style={{ objectFit: "contain" }}
                />

                {/* Barrido azul vertical */}
                {!reduce && phase === "form" && (
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] pointer-events-none"
                    style={{ background: "#2563EB", boxShadow: "0 0 16px rgba(37,99,235,0.7)" }}
                    initial={{ top: 0, opacity: 0 }}
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: T.form / 1000, ease }}
                    aria-hidden
                  />
                )}
              </motion.div>

              {/* NAMING */}
              <motion.div
                className="mt-8 md:mt-10 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: showName ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ willChange: "transform, opacity, filter" }}
              >
                <motion.div
                  className="font-display font-semibold tracking-tight text-center"
                  style={{
                    color: "#020029",
                    fontSize: isMobile ? 28 : 44,
                    lineHeight: 1.05,
                    clipPath: showName ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                    transition: `clip-path ${T.name}ms cubic-bezier(0.22,1,0.36,1)`,
                  }}
                  animate={
                    spinning && !reduce
                      ? { x: isMobile ? -60 : -100, opacity: 0, filter: "blur(6px)" }
                      : { x: 0, opacity: 1, filter: "blur(0px)" }
                  }
                  transition={{ duration: T.spin / 1000, ease }}
                >
                  Platon Code
                </motion.div>

                {/* Trail fantasma para el remolino (solo desktop, no reduce) */}
                {spinning && !reduce && !isMobile && (
                  <>
                    <motion.div
                      aria-hidden
                      className="absolute font-display font-semibold tracking-tight pointer-events-none"
                      style={{ color: "#2563EB", fontSize: 44, lineHeight: 1.05, opacity: 0.25 }}
                      initial={{ x: 0, opacity: 0.25, filter: "blur(2px)" }}
                      animate={{ x: -140, opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: T.spin / 1000, ease }}
                    >
                      Platon Code
                    </motion.div>
                    <motion.div
                      aria-hidden
                      className="absolute font-display font-semibold tracking-tight pointer-events-none"
                      style={{ color: "#020029", fontSize: 44, lineHeight: 1.05, opacity: 0.15 }}
                      initial={{ x: 0, opacity: 0.15, filter: "blur(1px)" }}
                      animate={{ x: -180, opacity: 0, filter: "blur(14px)" }}
                      transition={{ duration: T.spin / 1000, ease, delay: 0.05 }}
                    >
                      Platon Code
                    </motion.div>
                  </>
                )}

                <motion.div
                  className="mt-3 font-mono uppercase"
                  style={{
                    color: "#020029",
                    opacity: 0.65,
                    fontSize: isMobile ? 10 : 12,
                    letterSpacing: "0.32em",
                    clipPath: showName ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                    transition: `clip-path ${T.name}ms cubic-bezier(0.22,1,0.36,1) 80ms`,
                  }}
                  animate={
                    spinning && !reduce
                      ? { x: isMobile ? -60 : -100, opacity: 0 }
                      : { opacity: 0.65, x: 0 }
                  }
                  transition={{ duration: T.spin / 1000, ease }}
                >
                  Digital Business Suite
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Punto azul eliminado a peticion */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

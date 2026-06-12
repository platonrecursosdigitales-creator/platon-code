import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { viewportOnce, slideInLeft, slideInRight, maskReveal, popIn } from "@/lib/motion";
import Parallax from "@/components/site/Parallax";

const features = [
  "Presencia sólida y autoridad visual",
  "UX/UI clara y profesional",
  "Estructura comercial orientada a captación",
  "Velocidad y rendimiento técnico",
  "Responsive en todos los dispositivos",
  "SEO base y arquitectura limpia",
  "CTA claro y enfoque a conversión",
  "Confianza y consistencia editorial",
];

const flow = ["Visitante", "Mensaje claro", "CTA", "Diagnóstico", "Llamada"];

const WebFocus = () => (
  <section className="relative py-24 lg:py-36 bg-ink text-bone overflow-hidden">
    <div className="absolute inset-0 grid-tech opacity-[0.06] pointer-events-none" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-12">
        <motion.div
          className="lg:col-span-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-4">/ 02 — Sitios Web</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            <span className="block overflow-hidden">
              <motion.span className="block" variants={maskReveal} custom={0}>
                Sitios web que no solo se ven bien:
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block text-brand italic" variants={maskReveal} custom={1}>
                trabajan para tu crecimiento.
              </motion.span>
            </span>
          </h2>
          <p className="mt-6 text-bone/70 max-w-xl text-lg leading-relaxed">
            Un sitio web profesional debe ser una pieza estratégica, no un folleto digital. Construimos webs
            con criterio técnico y enfoque comercial.
          </p>

          <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {features.map((f, i) => (
              <motion.li
                key={f}
                custom={i}
                variants={slideInLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex items-start gap-2 text-bone/85"
              >
                <Check size={16} className="text-brand mt-1 shrink-0" />
                <span className="text-[15px]">{f}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="lg:col-span-6"
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
         <Parallax offset={-30}>
          <div className="border border-bone/15 rounded-md p-6 lg:p-8 bg-bone/[0.03] backdrop-blur-sm">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-8">
              <span>conversion.flow</span>
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-bone/30" />
                <span className="h-2 w-2 rounded-full bg-bone/30" />
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>
            </div>

            <ol className="space-y-3">
              {flow.map((step, i) => (
                <motion.li
                  key={step}
                  custom={i}
                  variants={popIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative flex items-center gap-4 border border-bone/10 rounded-md px-4 py-3.5 hover:border-brand transition-colors group"
                >
                  <span className="font-mono text-[11px] text-bone/40 w-6">/0{i + 1}</span>
                  <span className="font-display text-xl group-hover:text-brand transition-colors">{step}</span>
                  {i < flow.length - 1 && (
                    <span className="absolute -bottom-3 left-10 h-3 w-px bg-bone/20" />
                  )}
                </motion.li>
              ))}
            </ol>

            <div className="mt-8 pt-5 border-t border-bone/10 font-mono text-[11px] text-bone/50">
              <span className="text-brand">→</span> Resultado: visita ordenada con dirección comercial clara.
            </div>
          </div>
         </Parallax>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WebFocus;

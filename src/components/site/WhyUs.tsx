import { motion } from "framer-motion";
import { viewportOnce, maskReveal, alt } from "@/lib/motion";

const points = [
  { t: "Diseño profesional", d: "Composición editorial, tipografía con criterio y estética digital de alto nivel." },
  { t: "Desarrollo moderno", d: "Stack actual, componentes limpios y arquitectura mantenible." },
  { t: "Enfoque comercial", d: "Cada decisión orientada a captación, conversión y crecimiento." },
  { t: "Tecnología real", d: "Infraestructura, integraciones y software construidos con ingeniería sólida." },
  { t: "Atención clara", d: "Comunicación directa, alcance definido y trato profesional." },
  { t: "Soluciones adaptadas", d: "Cada empresa tiene contexto distinto: estructuramos en función del negocio." },
];

const WhyUs = () => (
  <section id="confianza" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">/ 03 — Por qué Platon Code</div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={maskReveal}
                custom={0}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                Criterio técnico, diseño profesional
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={maskReveal}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                y enfoque <span className="text-brand">comercial</span>.
              </motion.span>
            </span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.t}
            custom={i}
            variants={alt(i)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="group relative border-t border-ink/15 pt-6 pr-4 hover:border-brand transition-colors"
          >
            <div className="font-mono text-[11px] tracking-[0.2em] text-ink/40 mb-3 group-hover:text-brand transition-colors">
              0{i + 1} / 0{points.length}
            </div>
            <h3 className="font-display text-2xl text-ink mb-2">{p.t}</h3>
            <p className="text-ink/70 text-[15px] leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;

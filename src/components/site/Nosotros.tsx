import { motion } from "framer-motion";
import { viewportOnce, revealUp, staggerContainer, lineDrawX, alt } from "@/lib/motion";

const blocks = [
  {
    n: "01",
    t: "Presencia digital",
    d: "Diseñamos sitios web profesionales para que una empresa se vea seria, clara y confiable desde el primer contacto.",
  },
  {
    n: "02",
    t: "Sistemas y operación",
    d: "Creamos paneles, formularios conectados, estructuras de leads y soluciones internas para ordenar información.",
  },
  {
    n: "03",
    t: "Crecimiento comercial",
    d: "Alineamos diseño, mensaje, captación, automatización y seguimiento para mejorar la forma en que una empresa se presenta y vende.",
  },
];

const Nosotros = () => (
  <section id="nosotros" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid lg:grid-cols-12 gap-10 mb-14"
      >
        <div className="lg:col-span-4">
          <motion.div variants={revealUp} className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">
            / 02 — Quiénes somos
          </motion.div>
          <motion.div
            variants={lineDrawX}
            style={{ transformOrigin: "left" }}
            className="h-px bg-ink/30 w-24"
          />
        </div>
        <div className="lg:col-span-8">
          <motion.h2 variants={revealUp} className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            Qué es <span className="text-brand italic">Platon Code</span>.
          </motion.h2>
          <motion.p variants={revealUp} className="mt-6 text-ink/70 max-w-2xl text-lg leading-relaxed">
            Una agencia digital técnica y comercial para empresas que necesitan presencia, sistemas y crecimiento con mayor estructura. Integramos desarrollo web, software, branding, automatización y marketing digital para construir soluciones que no solo se ven bien, también ordenan la operación, presentan mejor la oferta y convierten visitas en oportunidades reales de contacto.
          </motion.p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
        {blocks.map((b, i) => (
          <motion.div
            key={b.n}
            custom={i}
            variants={alt(i)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="group bg-bone p-7 lg:p-9 hover:bg-card transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 mb-6 group-hover:text-brand transition-colors">
              / {b.n}
            </div>
            <h3 className="font-display text-2xl text-ink mb-3 leading-tight">{b.t}</h3>
            <p className="text-ink/70 text-[14px] leading-relaxed">{b.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Nosotros;

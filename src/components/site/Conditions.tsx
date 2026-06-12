import { motion } from "framer-motion";
import { revealUp, staggerContainer, viewportOnce, cardLift, lineDrawX } from "@/lib/motion";

const buckets = [
  {
    label: "Ajuste visual",
    desc: "Cambio menor de acomodo, color dentro de identidad, orden de bloques, alineación, presentación o corrección visual.",
  },
  {
    label: "Cambio de contenido",
    desc: "Reemplazo, modificación o reescritura de textos, servicios, precios, imágenes o información enviada después de haber sido integrada.",
  },
  {
    label: "Rediseño completo",
    desc: "Cambio total de dirección visual, estructura, estilo o concepto después de haber aprobado el preview.",
  },
];

const costs = [
  { l: "Cambio adicional", v: "$350 MXN" },
  { l: "Nueva sección", v: "$780 MXN" },
  { l: "Nueva funcionalidad", v: "Desde $1,200 MXN" },
  { l: "Rediseño completo", v: "$1,200 MXN" },
  { l: "Mantenimiento mensual", v: "Desde $900 MXN/mes" },
];

const Conditions = () => (
  <section id="alcance" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid lg:grid-cols-12 gap-10 mb-14 items-end"
      >
        <div className="lg:col-span-7">
          <motion.div variants={revealUp} className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">
            / 05 — Alcance
          </motion.div>
          <motion.h2 variants={revealUp} className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            Alcance claro <span className="text-brand italic">desde el inicio</span>.
          </motion.h2>
          <motion.div variants={lineDrawX} style={{ transformOrigin: "left" }} className="h-px bg-ink/30 w-24 mt-6" />
        </div>
        <motion.p variants={revealUp} className="lg:col-span-5 text-ink/70 text-[15px] leading-relaxed">
          Definimos qué entra en el alcance acordado y qué se considera trabajo adicional, para mantener la entrega ágil y sin sorpresas.
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-5 mb-6">
        {buckets.map((b, i) => (
          <motion.div
            key={b.label}
            custom={i}
            variants={cardLift}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl border border-ink/15 bg-bone p-7 hover:border-brand/40 transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 mb-3">/ 0{i + 1}</div>
            <h3 className="font-display text-2xl text-ink leading-tight mb-3">{b.label}</h3>
            <p className="text-ink/75 text-[14px] leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={cardLift}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="rounded-2xl border border-ink/15 overflow-hidden bg-ink text-bone"
      >
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 p-7 lg:p-8 border-b lg:border-b-0 lg:border-r border-bone/10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 mb-3">/ Costos adicionales</div>
            <h3 className="font-display text-2xl leading-tight">Trabajo fuera de alcance</h3>
            <p className="mt-4 text-bone/70 text-[14px] leading-relaxed">
              Se cotiza por separado para mantener tiempos, calidad y dirección del proyecto original.
            </p>
          </div>
          <ul className="lg:col-span-8 divide-y divide-bone/10">
            {costs.map((c) => (
              <li key={c.l} className="flex items-baseline justify-between gap-6 px-7 lg:px-8 py-5">
                <span className="text-bone/85 text-[14.5px]">{c.l}</span>
                <span className="font-display text-xl tracking-tight text-bone whitespace-nowrap">{c.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <p className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/55">
        Esquema de pago: 50% al inicio · 50% al entregar.
      </p>
    </div>
  </section>
);

export default Conditions;
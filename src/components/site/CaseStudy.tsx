import { motion } from "framer-motion";
import { viewportOnce, slideInLeft, alt, maskReveal } from "@/lib/motion";
import Parallax from "@/components/site/Parallax";
import Typewriter from "@/components/site/Typewriter";

const blocks = [
  { l: "Sitio turístico", t: "Plantilla referencial para presentar paquetes, rutas y servicios turísticos con CTA directo." },
  { l: "Sitio empresarial", t: "Estructura para empresas que necesitan presencia profesional y captación de prospectos." },
  { l: "Panel de leads", t: "Vista interna referencial para gestión, estados y exportación de prospectos." },
  { l: "Sistema interno", t: "Concepto de panel privado para flujos operativos y administración de información." },
];

const example = [
  { l: "Sitio turístico", tag: "Web Presence" },
  { l: "Sitio empresarial", tag: "Web Presence" },
  { l: "Panel de leads", tag: "Lead System" },
  { l: "Sistema interno", tag: "Cloud Suite" },
];

const CaseStudy = () => (
  <section id="confianza-caso" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">/ 06 — Casos</div>
          <div className="font-mono text-[11px] text-ink/60">Proyecto destacado · Turi Ofertas</div>
          <div className="font-mono text-[11px] text-ink/60">Sector · Tour & Travel</div>
          <div className="mt-4 font-mono text-[11px] text-brand">
            <Typewriter text="> imágenes referenciales (EJEMPLO)" speed={26} caretHideOnDone />
          </div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            <span className="block overflow-hidden">
              <motion.span className="block" variants={maskReveal} custom={0} initial="hidden" whileInView="show" viewport={viewportOnce}>
                Proyectos y soluciones
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block italic" variants={maskReveal} custom={1} initial="hidden" whileInView="show" viewport={viewportOnce}>
                en desarrollo.
              </motion.span>
            </span>
          </h2>
          <p className="mt-6 text-ink/70 max-w-2xl text-lg leading-relaxed">
            Cada proyecto se estructura según el negocio, su objetivo y el tipo de solución digital que necesita.
            Las imágenes mostradas son referenciales y se reemplazarán por capturas reales conforme se publiquen.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Visual abstract panel */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5 relative aspect-[4/5] rounded-md border border-ink/15 overflow-hidden bg-ink text-bone"
        >
         <Parallax offset={-40} className="h-full">
          <div className="absolute inset-0 grid-tech opacity-[0.08]" />
          {/* EJEMPLO badge */}
          <div className="absolute top-4 right-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] bg-brand text-bone px-2.5 py-1 rounded shadow-[0_6px_18px_-6px_rgba(37,99,235,0.65)]">
            EJEMPLO
          </div>
          {/* Diagonal watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-display text-[140px] leading-none text-bone/[0.06] -rotate-12 select-none tracking-tight">
              EJEMPLO
            </span>
          </div>
          <div className="absolute inset-0 p-7 flex flex-col justify-between">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-bone/60 flex justify-between">
              <span>case · 001 · referencial</span>
              <span>turi.travel</span>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl leading-tight">
                Tour &amp; Travel <br /><span className="text-brand">re-presented</span>.
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                Mockup referencial · imagen pendiente por reemplazar
              </div>
              <div className="mt-6 flex gap-2">
                {["UI", "Web", "Strategy", "Brand"].map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] border border-bone/25 rounded px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </div>
          {/* abstract shapes */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-bone/15" />
          <div className="absolute -left-12 -bottom-12 h-48 w-48 rotate-45 border border-brand/40" />
         </Parallax>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {example.map((e, i) => (
            <motion.div
              key={e.l}
              custom={i}
              variants={alt(i)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative aspect-[4/3] rounded-md border border-ink/15 overflow-hidden bg-card hover:border-brand/40 transition-colors"
            >
              <div className="absolute inset-0 grid-tech opacity-[0.08]" />
              <div className="absolute top-3 right-3 z-10 font-mono text-[10px] uppercase tracking-[0.22em] bg-brand text-bone px-2 py-0.5 rounded">
                EJEMPLO
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display text-6xl md:text-7xl text-ink/[0.07] -rotate-12 select-none tracking-tight">
                  EJEMPLO
                </span>
              </div>
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  / 0{i + 1} · {e.tag}
                </div>
                <div>
                  <div className="font-display text-xl text-ink leading-tight">{e.l}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    Captura temporal · pendiente por reemplazar
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* desc strip */}
          <div className="sm:col-span-2 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-ink/70 mt-2">
            {blocks.map((b) => (
              <div key={b.l} className="border-l border-ink/15 pl-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 block mb-1">{b.l}</span>
                {b.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudy;

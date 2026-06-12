import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { viewportOnce, slideInLeft } from "@/lib/motion";

const steps = [
  { t: "Diagnóstico", d: "Revisamos el negocio, sus servicios, objetivo comercial, imagen actual y necesidades digitales." },
  { t: "Información del cliente", d: "El cliente entrega logotipo, imágenes, años de experiencia, contacto, WhatsApp, redes, dirección si aplica e información de productos o servicios." },
  { t: "Propuesta visual", d: "Construimos una primera versión con estructura, diseño, contenido y enfoque comercial." },
  { t: "Primer preview", d: "El cliente revisa la propuesta inicial y solicita ajustes visuales dentro del alcance acordado." },
  { t: "Ajustes finales", d: "Aplicamos correcciones visuales, acomodo y detalles finales sin rediseñar todo el proyecto." },
  { t: "Publicación", d: "El sitio se considera entregado cuando queda publicado en el dominio o entorno acordado." },
  { t: "Evolución", d: "Si el cliente necesita nuevas secciones, funcionalidades, campañas, cloud o mantenimiento, se cotiza como servicio adicional." },
];

const Process = () => {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });

  return (
  <section id="proceso" className="py-24 lg:py-36 bg-ink text-bone">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-4">/ 04 — Proceso</div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            Cómo <span className="text-brand italic">trabajamos</span>.
          </h2>
          <p className="mt-6 text-bone/70 max-w-2xl text-lg">
            Un proceso claro para construir rápido, con dirección visual, alcance definido y entrega profesional.
          </p>
        </div>
      </div>

      <ol ref={ref} className="relative">
        {/* base track */}
        <div className="absolute left-[14px] top-2 bottom-2 w-px bg-bone/15 hidden md:block" />
        {/* progress drawn by scroll */}
        <motion.div
          aria-hidden
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-[14px] top-2 bottom-2 w-px bg-brand hidden md:block"
        />
        {steps.map((s, i) => (
          <motion.li
            key={s.t}
            custom={i}
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid grid-cols-[40px_1fr] md:grid-cols-[60px_220px_1fr] gap-x-5 gap-y-2 py-6 border-b border-bone/10 group"
          >
            <span className="relative">
              <span className="block h-3 w-3 rounded-full bg-brand mt-2 md:mt-3" />
            </span>
            <div className="font-display text-2xl md:text-3xl text-bone group-hover:text-brand transition-colors">{s.t}</div>
            <div className="col-span-2 md:col-span-1 text-bone/65 text-[15px] leading-relaxed max-w-xl">{s.d}</div>
            <span className="hidden md:block absolute right-0 top-7 font-mono text-[11px] tracking-[0.2em] text-bone/40">step / 0{i + 1}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
  );
};

export default Process;

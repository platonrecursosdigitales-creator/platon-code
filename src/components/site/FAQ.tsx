import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { revealUp, staggerContainer, viewportOnce, lineDrawX } from "@/lib/motion";

const faqs = [
  { q: "¿Cuánto tarda un sitio web?", a: "El tiempo estimado es de 24 a 48 horas hábiles después de recibir toda la información completa del cliente." },
  { q: "¿Qué necesito entregar para iniciar?", a: "Logotipo, imágenes del negocio o servicios, años de experiencia, número de contacto, WhatsApp, redes sociales, dirección si aplica e información de productos o servicios." },
  { q: "¿Qué pasa si no entrego la información completa?", a: "El proyecto no inicia o queda pausado hasta recibir la información necesaria. Los tiempos de entrega comienzan cuando el contenido está completo." },
  { q: "¿Qué pasa si tardo en aprobar?", a: "Se enviarán recordatorios de seguimiento. Si la aprobación se retrasa, la fecha final de publicación se recorre proporcionalmente." },
  { q: "¿Cuándo se considera entregado el proyecto?", a: "Cuando el sitio queda publicado en el dominio o entorno acordado, con la estructura aprobada y ajustes finales aplicados." },
  { q: "¿Incluye dominio y hosting?", a: "En Web Presence puede incluir dominio/hosting base por 1 año si el proyecto se mantiene dentro del entorno acordado. Proyectos avanzados o cloud se cotizan aparte." },
  { q: "¿Puedo pedir cambios después?", a: "Sí, pero los cambios posteriores fuera del alcance se cotizan por separado." },
  { q: "¿El panel de leads tiene límite?", a: "Sí. El plan Lead System incluye hasta 200 leads activos. Al llegar al límite, se exportan en PDF y se limpia la base de datos para continuar capturando nuevos registros." },
  { q: "¿El plan Growth Ads incluye inversión publicitaria?", a: "No. La configuración tiene costo independiente y la pauta se paga aparte." },
  { q: "¿Garantizan ventas?", a: "No se garantizan resultados comerciales específicos. Se construye una estructura profesional orientada a mejorar presencia, captación y seguimiento, pero los resultados dependen del mercado, oferta, inversión, seguimiento y operación del cliente." },
];

const FAQ = () => (
  <section id="faq" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid lg:grid-cols-12 gap-10 mb-14 items-end"
      >
        <div className="lg:col-span-5">
          <motion.div variants={revealUp} className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">
            / 09 — Preguntas frecuentes
          </motion.div>
          <motion.h2 variants={revealUp} className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            Lo que suelen <span className="text-brand italic">preguntarnos</span>.
          </motion.h2>
          <motion.div
            variants={lineDrawX}
            style={{ transformOrigin: "left" }}
            className="h-px bg-ink/30 w-24 mt-6"
          />
        </div>
        <motion.p variants={revealUp} className="lg:col-span-6 lg:col-start-7 text-ink/70 text-[15px] leading-relaxed">
          Respuestas claras sobre tiempos, pagos, alcance, hosting y soporte. Si tu duda no está aquí, te la resolvemos en la llamada.
        </motion.p>
      </motion.div>

      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="rounded-2xl border border-ink/15 bg-bone overflow-hidden"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-ink/10 last:border-b-0"
            >
              <AccordionTrigger className="px-6 lg:px-8 py-5 hover:no-underline group">
                <div className="flex items-start gap-5 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 pt-1 shrink-0">
                    / 0{i + 1}
                  </span>
                  <span className="font-display text-lg md:text-xl text-ink group-hover:text-brand transition-colors">
                    {f.q}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 lg:px-8 pb-6">
                <div className="pl-[60px] text-ink/75 text-[14.5px] leading-relaxed max-w-3xl">
                  {f.a}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;

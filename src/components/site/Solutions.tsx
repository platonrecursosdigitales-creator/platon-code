import { Globe, LayoutDashboard, Sparkles, Workflow, Megaphone, Cloud, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { revealUp, staggerContainer, viewportOnce, cardLift, maskReveal, lineDrawX } from "@/lib/motion";

const items = [
  {
    icon: Globe,
    title: "Sitios web comerciales",
    forWhom: "Empresas que necesitan presencia digital seria.",
    solves: "Sitios responsivos enfocados en presentar la empresa con autoridad, explicar servicios y dirigir al contacto o cotización.",
    tag: "Web Presence",
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas internos y paneles",
    forWhom: "Operaciones que dependen de planillas y procesos manuales.",
    solves: "Paneles privados, formularios conectados, gestión de leads y herramientas internas para ordenar información y seguimiento comercial.",
    tag: "Software",
  },
  {
    icon: Sparkles,
    title: "Branding y vectorización",
    forWhom: "Marcas con logo improvisado o identidad débil.",
    solves: "Limpieza básica de logo, vectorización y adaptación visual para uso digital profesional.",
    tag: "Identity",
  },
  {
    icon: Workflow,
    title: "Automatización e integraciones",
    forWhom: "Equipos que pierden tiempo entre apps y formularios.",
    solves: "Flujos digitales para reducir trabajo manual, organizar prospectos y conectar procesos según la operación del negocio.",
    tag: "Ops",
  },
  {
    icon: Megaphone,
    title: "Meta Ads / growth setup",
    forWhom: "Negocios listos para activar tráfico y prospectos.",
    solves: "Configuración inicial de campañas para activar tráfico, mensajes o prospectos con una estructura comercial más clara.",
    tag: "Growth",
  },
  {
    icon: Cloud,
    title: "Google Cloud / infraestructura",
    forWhom: "Productos digitales que requieren backend serio.",
    solves: "Backend, despliegue cloud, bases de datos, sistemas internos e infraestructura más robusta.",
    tag: "Cloud",
  },
];

const Solutions = () => (
  <section id="servicios" className="relative py-24 lg:py-36 bg-bone">
    <div className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid lg:grid-cols-12 gap-10 mb-16"
      >
        <div className="lg:col-span-4">
          <motion.div variants={revealUp} className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">/ 02 — Servicios</motion.div>
          <motion.div
            variants={lineDrawX}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            style={{ transformOrigin: "left" }}
            className="h-px bg-ink/30 w-24"
          />
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            <span className="block overflow-hidden">
              <motion.span className="block" variants={maskReveal} custom={0}>
                Servicios <span className="text-brand italic">digitales</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block" variants={maskReveal} custom={1}>
                para empresas que quieren crecer.
              </motion.span>
            </span>
          </h2>
          <motion.p variants={revealUp} className="mt-6 text-ink/70 max-w-2xl text-lg">
            Integramos diseño, desarrollo, sistemas y estrategia comercial para construir soluciones digitales con presencia, orden y capacidad de crecimiento.
          </motion.p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            custom={i}
            variants={cardLift}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="group relative bg-bone p-7 lg:p-9 hover:bg-card transition-colors"
          >
            <div className="flex items-start justify-between mb-10">
              <div className="h-11 w-11 rounded-md border border-ink/15 flex items-center justify-center group-hover:border-brand group-hover:text-brand transition-colors">
                <it.icon size={18} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">{it.tag} · 0{i + 1}</span>
            </div>
            <h3 className="font-display text-2xl text-ink leading-tight mb-3">{it.title}</h3>
            <div className="space-y-2.5 text-[14px] leading-relaxed">
              <p className="text-ink/80"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 mr-2">Para</span>{it.forWhom}</p>
              <p className="text-ink/70"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 mr-2">Resuelve</span>{it.solves}</p>
            </div>
            <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 group-hover:text-brand transition-colors">
              <span>Explorar</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;

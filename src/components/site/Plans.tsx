import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { viewportOnce, cardLift, revealUp, staggerContainer, lineDrawX } from "@/lib/motion";

type Plan = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  badge: string;
  type?: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
  note?: string;
};

const plans: Plan[] = [
  {
    id: "web-presence",
    name: "Platon Web Presence",
    price: "$3,500",
    priceNote: "MXN",
    badge: "Sitio profesional",
    type: "Pago único",
    desc:
      "Sitio web profesional de presencia comercial para empresas que quieren verse serias, explicar mejor sus servicios y dirigir visitantes hacia contacto o cotización.",
    features: [
      "Sitio web responsivo",
      "Hasta 4 secciones estratégicas",
      "Diseño visual profesional",
      "Vectorización o limpieza básica de logo",
      "Textos comerciales base con info del cliente",
      "Botón de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario visual o sección de contacto",
      "SEO base",
      "Publicación del sitio",
      "Dominio/hosting base por 1 año si aplica",
      "Primer preview y ajustes finales",
    ],
    cta: "Agendar llamada",
  },
  {
    id: "lead-system",
    name: "Platon Lead System",
    price: "$5,800",
    priceNote: "MXN",
    badge: "Sistema de leads",
    type: "Implementación 1 año / sin mensualidad fija",
    desc:
      "Sitio web profesional con panel privado para capturar, consultar y gestionar prospectos.",
    features: [
      "Todo lo de Web Presence",
      "Formulario conectado a sistema de leads",
      "Panel privado",
      "Login administrativo",
      "1 dueño + hasta 9 usuarios",
      "Hasta 200 leads activos",
      "Exportación de leads en PDF",
      "Limpieza de leads después de exportar",
      "Link directo a WhatsApp del prospecto",
      "Estados: nuevo, contactado, cotizado, cerrado, descartado",
      "Página de gracias y confirmación visual",
    ],
    cta: "Agendar llamada",
  },
  {
    id: "cloud-suite",
    name: "Platon Cloud Suite",
    price: "A cotizar",
    badge: "Avanzado",
    desc:
      "Solución avanzada para empresas que necesitan infraestructura cloud, sistemas internos, backend, automatización o arquitectura digital más robusta.",
    features: [
      "Arquitectura cloud",
      "Backend a medida",
      "Base de datos",
      "Autenticación",
      "Paneles internos",
      "Automatizaciones",
      "Google Cloud si aplica",
      "Estimación de costos",
      "Administración técnica si se requiere",
    ],
    cta: "Contactar asesor",
  },
  {
    id: "growth-ads",
    name: "Platon Growth Ads",
    price: "$2,700",
    priceNote: "MXN",
    badge: "Add-on",
    type: "Configuración inicial",
    desc:
      "Configuración inicial de campaña Meta Ads para empresas que quieren activar tráfico, mensajes o prospectos.",
    features: [
      "Definición de objetivo de campaña",
      "Configuración base en Meta Ads",
      "Copy base",
      "Segmentación inicial",
      "Hasta 2 creativos simples con material del cliente",
      "Revisión básica del enlace destino",
      "Configuración de llamada a la acción",
    ],
    cta: "Solicitar campaña",
    note: "La inversión publicitaria se paga aparte. No se garantizan ventas ni leads.",
  },
];

const DEFAULT_FEATURED = "lead-system";

const Plans = ({ onAgenda }: { onAgenda: () => void }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeId = hovered ?? DEFAULT_FEATURED;
  return (
  <section id="precios" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid lg:grid-cols-12 gap-10 mb-16 items-end"
      >
        <div className="lg:col-span-7">
          <motion.div variants={revealUp} className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">
            / 05 — Modelos de implementación
          </motion.div>
          <motion.h2 variants={revealUp} className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            Modelos de <span className="text-brand italic">implementación</span>.
          </motion.h2>
          <motion.div
            variants={lineDrawX}
            style={{ transformOrigin: "left" }}
            className="h-px bg-ink/30 w-24 mt-6"
          />
        </div>
        <motion.p variants={revealUp} className="lg:col-span-5 text-ink/70 text-[15px] leading-relaxed">
          Elige el nivel de implementación que necesita tu empresa: presencia profesional, captación de leads, campañas o sistemas avanzados.
        </motion.p>
      </motion.div>

      {/* Cards principales — 4 modelos */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {plans.map((p, i) => (
          (() => {
          const featured = p.id === activeId;
          return (
          <motion.div
            key={p.name}
            custom={i}
            variants={cardLift}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className={`group relative rounded-2xl p-7 lg:p-8 flex flex-col transition-all duration-300 ${
              featured
                ? "bg-ink text-bone border border-ink shadow-[0_24px_60px_-24px_rgba(2,0,41,0.55)]"
                : "bg-bone border border-ink/15 hover:border-brand/40 hover:shadow-[0_18px_40px_-20px_rgba(2,0,41,0.25)]"
            }`}
          >
            {featured && (
              <div className="absolute -top-3 left-7 font-mono text-[10px] uppercase tracking-[0.2em] bg-brand text-bone px-2.5 py-1 rounded-full shadow-[0_6px_18px_-6px_rgba(37,99,235,0.65)]">
                Recomendado
              </div>
            )}

            <div className="flex items-center justify-between mb-5">
              <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${featured ? "text-bone/55" : "text-ink/45"}`}>
                / 0{i + 1}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded border ${
                  featured ? "border-bone/25 text-bone/75" : "border-ink/15 text-ink/60"
                }`}
              >
                {p.badge}
              </span>
            </div>

            <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-3">{p.name}</h3>

            <div className="flex items-baseline gap-2 mb-5">
              <span className="font-display text-3xl lg:text-4xl tracking-tight">{p.price}</span>
              {p.priceNote && (
                <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${featured ? "text-bone/60" : "text-ink/50"}`}>
                  {p.priceNote}
                </span>
              )}
            </div>
            {p.type && (
              <div className={`font-mono text-[10px] uppercase tracking-[0.18em] mb-5 ${featured ? "text-bone/55" : "text-ink/50"}`}>
                {p.type}
              </div>
            )}

            <p className={`text-[14px] leading-relaxed mb-7 ${featured ? "text-bone/75" : "text-ink/70"}`}>
              {p.desc}
            </p>

            <ul className="space-y-2.5 mb-6">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13px]">
                  <span
                    className={`mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-sm ${
                      featured ? "bg-brand/15" : "bg-brand/10"
                    }`}
                  >
                    <Check size={11} className="text-brand" strokeWidth={3} />
                  </span>
                  <span className={featured ? "text-bone/90" : "text-ink/85"}>{f}</span>
                </li>
              ))}
            </ul>

            {p.note && (
              <p className={`font-mono text-[10px] uppercase tracking-[0.18em] leading-relaxed mb-5 ${featured ? "text-bone/55" : "text-ink/55"}`}>
                {p.note}
              </p>
            )}

            <div className={`mt-auto pt-6 border-t ${featured ? "border-bone/15" : "border-ink/10"}`}>
              <Button
                onClick={onAgenda}
                className="w-full"
                variant={featured ? "brand" : "hero"}
              >
                {p.cta}
              </Button>
            </div>
          </motion.div>
          );
          })()
        ))}
      </div>

      {/* Microcopy de alcance */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          "Precios públicos cerrados.",
          "Esquema de pago: 50% inicio / 50% entrega.",
          "Cambios fuera de alcance se cotizan por separado.",
          "No se garantizan resultados publicitarios.",
        ].map((t) => (
          <div
            key={t}
            className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/55 border-l border-ink/15 pl-3 py-1"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Plans;

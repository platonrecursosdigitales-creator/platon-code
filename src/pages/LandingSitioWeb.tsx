import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/meta";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  LayoutTemplate,
  Globe,
  Mail,
  MapPin,
  CheckCircle2,
  Smartphone,
  Check,
  Search,
  MessageCircle,
  ImageIcon,
  Layers
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  easePremium,
  revealUp,
  staggerContainer,
  cardLift,
  lineDraw
} from "@/lib/motion";
import statueImg from "@/assets/imagenlandding.png";
import statueAthena from "@/assets/statue_athena.png";
import statueApollo from "@/assets/statue_apollo.png";
import statueHermes from "@/assets/statue_hermes.png";

import feat1 from "@/assets/statue_feature_1_1782446390064.png";
import feat2 from "@/assets/statue_feature_2_1782446396960.png";
import feat3 from "@/assets/statue_feature_3_1782446407391.png";
import feat4 from "@/assets/statue_feature_4_1782446416347.png";
import feat5 from "@/assets/statue_feature_5_1782446422681.png";
import feat6 from "@/assets/statue_feature_6_1782446438896.png";
import feat7 from "@/assets/statue_feature_7_1782446447372.png";
import feat8 from "@/assets/statue_feature_8_1782446455249.png";
import feat9 from "@/assets/statue_feature_9_1782446463174.png";
import feat10 from "@/assets/statue_feature_10_1782446472623.png";
import feat11 from "@/assets/statue_feature_11_1782446488110.png";

const WHATSAPP_NUMBER = "5215668043332";
const WHATSAPP_TEXT = "Hola, acabo de dejar mis datos y quiero avanzar con mi sitio web.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

function HeroTitle() {
  const [typedCount, setTypedCount] = useState(0);
  const reduce = useReducedMotion();
  const speed = 40; // 40ms per char
  const text = "Tu empresa necesita verse profesional en internet";
  const prefix = "Tu empresa necesita verse ";
  const target = "profesional";
  const suffix = " en internet";

  useEffect(() => {
    if (reduce) {
      setTypedCount(text.length);
      return;
    }
    let i = 0;
    // initial delay before typing starts to let animations settle
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTypedCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, [reduce, text]);

  const renderPart = (partText: string, startIndex: number, isBrand: boolean) => {
    const typedInPart = Math.max(0, Math.min(partText.length, typedCount - startIndex));
    const visible = partText.slice(0, typedInPart);
    const invisible = partText.slice(typedInPart);

    const content = (
      <>
        <span>{visible}</span>
        <span className="opacity-0">{invisible}</span>
      </>
    );

    return isBrand ? <span className="text-brand">{content}</span> : <span>{content}</span>;
  };

  return (
    <h1 className="font-display font-semibold text-ink leading-[1.1] tracking-tight text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-balance mb-6 w-full">
      {renderPart(prefix, 0, false)}
      {renderPart(target, prefix.length, true)}
      {renderPart(suffix, prefix.length + target.length, false)}
    </h1>
  );
}

export default function LandingSitioWeb() {
  useEffect(() => {
    document.title = "Sitio Web Profesional para Empresas | Platon Code";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Creamos sitios web profesionales para empresas y negocios que quieren verse más confiables, claros y preparados para recibir clientes desde internet.");
    }
    
    // Track landing view
    if (typeof window !== "undefined") {
      trackEvent("ViewContent");
      // Simulate dataLayer or custom event push if needed
      console.log("Event: landing_view");
    }
  }, []);

  const handleWhatsAppClick = (eventLabel: string) => {
    trackEvent("Contact");
    console.log(`Event: whatsapp_click, source: ${eventLabel}`);
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-bone min-h-screen text-ink overflow-x-hidden selection:bg-brand selection:text-bone">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
        <div className="noise z-0"></div>
        {/* Glow behind statue */}
        <div className="absolute right-[-10vw] top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0 hidden lg:block"></div>
        
        {/* Statue Image - Desktop Right, Mobile Bottom */}
        <motion.img
          src={statueImg}
          alt="Platon Code Profesional"
          draggable={false}
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          animate={{ opacity: 0.95, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: easePremium, delay: 0.2 }}
          className="absolute lg:right-[-2vw] lg:bottom-0 lg:top-auto lg:translate-y-0 right-1/2 translate-x-1/2 top-[10%] opacity-20 lg:opacity-100 lg:h-[85vh] h-[60vh] w-auto object-contain object-bottom z-0"
          style={{
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          {/* Left Text */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center lg:items-start lg:text-left mt-32 lg:mt-0"
          >
            <motion.div variants={revealUp} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <span className="text-xs font-mono tracking-widest uppercase bg-ink/5 border border-ink/10 px-3 py-1 rounded-full text-ink/80 backdrop-blur-sm">
                Sitio web profesional
              </span>
              <span className="text-xs font-mono tracking-widest uppercase bg-ink/5 border border-ink/10 px-3 py-1 rounded-full text-ink/80 backdrop-blur-sm hidden sm:inline-block">
                Versión preliminar antes de pagar
              </span>
            </motion.div>

            <HeroTitle />

            <motion.p 
              variants={revealUp}
              className="text-lg md:text-xl text-ink/70 max-w-xl text-pretty mb-8 leading-relaxed"
            >
              Los clientes buscan en Google antes de decidir. Si no encuentran una página clara, profesional y bien presentada, la oportunidad puede terminar en manos de otra empresa.
              <br/><br/>
              En <span className="font-semibold text-ink">Platon Code</span> creamos sitios web profesionales para que tu empresa se vea más sólida y haga más fácil que el cliente te contacte.
            </motion.p>

            <motion.div variants={revealUp} className="flex flex-col sm:flex-row gap-4 items-center lg:items-start w-full sm:w-auto">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-base font-semibold px-8 h-14"
                onClick={() => handleWhatsAppClick("cta-hero-whatsapp")}
                data-event="whatsapp_click"
                id="cta-hero-whatsapp"
              >
                Quiero avanzar con mi sitio web
              </Button>
              <Button 
                variant="ghostGlow" 
                size="lg" 
                className="w-full sm:w-auto text-base font-semibold px-8 h-14"
                onClick={() => {
                  document.getElementById("que-incluye")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver qué incluye
              </Button>
            </motion.div>

            <motion.p variants={revealUp} className="mt-4 text-sm text-ink/50 flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand" />
              Ya dejaste tus datos. Un asesor te contactará por WhatsApp.
            </motion.p>
            
            {/* Promo Marketing */}
            <motion.div variants={revealUp} className="mt-10 w-full max-w-xl bg-card border border-brand/20 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand text-bone text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">Incluido Gratis</span>
                    <span className="text-sm font-semibold text-ink">Hosting y Dominio</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ink/70">
                    <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> tuempresa.com</span>
                  </div>
                </div>
                
                <div className="w-full sm:w-px h-px sm:h-12 bg-ink/10"></div>
                
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-sm font-semibold text-ink">Correo Corporativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-sm text-ink/70 font-mono flex items-center gap-1">
                       <Mail className="w-3 h-3" /> contacto@tuempresa.com
                     </span>
                     <div className="flex items-center gap-1.5 ml-2 border-l border-ink/10 pl-2">
                       <svg viewBox="0 0 24 24" fill="#EA4335" className="w-4 h-4" title="Gmail"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                       <svg viewBox="0 0 24 24" fill="#0078D4" className="w-4 h-4" title="Outlook"><path d="M7.155 3.328 17.65 0v16.142l-10.495 2.871V3.328ZM17.65 17.615v6.385l6.35-1.964v-13.8L17.65 9.77v7.845Zm-6.326-8.583c-.808 0-1.464.71-1.464 1.583 0 .874.656 1.583 1.464 1.583.807 0 1.463-.71 1.463-1.583 0-.874-.656-1.583-1.463-1.583Zm0-1.583c1.517 0 2.744 1.417 2.744 3.166 0 1.748-1.227 3.166-2.744 3.166-1.517 0-2.744-1.418-2.744-3.166 0-1.749 1.227-3.166 2.744-3.166Z"/></svg>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. POR QUÉ IMPORTA */}
      <section className="py-24 lg:py-32 relative border-t border-ink/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-bold text-[32px] md:text-[42px] leading-tight mb-6">
              Antes de escribirte, el cliente ya te está evaluando
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg md:text-xl text-ink/90 font-medium leading-relaxed px-4">
              Tu sitio web no es solo una página. Es la primera impresión seria de tu empresa en internet. Ayuda a que el cliente vea tus servicios, tu ubicación, tu forma de trabajo y la manera correcta de contactarte.
            </motion.p>
            
            {/* Logos Oficiales Estratégicos */}
            <motion.div variants={revealUp} className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 hover:text-[#4285F4] transition-colors"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 hover:text-[#1877F2] transition-colors"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 hover:text-[#E4405F] transition-colors"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 hover:text-[#25D366] transition-colors"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Confianza inmediata",
                desc: "Cuando alguien encuentra una página profesional, percibe una empresa más seria, más ordenada y más preparada para atender.",
                img: statueAthena
              },
              {
                icon: Search,
                title: "Información clara",
                desc: "Tu cliente puede ver tus servicios, fotos, ubicación, y WhatsApp sin tener que preguntarte todo por mensaje.",
                img: statueApollo
              },
              {
                icon: LayoutTemplate,
                title: "Mejor presentación",
                desc: "Un sitio bien diseñado eleva la percepción de tu negocio y hace que tu empresa se vea al nivel de lo que realmente ofrece.",
                img: statueHermes
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                variants={cardLift}
                className="relative bg-card overflow-hidden border border-ink/10 rounded-2xl p-8 md:p-10 hover:border-brand/30 transition-all duration-500 group shadow-sm hover:shadow-lg"
              >
                {/* Fondo de estatua */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover object-center" />
                </div>
                {/* Degradado para asegurar que el texto sea perfectamente legible sobre la estatua */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-card via-card/80 to-card/20 md:via-card/60"></div>

                <div className="relative z-10 flex flex-col h-full justify-end pt-12 md:pt-16">
                  <div className="w-14 h-14 bg-ink text-bone rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-brand transition-all duration-500 shadow-md">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">{card.title}</h3>
                  <p className="text-ink/90 font-medium leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. QUÉ INCLUYE */}
      <section id="que-incluye" className="py-24 lg:py-32 bg-ink text-bone relative overflow-hidden">
        <div className="grid-tech absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight mb-6">
              ¿Qué incluye tu sitio web profesional?
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-bone/70">
              Creamos una página enfocada en presentar tu negocio con claridad, autoridad y una experiencia visual cuidada.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { t: "Diseño web profesional adaptado a tu marca", i: LayoutTemplate, img: feat1 },
              { t: "Versión móvil responsive", i: Smartphone, img: feat2 },
              { t: "Dominio .com o .mx sujeto a disponibilidad", i: Globe, img: feat3 },
              { t: "Hosting incluido por un año", i: Check, img: feat4 },
              { t: "Correo corporativo con tu dominio", i: Mail, img: feat5 },
              { t: "Hasta 5 secciones estratégicas", i: Layers, img: feat6 },
              { t: "Formulario de contacto", i: Check, img: feat7 },
              { t: "Botón directo a WhatsApp", i: MessageCircle, img: feat8 },
              { t: "Google Maps integrado", i: MapPin, img: feat9 },
              { t: "Enlaces a redes sociales", i: Check, img: feat10 },
              { t: "Galería de fotos", i: ImageIcon, img: feat11 },
              { t: "Catálogo de servicios", i: Check, img: feat6 },
              { t: "Testimonios", i: Check, img: feat7 },
              { t: "Mantenimiento incluido durante el año", i: ShieldCheck, img: feat4 },
              { t: "Preparada para medición digital", i: Search, img: feat2 },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={revealUp}
                className="relative overflow-hidden rounded-2xl border border-bone/10 group flex items-end min-h-[140px] md:min-h-[180px] p-6 hover:border-brand/40 transition-all duration-500 shadow-md hover:shadow-lg"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img src={item.img} alt={item.t} className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/10"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3 w-full">
                  <div className="w-10 h-10 bg-brand/20 backdrop-blur-md rounded-lg flex items-center justify-center text-brand mb-1 group-hover:bg-brand group-hover:text-bone transition-all duration-500">
                    <item.i className="w-5 h-5" />
                  </div>
                  <span className="text-base font-semibold leading-tight text-bone drop-shadow-md">{item.t}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. INVERSIÓN */}
      <section className="py-24 lg:py-32 relative" data-event="pricing_view">
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full max-w-4xl bg-card border border-ink/10 rounded-[2rem] p-8 md:p-16 text-center shadow-soft relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight mb-4 text-ink">
              Inversión del servicio
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
              El desarrollo de tu sitio web profesional tiene una inversión de:
            </motion.p>
            
            <motion.div variants={revealUp} className="mb-8">
              <span className="text-[54px] md:text-[72px] font-display font-bold text-brand tracking-tighter leading-none">
                $6,200 <span className="text-2xl text-ink/50 tracking-normal font-sans font-medium uppercase">mxn</span>
              </span>
            </motion.div>
            
            <motion.p variants={revealUp} className="text-base text-ink/80 font-medium mb-10 bg-ink/5 py-3 px-6 rounded-full inline-block">
              El pago se divide en dos partes: 50% para iniciar el proyecto y 50% al finalizar.
            </motion.p>

            <motion.div variants={revealUp} className="bg-bone/50 border border-brand/20 p-6 rounded-xl max-w-2xl mx-auto mb-10 text-left flex gap-4">
              <ShieldCheck className="w-8 h-8 text-brand flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-ink mb-1">Garantía sin riesgo</h4>
                <p className="text-sm text-ink/70">Antes de iniciar el pago, trabajamos una versión preliminar para que puedas ver la dirección visual de tu sitio. <strong>Si no te gusta esa propuesta inicial, no pagas.</strong></p>
              </div>
            </motion.div>
            
            <motion.div variants={revealUp}>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-base font-semibold px-12 h-14"
                onClick={() => handleWhatsAppClick("cta-price-whatsapp")}
                data-event="whatsapp_click"
                id="cta-price-whatsapp"
              >
                Quiero avanzar con mi sitio web
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. PROCESO */}
      <section className="py-24 lg:py-32 relative border-t border-ink/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight">
              Así trabajamos tu sitio
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={lineDraw}
              className="absolute left-[23px] top-4 bottom-4 w-px bg-ink/10 md:left-1/2 md:-translate-x-1/2 hidden sm:block"
              style={{ originY: 0 }}
            ></motion.div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-12 relative"
            >
              {[
                { s: "01", t: "Revisamos tu negocio", d: "Analizamos tus respuestas, tu giro, tus servicios y la forma correcta de presentar tu empresa." },
                { s: "02", t: "Preparamos una versión preliminar", d: "Creamos una primera propuesta visual para que veas hacia dónde puede ir tu sitio." },
                { s: "03", t: "Iniciamos el desarrollo", d: "Si la propuesta te gusta, avanzamos con el 50% inicial y organizamos la información de tu empresa." },
                { s: "04", t: "Integramos contenido y funciones", d: "Agregamos servicios, contacto, WhatsApp, formulario, ubicación, redes, fotos y demás elementos necesarios." },
                { s: "05", t: "Entregamos tu sitio listo", d: "Al finalizar, se liquida el 50% restante y se entrega el sitio con su dominio y configuración correspondiente." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={revealUp} className={`flex flex-col sm:flex-row gap-6 sm:gap-12 relative ${idx % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"}`}>
                  <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? "pr-12" : "pl-12"}`}></div>
                  <div className="absolute left-0 sm:left-[8px] md:left-1/2 top-0 w-12 h-12 bg-bone border-4 border-ink text-ink rounded-full flex items-center justify-center font-display font-bold z-10 md:-translate-x-1/2 text-sm shadow-sm">
                    {step.s}
                  </div>
                  <div className={`md:w-1/2 pl-16 sm:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <h3 className="font-display font-semibold text-xl mb-2 pt-2">{step.t}</h3>
                    <p className="text-ink/70 leading-relaxed">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PARA QUIÉN ES */}
      <section className="py-24 bg-ink/5 relative border-y border-ink/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[30px] md:text-[38px] leading-tight mb-6">
              Este servicio es para negocios que quieren verse más profesionales
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/70">
              Trabajamos con empresas, negocios locales, clínicas, despachos, constructoras, restaurantes, agencias, talleres, consultorios y servicios profesionales que quieren una presencia digital seria.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto"
          >
            {[
              "Empresas que quieren presentarse mejor",
              "Negocios que necesitan una página para enviar a sus clientes",
              "Servicios que quieren explicar mejor lo que ofrecen",
              "Marcas que necesitan verse más confiables",
              "Locales que quieren facilitar ubicación, contacto y WhatsApp",
              "Empresas que quieren dejar de mandar toda la información manualmente"
            ].map((chip, idx) => (
              <motion.div 
                key={idx}
                variants={revealUp}
                className="bg-card border border-ink/10 px-5 py-3 rounded-full text-sm font-medium text-ink/80 shadow-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-brand" />
                {chip}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. GARANTÍA */}
      <section className="py-24 relative overflow-hidden bg-brand text-bone">
        <div className="noise z-0 opacity-10"></div>
        <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[46px] leading-tight mb-6">
              Primero ves una dirección visual. Después decides.
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg md:text-xl text-bone/90 mb-4 font-medium">
              No te pedimos que avances a ciegas. Creamos una versión preliminar para que puedas ver la propuesta inicial de tu sitio web. Si esa primera dirección no te gusta, no pagas.
            </motion.p>
            <motion.p variants={revealUp} className="text-base text-bone/70">
              La idea es que tengas claridad antes de iniciar el proyecto formalmente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12 text-center"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight">
              Preguntas frecuentes
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealUp}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "¿El precio incluye dominio?", a: "Sí. Incluye dominio .com o .mx, sujeto a disponibilidad." },
                { q: "¿Incluye hosting?", a: "Sí. Incluye hosting por un año." },
                { q: "¿Incluye correo corporativo?", a: "Sí. Incluye correo corporativo con tu dominio." },
                { q: "¿Incluye WhatsApp?", a: "Sí. El sitio puede incluir botón directo a WhatsApp para que tus clientes te contacten fácilmente." },
                { q: "¿Incluye formulario de contacto?", a: "Sí. Integramos formulario para que las personas puedan dejar sus datos o solicitar información." },
                { q: "¿Incluye Google Maps?", a: "Sí. Si tu negocio tiene ubicación física, podemos integrar el mapa para facilitar la visita o contacto." },
                { q: "¿Puedo mostrar fotos o videos?", a: "Sí. Podemos integrar galería de fotos y videos cuando el material esté disponible y sea adecuado para el sitio." },
                { q: "¿Incluye Pixel de Meta?", a: "El sitio queda preparado para herramientas de medición digital. La instalación avanzada de Pixel puede cotizarse aparte si el cliente requiere configuración publicitaria específica." },
                { q: "¿Cuánto tarda?", a: "Podemos trabajar una versión preliminar en menos de 48 horas, dependiendo de la información disponible del negocio." },
                { q: "¿Qué necesito para empezar?", a: "Nombre del negocio, giro, servicios principales, WhatsApp, ubicación, redes sociales, colores de marca si los tienes, fotos y textos disponibles." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-ink/10 rounded-xl px-6 data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5 [&[data-state=open]]:text-brand">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink/70 text-base pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 9. CIERRE */}
      <section className="py-24 lg:py-32 relative bg-ink text-bone overflow-hidden">
        <div className="grid-tech absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl bg-brand/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="container relative z-10 mx-auto px-6 text-center max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[36px] md:text-[52px] leading-tight mb-6">
              Tu empresa puede verse más clara, más confiable y más profesional en internet
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg md:text-xl text-bone/70 mb-10 max-w-2xl mx-auto">
              Ya diste el primer paso dejando tus datos. Ahora el siguiente paso es revisar tu caso y definir cómo debe presentarse tu negocio en una página profesional.
            </motion.p>
            <motion.div variants={revealUp} className="flex flex-col items-center justify-center gap-4">
              <Button 
                variant="brand" 
                size="lg" 
                className="w-full sm:w-auto text-base font-semibold px-12 h-14"
                onClick={() => handleWhatsAppClick("cta-final-whatsapp")}
                data-event="whatsapp_click"
                id="cta-final-whatsapp"
              >
                Quiero avanzar con mi sitio web
              </Button>
              <p className="text-sm text-bone/50 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" />
                Un asesor de Platon Code revisará tu solicitud y te contactará por WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

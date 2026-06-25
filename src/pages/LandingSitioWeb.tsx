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

const WHATSAPP_NUMBER = "529997677024";
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

            <motion.p variants={revealUp} className="mt-4 text-sm text-ink/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand" />
              Ya dejaste tus datos. Un asesor te contactará por WhatsApp.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. POR QUÉ IMPORTA */}
      <section className="py-24 lg:py-32 relative border-t border-ink/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight mb-6">
              Antes de escribirte, el cliente ya te está evaluando
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/70">
              Tu sitio web no es solo una página. Es la primera impresión seria de tu empresa en internet. Ayuda a que el cliente vea tus servicios, tu ubicación, tu forma de trabajo y la manera correcta de contactarte.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Confianza inmediata",
                desc: "Cuando alguien encuentra una página profesional, percibe una empresa más seria, más ordenada y más preparada para atender."
              },
              {
                icon: Search,
                title: "Información clara",
                desc: "Tu cliente puede ver tus servicios, fotos, ubicación, y WhatsApp sin tener que preguntarte todo por mensaje."
              },
              {
                icon: LayoutTemplate,
                title: "Mejor presentación",
                desc: "Un sitio bien diseñado eleva la percepción de tu negocio y hace que tu empresa se vea al nivel de lo que realmente ofrece."
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                variants={cardLift}
                className="bg-card/40 backdrop-blur-sm border border-ink/10 rounded-2xl p-8 hover:bg-card/80 transition-colors duration-500 group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-ink text-bone rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand transition-all duration-500">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{card.title}</h3>
                <p className="text-ink/70 leading-relaxed">{card.desc}</p>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {[
              { t: "Diseño web profesional adaptado a tu marca", i: LayoutTemplate },
              { t: "Versión móvil responsive", i: Smartphone },
              { t: "Dominio .com o .mx sujeto a disponibilidad", i: Globe },
              { t: "Hosting incluido por un año", i: Check },
              { t: "Correo corporativo con tu dominio", i: Mail },
              { t: "Hasta 5 secciones estratégicas", i: Layers },
              { t: "Formulario de contacto", i: Check },
              { t: "Botón directo a WhatsApp", i: MessageCircle },
              { t: "Google Maps integrado", i: MapPin },
              { t: "Enlaces a redes sociales", i: Check },
              { t: "Galería de fotos", i: ImageIcon },
              { t: "Catálogo de servicios", i: Check },
              { t: "Testimonios", i: Check },
              { t: "Mantenimiento incluido durante el año", i: ShieldCheck },
              { t: "Preparada para medición digital", i: Search },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={revealUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-bone/5 border border-bone/10 hover:bg-bone/10 transition-colors"
              >
                <div className="mt-1 flex-shrink-0 text-brand">
                  <item.i className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium leading-relaxed">{item.t}</span>
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

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
  Layers,
  Instagram,
  PenTool,
  Facebook
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
import { SocialStatue } from "@/components/site/SocialStatue";
import statueAthena from "@/assets/statue_athena.png";
import statueApollo from "@/assets/statue_apollo.png";
import statueHermes from "@/assets/statue_hermes.png";
import mockupImg from "@/assets/portfolio_mockup.png";

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
    <h1 className="font-display font-semibold text-ink leading-[1.05] tracking-tight text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-balance mb-5 w-full drop-shadow-sm">
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
      <section className="relative min-h-[100svh] w-full flex items-center lg:items-center overflow-hidden pt-12 pb-16 lg:pt-0 lg:pb-0">
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
          className="absolute lg:right-[-2vw] lg:bottom-0 lg:top-auto lg:translate-y-0 -right-[10%] bottom-0 top-auto opacity-15 lg:opacity-100 lg:h-[85vh] h-[55vh] w-auto object-contain object-bottom z-0"
          style={{
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full mt-10 lg:mt-0">
          {/* Left Text */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0"
          >
            <motion.div variants={revealUp} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6 w-full">
              <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase bg-ink/10 border border-ink/20 px-4 py-1.5 rounded-full text-ink font-semibold shadow-sm backdrop-blur-md">
                Sitio web profesional
              </span>
              <span className="text-xs font-mono tracking-widest uppercase bg-ink/5 border border-ink/10 px-3 py-1 rounded-full text-ink/80 backdrop-blur-sm hidden sm:inline-block">
                Versión preliminar antes de pagar
              </span>
            </motion.div>

            <HeroTitle />

            <motion.p 
              variants={revealUp}
              className="text-base sm:text-lg md:text-xl text-ink/80 max-w-xl text-pretty mb-8 leading-relaxed font-medium bg-bone/40 backdrop-blur-sm p-2 sm:p-0 rounded-lg"
            >
              Los clientes buscan en Google antes de decidir. Si no encuentran una página clara, profesional y bien presentada, la oportunidad puede terminar en manos de otra empresa.
              <br/><br/>
              En <span className="font-bold text-ink">Platon Code</span>, somos una agencia de desarrollo web dedicada a crear sitios web profesionales para que tu empresa se vea más sólida y haga más fácil que el cliente te contacte.
            </motion.p>

            <motion.div variants={revealUp} className="flex flex-col sm:flex-row gap-3 items-center lg:items-start w-full sm:w-auto">
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
            <motion.div variants={revealUp} className="mt-10 w-full max-w-xl bg-white/80 backdrop-blur-md border border-ink/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5">
                <div className="flex flex-col items-center sm:items-start w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 w-full">
                    <span className="bg-brand text-bone text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">Incluido Gratis</span>
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

      {/* 2. INVERSIÓN Y GARANTÍA */}
      <section className="py-20 relative bg-ink/5" data-event="pricing_view">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full max-w-4xl bg-white border-2 border-brand/10 rounded-[2rem] p-6 md:p-12 text-center shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <motion.h2 variants={revealUp} className="font-display font-bold text-[28px] md:text-[42px] leading-tight mb-3 text-ink">
              Inversión del servicio
            </motion.h2>
            <motion.p variants={revealUp} className="text-base md:text-lg text-ink/70 mb-2 max-w-2xl mx-auto">
              El desarrollo completo de tu sitio web profesional tiene una inversión de:
            </motion.p>
            
            <motion.div variants={revealUp} className="mb-8">
              <span className="text-[48px] md:text-[72px] font-display font-black text-brand tracking-tighter leading-none flex items-center justify-center gap-2 drop-shadow-sm">
                $3,600 <span className="text-xl md:text-2xl text-ink/40 tracking-normal font-sans font-semibold uppercase mt-2 md:mt-4">mxn</span>
              </span>
            </motion.div>

            <motion.div variants={revealUp} className="bg-brand/5 border border-brand/20 p-5 md:p-6 rounded-2xl max-w-2xl mx-auto mb-10 text-left flex flex-col sm:flex-row gap-3 sm:gap-4 items-start shadow-sm">
              <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-ink mb-1 text-base md:text-lg">0% de anticipo para empezar</h4>
                <p className="text-sm md:text-base text-ink/80 leading-relaxed">
                  <strong>No pedimos absolutamente nada de anticipo para iniciar.</strong> Te entregamos una primera revisión visual de tu sitio. Si la propuesta te gusta y decides avanzar, entonces empezamos con el 50% de anticipo y el resto al finalizar.
                </p>
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
                Quiero ver una propuesta gratis
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. EJEMPLOS Y PORTAFOLIO */}
      <section className="py-20 relative bg-white overflow-hidden border-t border-ink/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-left"
          >
            <motion.div variants={revealUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink/5 text-ink/70 text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4" /> Diseño responsivo
            </motion.div>
            <motion.h2 variants={revealUp} className="font-display font-bold text-[32px] md:text-[42px] leading-tight mb-6">
              Ejemplos de portafolio y visualización
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/80 mb-6 leading-relaxed">
              Tu sitio web estará totalmente <strong>optimizado y responsivo</strong>. Se verá increíble tanto en celulares como en computadoras de escritorio, garantizando que tus clientes tengan la mejor experiencia al navegar.
            </motion.p>
            <motion.div variants={revealUp} className="flex flex-wrap items-center gap-6 mt-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-[#4285F4] transition-colors" title="Google"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-[#1877F2] transition-colors" title="Facebook"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-[#E4405F] transition-colors" title="Instagram"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </motion.div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealUp}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand/10 blur-[60px] rounded-full z-0"></div>
            <img src={mockupImg} alt="Mockup de Portafolio Web" className="w-full h-auto drop-shadow-2xl rounded-2xl relative z-10" />
          </motion.div>
        </div>
      </section>

      {/* 4. QUÉ INCLUYE */}
      <section id="que-incluye" className="py-20 bg-ink text-bone relative overflow-hidden">
        <div className="grid-tech absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight mb-4">
              ¿Qué incluye tu sitio web profesional?
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={revealUp}
            className="mb-12 max-w-4xl mx-auto bg-card/5 border border-bone/20 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center shadow-lg"
          >
            <div className="bg-brand/20 p-5 rounded-full flex-shrink-0"><Mail className="w-10 h-10 text-brand" /></div>
            <div className="text-left">
              <h3 className="font-bold text-xl md:text-2xl mb-2 text-bone">Correo Corporativo (Evita el Spam)</h3>
              <p className="text-bone/80 text-base md:text-lg leading-relaxed">
                ¿Sabías que si tienes una empresa y mandas correos desde un Gmail o Hotmail, Google los detecta como <strong>SPAM</strong>? 
                Al incluir un correo corporativo (ej. <em>contacto@tuempresa.com</em>), generas presencia profesional y aseguras que tus presupuestos y mensajes sí lleguen a la bandeja principal de tus clientes.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { t: "Diseño web adaptado a tu marca", i: LayoutTemplate },
              { t: "Dominio .com o .mx", i: Globe },
              { t: "Hosting por un año", i: Check },
              { t: "Formulario de contacto", i: PenTool },
              { t: "Botón directo a WhatsApp", i: MessageCircle },
              { t: "Google Maps integrado", i: MapPin },
              { t: "Integración de Redes (FB, IG)", i: Facebook },
              { t: "Mantenimiento incluido", i: ShieldCheck }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={revealUp}
                className="relative overflow-hidden rounded-2xl border border-bone/10 bg-bone/5 flex items-center gap-4 p-5 hover:border-brand/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center text-brand flex-shrink-0">
                  <item.i className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold leading-tight text-bone">{item.t}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PROCESO */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-semibold text-[32px] md:text-[42px] leading-tight">
              Así trabajamos tu sitio
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
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
              className="space-y-10 relative"
            >
              {[
                { s: "01", t: "Primera revisión visual", d: "Creamos una propuesta sin anticipo para que veas la dirección de diseño." },
                { s: "02", t: "Iniciamos desarrollo (50%)", d: "Si apruebas el diseño, arrancamos formalmente el proyecto." },
                { s: "03", t: "Entrega y publicación", d: "Finalizamos detalles, liquidas el 50% restante y lanzamos tu página web." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={revealUp} className={`flex flex-col sm:flex-row gap-6 sm:gap-12 relative ${idx % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"}`}>
                  <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? "pr-12" : "pl-12"}`}></div>
                  <div className="absolute left-0 sm:left-[8px] md:left-1/2 top-0 w-10 h-10 md:w-12 md:h-12 bg-bone border-[3px] md:border-4 border-ink text-ink rounded-full flex items-center justify-center font-display font-bold z-10 md:-translate-x-1/2 text-xs md:text-sm shadow-sm mt-1 md:mt-0">
                    {step.s}
                  </div>
                  <div className={`md:w-1/2 pl-14 sm:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <h3 className="font-display font-semibold text-xl mb-1 pt-2">{step.t}</h3>
                    <p className="text-ink/70 leading-relaxed text-sm md:text-base">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 relative bg-ink/5 border-t border-ink/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-10 text-center"
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
                { q: "¿Tengo que pagar un anticipo antes de ver el diseño?", a: "No. Te entregamos una primera revisión visual sin costo. Si te gusta, empezamos con el 50%." },
                { q: "¿El precio incluye dominio y hosting?", a: "Sí. Incluye dominio .com o .mx y hosting por el primer año." },
                { q: "¿Incluye correo corporativo?", a: "Sí, fundamental para evitar que tus correos lleguen como spam a tus clientes." },
                { q: "¿Mi página se verá bien en celulares?", a: "Totalmente. El diseño es 100% responsivo y optimizado para móviles y computadoras." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-ink/10 rounded-xl px-6 data-[state=open]:shadow-sm transition-all">
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

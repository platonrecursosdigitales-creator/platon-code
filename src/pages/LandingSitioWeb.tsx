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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  easePremium,
  revealUp,
  staggerContainer,
  cardLift,
  lineDraw
} from "@/lib/motion";
import hostingerIcon from "@/assets/icons/hostinger.svg";
import mapsIcon from "@/assets/icons/maps.svg";
import gmailIcon from "@/assets/icons/gmail.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import statueImg from "@/assets/imagenlandding.png";
import { SocialStatue } from "@/components/site/SocialStatue";
import { SocialStatue } from "@/components/site/SocialStatue";
import statueAthena from "@/assets/statue_athena.png";
import statueApollo from "@/assets/statue_apollo.png";
import statueHermes from "@/assets/statue_hermes.png";
import portfolioMedina from "@/assets/portfolio_medina_real.png";
import portfolioCaballero from "@/assets/portfolio_caballero_real.png";
import portfolioSolec from "@/assets/portfolio_solec_real.png";
import portfolioDental from "@/assets/portfolio_dental_real.png";
import { ExternalLink } from "lucide-react";
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
        
        {/* Network & Social Icons Behind Statue */}
        <SocialStatue />

        {/* Statue Image - Desktop Right, Mobile Bottom */}
        <motion.img
          src={statueImg}
          alt="Platon Code Profesional"
          draggable={false}
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          animate={{ opacity: 0.95, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: easePremium, delay: 0.2 }}
          className="absolute lg:right-[-2vw] lg:bottom-0 lg:top-auto lg:translate-y-0 -right-[10%] bottom-0 top-auto opacity-100 lg:opacity-100 lg:h-[85vh] h-[55vh] w-auto object-contain object-bottom z-0"
          style={{
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full mt-10 lg:mt-0 pb-[65vh] lg:pb-0">
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
                $3,600 <span className="text-xl md:text-2xl text-ink/40 tracking-normal  font-semibold uppercase mt-2 md:mt-4">mxn</span>
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
      <section className="py-20 relative bg-bone overflow-hidden border-t border-ink/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={revealUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
              <LayoutTemplate className="w-4 h-4" /> Casos de Éxito
            </motion.div>
            <motion.h2 variants={revealUp} className="font-display font-bold text-[32px] md:text-[42px] leading-tight mb-6 text-ink">
              Nuestro Portafolio de Clientes
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/80 leading-relaxed">
              Conoce algunos de los proyectos que hemos diseñado para impulsar el éxito de empresas y profesionales en internet.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dr Medina */}
            <motion.a 
              href="https://www.drgilbertomedina.com/"
              target="_blank"
              rel="noopener noreferrer"
              variants={revealUp}
              className="group relative bg-white rounded-3xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="absolute top-4 left-4 z-20 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                +5 años con nosotros
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioMedina} alt="Dr. Gilberto Medina" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-display text-ink mb-2 group-hover:text-brand transition-colors">Dr. Gil Medina Flores</h3>
                <p className="text-ink/60 font-medium mb-4">Cirugía Plástica y Estética</p>
                <p className="text-sm text-ink/70 line-clamp-2">Sitio web premium con diseño elegante y moderno, optimizado para transmitir confianza y lujo en el sector médico estético.</p>
              </div>
            </motion.a>

            {/* Dra Caballero */}
            <motion.a 
              href="https://dra.caballero.mx/"
              target="_blank"
              rel="noopener noreferrer"
              variants={revealUp}
              className="group relative bg-white rounded-3xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="absolute top-4 left-4 z-20 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                +3 años con nosotros
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioCaballero} alt="Dra. Alaide Caballero" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-display text-ink mb-2 group-hover:text-brand transition-colors">Dra. Alaide Caballero</h3>
                <p className="text-ink/60 font-medium mb-4">Otorrinolaringología y Rinoplastia</p>
                <p className="text-sm text-ink/70 line-clamp-2">Plataforma médica limpia y profesional con enfoque en procedimientos faciales, destacando credenciales y galería de resultados.</p>
              </div>
            </motion.a>

            {/* Constructora Solec */}
            <motion.a 
              href="https://www.constructorasolecmex.com/"
              target="_blank"
              rel="noopener noreferrer"
              variants={revealUp}
              className="group relative bg-white rounded-3xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="absolute top-4 left-4 z-20 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                +2 años con nosotros
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioSolec} alt="Constructora Solec Mex" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-display text-ink mb-2 group-hover:text-brand transition-colors">Constructora Solec Mex</h3>
                <p className="text-ink/60 font-medium mb-4">Ingeniería y Construcción Pesada</p>
                <p className="text-sm text-ink/70 line-clamp-2">Diseño corporativo industrial, enfocado en mostrar proyectos a gran escala y solidez empresarial a nivel nacional.</p>
              </div>
            </motion.a>

            {/* Dental Solutions */}
            <motion.a 
              href="https://dentalsolutionsirapuato.com/"
              target="_blank"
              rel="noopener noreferrer"
              variants={revealUp}
              className="group relative bg-white rounded-3xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="absolute top-4 left-4 z-20 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                1 año con nosotros
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioDental} alt="Dental Solutions" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-display text-ink mb-2 group-hover:text-brand transition-colors">Dental Solutions</h3>
                <p className="text-ink/60 font-medium mb-4">Clínica Dental Especializada</p>
                <p className="text-sm text-ink/70 line-clamp-2">Sitio web cálido y amigable que transmite tranquilidad a los pacientes, con un diseño moderno y enfocado en la atención rápida.</p>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* 4. TABS DE DETALLES TÉCNICOS Y LEGALES EN FORMATO DOCUMENTO PDF */}
      <section id="que-incluye" className="py-20 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-ink/5 relative overflow-hidden mb-20">
             {/* Estilo Documento / Hoja Membretada */}
             <div className="h-2 w-full bg-brand"></div>
             <div className="p-6 md:p-12 relative z-10">
               <div className="text-center border-b border-ink/10 pb-8 mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">Condiciones de Servicio y Entregables</h2>
                  <p className=" text-sm text-ink/60 tracking-widest uppercase">Platon Code - $3,600 MXN</p>
               </div>

               <Tabs defaultValue="diseno" className="w-full relative z-10 ">
                <TabsList className="flex flex-wrap md:grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-bone rounded-lg mb-8 gap-1">
                  <TabsTrigger value="diseno" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">1. Entregables</TabsTrigger>
                  <TabsTrigger value="hosting" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">2. Dominio/Hosting</TabsTrigger>
                  <TabsTrigger value="optimizacion" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">3. Optimización</TabsTrigger>
                  <TabsTrigger value="beneficios" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">4. Beneficios</TabsTrigger>
                </TabsList>
                <div className="p-2 sm:p-4">
                  <TabsContent value="diseno" className="space-y-8 mt-0 animate-in fade-in">
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-display font-bold text-ink mb-2">Sitio web de hasta 4 secciones</h3>
                      <p className="text-ink/80 text-sm leading-relaxed mb-1">El cliente puede elegir las secciones que necesite, por ejemplo: Inicio, Nosotros, Servicios, Proyectos, Galería, Preguntas frecuentes, Contacto o Ubicación.</p>
                      <p className="text-ink/50 text-xs italic">La distribución se define de acuerdo con las necesidades de cada empresa.</p>
                    </div>
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-display font-bold text-ink mb-3">Diseño profesional y personalizado</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-ink/80 text-sm leading-relaxed">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Diseño adaptado a la identidad corporativa.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Diseño 100% responsivo (Mobile First).</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Integración de su logotipo oficial.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Integración de colores, fotos y textos.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Botones flotantes de WhatsApp y Redes.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Formulario de contacto y Google Maps.</li>
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="hosting" className="space-y-8 mt-0 animate-in fade-in">
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-display font-bold text-ink mb-2">Dominio Registrado (Primer Año)</h3>
                      <p className="text-ink/80 text-sm leading-relaxed">Se incluye el registro de un dominio disponible con extensión <strong>.com</strong>, <strong>.com.mx</strong> o <strong>.mx</strong>, sujeto a disponibilidad y precio regular del registrador.</p>
                    </div>
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-display font-bold text-ink mb-2">Hosting y Certificado SSL (Primer Año)</h3>
                      <p className="text-ink/80 text-sm leading-relaxed">El alojamiento web de alta velocidad está incluido sin costo adicional mientras el sitio permanezca administrado por Platon Code. Incluye cifrado SSL de seguridad.</p>
                    </div>
                    <div className="bg-brand/5 p-5 rounded-lg border border-brand/10">
                      <h3 className="text-base font-display font-bold text-brand mb-2 flex items-center gap-2"><Mail className="w-4 h-4"/> Correo Corporativo Incluido (1er año)</h3>
                      <p className="text-ink/80 text-sm mb-2">Se incluye una cuenta de correo profesional con el dominio de la empresa (ej. <em>contacto@tuempresa.com</em>).</p>
                      <p className="text-xs text-ink/60 italic leading-relaxed">Nota de Configuración: El cliente deberá proporcionar obligatoriamente una cuenta de Gmail activa. Esta cuenta se utilizará para accesos, recuperación, envío de información y administración del servicio.</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="optimizacion" className="space-y-6 mt-0 animate-in fade-in">
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-display font-bold text-ink mb-4">Protocolos de Optimización Técnica</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-ink/80 text-sm leading-relaxed">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Optimización de velocidad y visualización.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Configuración básica de SEO (Buscadores).</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Preparación para indexación en Google.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Arquitectura compatible con Ads (Meta/Google).</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> Optimización de CTAs y embudos de contacto.</li>
                      </ul>
                      <div className="mt-6 pt-4 border-t border-ink/10">
                         <p className="text-xs text-ink/50">* Cláusula legal: La optimización técnica no garantiza una posición orgánica específica en Google ni incluye la administración mensual de campañas publicitarias de pago.</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="beneficios" className="space-y-6 mt-0 animate-in fade-in">
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-display font-bold text-ink mb-4">Beneficios Corporativos Exclusivos</h3>
                      <ul className="space-y-3 text-ink/80 text-sm leading-relaxed">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> <strong>Atención Prioritaria:</strong> Acceso directo a nuestro equipo de trabajo para soporte.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> <strong>Descuentos Publicitarios:</strong> Tarifas preferenciales en servicios de pauta y futuras campañas.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> <strong>Lealtad Comercial:</strong> Precios preferenciales en futuros proyectos de la empresa.</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5"/> <strong>Asesoría Integral:</strong> Orientación básica para utilizar y potenciar el sitio web.</li>
                      </ul>
                    </div>
                  </TabsContent>
                </div>
               </Tabs>

               <div className="mt-12 pt-8 border-t-2 border-dashed border-ink/10">
                  <h2 className="font-display text-2xl font-bold text-ink mb-6 text-center">Anexo: Mantenimiento y Renovaciones</h2>
                  <Accordion type="single" collapsible className="w-full space-y-3">
                     <AccordionItem value="item-1" className="bg-bone/30 border border-ink/10 rounded-lg px-4 sm:px-6 data-[state=open]:shadow-sm transition-all">
                       <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg hover:no-underline py-4 [&[data-state=open]]:text-brand">
                         Mantenimiento incluido (Primer Año)
                       </AccordionTrigger>
                       <AccordionContent className="text-ink/80 text-sm sm:text-base pb-5 space-y-4 ">
                         <p>Durante los primeros 12 meses, el cliente podrá solicitar actualizaciones relacionadas con la información existente del sitio.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-md border border-green-100 shadow-sm">
                               <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2"><Check className="w-4 h-4"/> SÍ INCLUYE:</h4>
                               <ul className="text-sm space-y-2">
                                 <li>• Cambio de imágenes.</li>
                                 <li>• Actualización de teléfonos, dirección u horarios.</li>
                                 <li>• Corrección o sustitución de textos.</li>
                                 <li>• Actualización de servicios.</li>
                                 <li>• Cambio de enlaces y redes sociales.</li>
                                 <li>• Ajustes menores de colores.</li>
                                 <li>• Modificaciones básicas dentro de las 4 secciones.</li>
                               </ul>
                            </div>
                            <div className="bg-white p-4 rounded-md border border-red-100 shadow-sm">
                               <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> NO INCLUYE:</h4>
                               <ul className="text-sm space-y-2">
                                 <li>• Rediseño completo del sitio.</li>
                                 <li>• Creación de secciones adicionales.</li>
                                 <li>• Tiendas en línea o sistemas de reservaciones.</li>
                                 <li>• Paneles administrativos o de usuarios.</li>
                                 <li>• Integraciones avanzadas o automatizaciones.</li>
                                 <li>• Funciones desarrolladas a la medida.</li>
                                 <li>• Creación constante de contenido o campañas.</li>
                               </ul>
                            </div>
                         </div>
                         <p className="text-xs text-ink/50 mt-2 font-mono">* Los trabajos adicionales se cotizan de manera independiente.</p>
                       </AccordionContent>
                     </AccordionItem>

                     <AccordionItem value="item-2" className="bg-bone/30 border border-ink/10 rounded-lg px-4 sm:px-6 data-[state=open]:shadow-sm transition-all">
                       <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg hover:no-underline py-4 [&[data-state=open]]:text-brand">
                         Costos y Renovaciones (Después del 1er Año)
                       </AccordionTrigger>
                       <AccordionContent className="text-ink/80 text-sm sm:text-base pb-5 space-y-4 ">
                         <p>El desarrollo inicial del sitio web es un pago único. Después del primer año solamente se cubren las renovaciones tecnológicas necesarias para mantener la presencia online activa.</p>
                         <ul className="space-y-4">
                            <li className="flex gap-3 bg-white p-3 rounded border border-ink/5">
                               <Globe className="w-5 h-5 text-brand shrink-0"/>
                               <div>
                                  <strong className="text-ink block mb-1">Renovación del Dominio:</strong> 
                                  <span className="text-sm">Entre $500 y $1,200 MXN al año, dependiendo de la extensión (.com, .mx), disponibilidad y fluctuaciones de precio del registrador internacional.</span>
                               </div>
                            </li>
                            <li className="flex gap-3 bg-white p-3 rounded border border-ink/5">
                               <Mail className="w-5 h-5 text-brand shrink-0"/>
                               <div>
                                  <strong className="text-ink block mb-1">Correo Corporativo (Renovación Opcional):</strong> 
                                  <span className="text-sm">$100 MXN mensuales o $1,200 MXN mediante pago anual. Si el cliente decide no renovarlo, la página web seguirá 100% funcional, únicamente se desactivará la bandeja de correo profesional.</span>
                               </div>
                            </li>
                            <li className="flex gap-3 bg-white p-3 rounded border border-ink/5">
                               <CheckCircle2 className="w-5 h-5 text-brand shrink-0"/>
                               <div>
                                  <strong className="text-ink block mb-1">Hosting Avanzado:</strong> 
                                  <span className="text-sm">El servicio de servidor y hosting continúa incluido sin costo adicional mientras el sitio permanezca bajo la administración integral de Platon Code.</span>
                               </div>
                            </li>
                         </ul>
                       </AccordionContent>
                     </AccordionItem>

                     <AccordionItem value="item-3" className="bg-bone/30 border border-ink/10 rounded-lg px-4 sm:px-6 data-[state=open]:shadow-sm transition-all">
                       <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg hover:no-underline py-4 [&[data-state=open]]:text-brand">
                         Tiempos de Entrega Formales
                       </AccordionTrigger>
                       <AccordionContent className="text-ink/80 text-sm sm:text-base pb-5 ">
                         <p className="font-bold text-ink text-lg mb-2">Entrega estimada en 4 días hábiles.</p>
                         <p className="mb-2 leading-relaxed">El tiempo de entrega oficial de los 4 días comienza a correr exclusivamente cuando el cliente proporciona <strong>toda la información necesaria</strong> detallada en los requisitos iniciales (logotipo, imágenes, textos, datos, y accesos).</p>
                         <p className="text-xs text-red-500/80 bg-red-50 p-2 rounded">Nota: Los retrasos en la entrega de información por parte del cliente modificarán consecuentemente la fecha final de publicación.</p>
                       </AccordionContent>
                     </AccordionItem>
                  </Accordion>
               </div>
             </div>
             <img src={statueAthena} className="absolute right-[-10%] top-[10%] h-[120%] opacity-[0.03] object-contain pointer-events-none z-0 grayscale" alt="" />
          </div>
        </div>
      </section>

      {/* 5. CÓMO COMENZAR Y CIERRE */}
      <section className="py-24 relative bg-ink text-bone overflow-hidden">
        {/* Background Effects */}
        <div className="grid-tech absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl bg-brand/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <img src={statueApollo} className="absolute left-[-5%] top-[10%] h-[80%] opacity-20 object-contain pointer-events-none z-0" alt="" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-bold text-[36px] md:text-[52px] leading-tight mb-6">
              Tú encárgate de tu negocio.<br/>Nosotros de tu sitio web.
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg md:text-xl text-bone/70 max-w-2xl mx-auto">
              Para comenzar tu proyecto, envíanos la siguiente información por WhatsApp y nosotros nos encargaremos de todo para que no te calientes la cabeza.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={revealUp}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl mb-12 flex flex-col md:flex-row gap-8"
          >
             <div className="flex-1">
                <h3 className="text-xl font-bold text-brand mb-4 flex items-center gap-2"><Layers className="w-5 h-5"/> Datos del Cliente</h3>
                <ul className="space-y-2 text-sm sm:text-base text-bone/80">
                  <li>1. Nombre completo.</li>
                  <li>2. Nombre de la empresa o negocio.</li>
                  <li>3. Número de WhatsApp.</li>
                  <li>4. Cuenta de Gmail <span className="text-brand">(obligatoria)</span>.</li>
                  <li>5. Giro de la empresa.</li>
                  <li>6. Ciudad y estado.</li>
                  <li>7. Dirección del negocio (si aplica).</li>
                  <li>8. Enlaces de redes sociales.</li>
                </ul>
             </div>
             <div className="flex-1">
                <h3 className="text-xl font-bold text-brand mb-4 flex items-center gap-2"><Globe className="w-5 h-5"/> Información del Sitio</h3>
                <ul className="space-y-2 text-sm sm:text-base text-bone/80">
                  <li>9. Objetivo del sitio y productos/servicios.</li>
                  <li>10. ¿Qué 4 secciones deseas incluir?</li>
                  <li>11. ¿Cuentas con logotipo, fotos y textos?</li>
                  <li>12. ¿Tienes un sitio web de referencia?</li>
                  <li>13. Colores deseados.</li>
                  <li>14. Dominio deseado (ej. miempresa.com).</li>
                  <li>15. Correo deseado (ej. contacto@miempresa.com).</li>
                  <li>16. ¿Ocupas WhatsApp, mapa o formularios?</li>
                </ul>
             </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={revealUp}
            className="text-center bg-brand/10 border border-brand/20 p-6 sm:p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">Confirmación Obligatoria</h3>
            <p className="text-bone/70 text-sm sm:text-base italic mb-8 max-w-2xl mx-auto leading-relaxed">
              “Confirmo que revisé el alcance del servicio. Entiendo que la inversión inicial es de $3,600 MXN, que el sitio incluye hasta cuatro secciones y que después del primer año el dominio y el correo corporativo requieren renovación. También entiendo que las funciones adicionales o los rediseños completos se cotizan por separado.”
            </p>
            
            <Button 
              variant="brand" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg font-bold px-8 sm:px-12 h-14 sm:h-16 shadow-xl shadow-brand/20"
              onClick={() => handleWhatsAppClick("cta-final-whatsapp")}
              data-event="whatsapp_click"
              id="cta-final-whatsapp"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2"/> Quiero empezar ya
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

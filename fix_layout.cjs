const fs = require('fs');
const path = require('path');

const landingPath = path.join(__dirname, 'src', 'pages', 'LandingSitioWeb.tsx');
let landing = fs.readFileSync(landingPath, 'utf-8');

// Ensure Tabs is imported
if (!landing.includes('TabsContent')) {
  landing = landing.replace('import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";', 'import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";\nimport { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";');
}

// Ensure new icons are imported
if (!landing.includes('hostingerIcon')) {
  const imports = `import hostingerIcon from "@/assets/icons/hostinger.svg";
import mapsIcon from "@/assets/icons/maps.svg";
import gmailIcon from "@/assets/icons/gmail.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
`;
  landing = landing.replace('import statueImg from "@/assets/imagenlandding.png";', imports + 'import statueImg from "@/assets/imagenlandding.png";');
}

// Ensure real screenshots are imported
if (!landing.includes('portfolio_medina_real')) {
  landing = landing.replace('import portfolioMedina from "@/assets/portfolio_medina.png";', 'import portfolioMedina from "@/assets/portfolio_medina_real.png";');
  landing = landing.replace('import portfolioCaballero from "@/assets/portfolio_caballero.png";', 'import portfolioCaballero from "@/assets/portfolio_caballero_real.png";');
  landing = landing.replace('import portfolioSolec from "@/assets/portfolio_solec.png";', 'import portfolioSolec from "@/assets/portfolio_solec_real.png";');
  landing = landing.replace('import portfolioDental from "@/assets/portfolio_dental.png";', 'import portfolioDental from "@/assets/portfolio_dental_real.png";');
}

// Slice off everything from 3. EJEMPLOS Y PORTAFOLIO
const sliceIndex = landing.indexOf('{/* 3. EJEMPLOS Y PORTAFOLIO */}');
if (sliceIndex !== -1) {
  landing = landing.substring(0, sliceIndex);
}

const newSections = `
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
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-2">Condiciones de Servicio y Entregables</h2>
                  <p className="font-sans text-sm text-ink/60 tracking-widest uppercase">Platon Code - $3,600 MXN</p>
               </div>

               <Tabs defaultValue="diseno" className="w-full relative z-10 font-sans">
                <TabsList className="flex flex-wrap md:grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-bone rounded-lg mb-8 gap-1">
                  <TabsTrigger value="diseno" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">1. Entregables</TabsTrigger>
                  <TabsTrigger value="hosting" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">2. Dominio/Hosting</TabsTrigger>
                  <TabsTrigger value="optimizacion" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">3. Optimización</TabsTrigger>
                  <TabsTrigger value="beneficios" className="rounded-md py-2 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm font-semibold">4. Beneficios</TabsTrigger>
                </TabsList>
                <div className="p-2 sm:p-4">
                  <TabsContent value="diseno" className="space-y-8 mt-0 animate-in fade-in">
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-serif font-bold text-ink mb-2">Sitio web de hasta 4 secciones</h3>
                      <p className="text-ink/80 text-sm leading-relaxed mb-1">El cliente puede elegir las secciones que necesite, por ejemplo: Inicio, Nosotros, Servicios, Proyectos, Galería, Preguntas frecuentes, Contacto o Ubicación.</p>
                      <p className="text-ink/50 text-xs italic">La distribución se define de acuerdo con las necesidades de cada empresa.</p>
                    </div>
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-serif font-bold text-ink mb-3">Diseño profesional y personalizado</h3>
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
                      <h3 className="text-lg font-serif font-bold text-ink mb-2">Dominio Registrado (Primer Año)</h3>
                      <p className="text-ink/80 text-sm leading-relaxed">Se incluye el registro de un dominio disponible con extensión <strong>.com</strong>, <strong>.com.mx</strong> o <strong>.mx</strong>, sujeto a disponibilidad y precio regular del registrador.</p>
                    </div>
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-serif font-bold text-ink mb-2">Hosting y Certificado SSL (Primer Año)</h3>
                      <p className="text-ink/80 text-sm leading-relaxed">El alojamiento web de alta velocidad está incluido sin costo adicional mientras el sitio permanezca administrado por Platon Code. Incluye cifrado SSL de seguridad.</p>
                    </div>
                    <div className="bg-brand/5 p-5 rounded-lg border border-brand/10">
                      <h3 className="text-base font-serif font-bold text-brand mb-2 flex items-center gap-2"><Mail className="w-4 h-4"/> Correo Corporativo Incluido (1er año)</h3>
                      <p className="text-ink/80 text-sm mb-2">Se incluye una cuenta de correo profesional con el dominio de la empresa (ej. <em>contacto@tuempresa.com</em>).</p>
                      <p className="text-xs text-ink/60 italic leading-relaxed">Nota de Configuración: El cliente deberá proporcionar obligatoriamente una cuenta de Gmail activa. Esta cuenta se utilizará para accesos, recuperación, envío de información y administración del servicio.</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="optimizacion" className="space-y-6 mt-0 animate-in fade-in">
                    <div className="border-l-4 border-brand pl-4">
                      <h3 className="text-lg font-serif font-bold text-ink mb-4">Protocolos de Optimización Técnica</h3>
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
                      <h3 className="text-lg font-serif font-bold text-ink mb-4">Beneficios Corporativos Exclusivos</h3>
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
                  <h2 className="font-serif text-2xl font-bold text-ink mb-6 text-center">Anexo: Mantenimiento y Renovaciones</h2>
                  <Accordion type="single" collapsible className="w-full space-y-3">
                     <AccordionItem value="item-1" className="bg-bone/30 border border-ink/10 rounded-lg px-4 sm:px-6 data-[state=open]:shadow-sm transition-all">
                       <AccordionTrigger className="text-left font-serif font-semibold text-base sm:text-lg hover:no-underline py-4 [&[data-state=open]]:text-brand">
                         Mantenimiento incluido (Primer Año)
                       </AccordionTrigger>
                       <AccordionContent className="text-ink/80 text-sm sm:text-base pb-5 space-y-4 font-sans">
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
                       <AccordionTrigger className="text-left font-serif font-semibold text-base sm:text-lg hover:no-underline py-4 [&[data-state=open]]:text-brand">
                         Costos y Renovaciones (Después del 1er Año)
                       </AccordionTrigger>
                       <AccordionContent className="text-ink/80 text-sm sm:text-base pb-5 space-y-4 font-sans">
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
                       <AccordionTrigger className="text-left font-serif font-semibold text-base sm:text-lg hover:no-underline py-4 [&[data-state=open]]:text-brand">
                         Tiempos de Entrega Formales
                       </AccordionTrigger>
                       <AccordionContent className="text-ink/80 text-sm sm:text-base pb-5 font-sans">
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
`;

landing += newSections;

fs.writeFileSync(landingPath, landing, 'utf-8');
console.log('Fixed layout');

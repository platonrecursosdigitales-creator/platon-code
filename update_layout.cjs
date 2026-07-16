const fs = require('fs');
const path = require('path');

const landingPath = path.join(__dirname, 'src', 'pages', 'LandingSitioWeb.tsx');
let landing = fs.readFileSync(landingPath, 'utf-8');

// Update imports for real screenshots
landing = landing.replace('import portfolioMedina from "@/assets/portfolio_medina.png";', 'import portfolioMedina from "@/assets/portfolio_medina_real.png";');
landing = landing.replace('import portfolioCaballero from "@/assets/portfolio_caballero.png";', 'import portfolioCaballero from "@/assets/portfolio_caballero_real.png";');
landing = landing.replace('import portfolioSolec from "@/assets/portfolio_solec.png";', 'import portfolioSolec from "@/assets/portfolio_solec_real.png";');
landing = landing.replace('import portfolioDental from "@/assets/portfolio_dental.png";', 'import portfolioDental from "@/assets/portfolio_dental_real.png";');

// Portfolio rewrite with Badges
const portfolioRegex = /\{\/\* 3\. EJEMPLOS Y PORTAFOLIO \*\/\}[\s\S]*?(?=\{\/\* 3\. QU)/;
const newPortfolio = `{/* 3. EJEMPLOS Y PORTAFOLIO */}
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
              <LayoutTemplate className="w-4 h-4" /> Casos de xito
            </motion.div>
            <motion.h2 variants={revealUp} className="font-display font-bold text-[32px] md:text-[42px] leading-tight mb-6 text-ink">
              Nuestro Portafolio de Clientes
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/80 leading-relaxed">
              Conoce algunos de los proyectos que hemos diseado para impulsar el xito de empresas y profesionales en internet.
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
                <p className="text-ink/60 font-medium mb-4">Ciruga Plstica y Esttica</p>
                <p className="text-sm text-ink/70 line-clamp-2">Sitio web premium con diseo elegante y moderno, optimizado para transmitir confianza y lujo en el sector mdico esttico.</p>
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
                <p className="text-ink/60 font-medium mb-4">Otorrinolaringologa y Rinoplastia</p>
                <p className="text-sm text-ink/70 line-clamp-2">Plataforma mdica limpia y profesional con enfoque en procedimientos faciales, destacando credenciales y galera de resultados.</p>
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
                <p className="text-ink/60 font-medium mb-4">Ingeniera y Construccin Pesada</p>
                <p className="text-sm text-ink/70 line-clamp-2">Diseo corporativo industrial, enfocado en mostrar proyectos a gran escala y solidez empresarial a nivel nacional.</p>
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
                <p className="text-ink/60 font-medium mb-4">Clnica Dental Especializada</p>
                <p className="text-sm text-ink/70 line-clamp-2">Sitio web clido y amigable que transmite tranquilidad a los pacientes, con un diseo moderno y enfocado en la atencin rpida.</p>
              </div>
            </motion.a>

          </div>
        </div>
      </section>
`;
landing = landing.replace(portfolioRegex, newPortfolio + '\n      ');

const documentRegex = /\{\/\* TABS DE DETALLES TCNICOS \*\/\}[\s\S]*?(?=\{\/\* 4\. C)/;
const newDocument = `{/* TABS DE DETALLES TCNICOS Y LEGALES EN FORMATO DOCUMENTO PDF */}
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
`;
landing = landing.replace(documentRegex, newDocument + '\n      ');

fs.writeFileSync(landingPath, landing, 'utf-8');
console.log('Replaced layout with Document format and real portfolio');

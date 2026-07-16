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

const newSections = `
      {/* 3. QU INCLUYE TU INVERSIN */}
      <section id="que-incluye" className="py-24 relative bg-white overflow-hidden border-t border-ink/5">
        {/* Background elements */}
        <div className="absolute right-[-10vw] top-0 w-[40vw] h-[40vw] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute left-[-10vw] bottom-0 w-[50vw] h-[50vw] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="container relative z-10 mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={revealUp} className="font-display font-bold text-[32px] md:text-[42px] leading-tight mb-6 text-ink">
              ¿Qué incluye tu inversión de $3,600 MXN?
            </motion.h2>
            <motion.p variants={revealUp} className="text-lg text-ink/80 leading-relaxed">
              El pago incluye el diseño, desarrollo y publicación de un sitio web profesional para tu empresa, además de los servicios necesarios para mantenerlo funcionando durante el primer año.
            </motion.p>
          </motion.div>

          {/* Grid de iconos vibrantes */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all">
               <img src={hostingerIcon} alt="Hostinger" className="h-10 mb-4" />
               <span className="font-semibold text-sm text-ink">Hosting 1 Año</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all">
               <img src={gmailIcon} alt="Gmail" className="h-10 mb-4" />
               <span className="font-semibold text-sm text-ink">Correo Corporativo</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all">
               <Globe className="w-10 h-10 text-sky-500 mb-4" />
               <span className="font-semibold text-sm text-ink">Dominio .com / .mx</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all">
               <img src={mapsIcon} alt="Google Maps" className="h-10 mb-4" />
               <span className="font-semibold text-sm text-ink">Integración de Mapa</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all">
               <div className="flex gap-2 mb-4">
                  <img src={facebookIcon} alt="Facebook" className="h-10" />
                  <img src={instagramIcon} alt="Instagram" className="h-10" />
               </div>
               <span className="font-semibold text-sm text-ink">Integración de Redes</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all">
               <MessageCircle className="w-10 h-10 text-green-500 mb-4" />
               <span className="font-semibold text-sm text-ink">Botón WhatsApp</span>
            </div>
          </motion.div>

          {/* TABS DE DETALLES TCNICOS */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-2 sm:p-4 shadow-xl border border-brand/10 mb-20 relative overflow-hidden">
             <img src={statueAthena} className="absolute right-[-10%] bottom-0 h-full opacity-10 object-contain pointer-events-none" alt="" />
             <Tabs defaultValue="diseno" className="w-full relative z-10">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-ink/5 rounded-2xl mb-6">
                <TabsTrigger value="diseno" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm">Diseño y Estructura</TabsTrigger>
                <TabsTrigger value="hosting" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm">Dominio y Hosting</TabsTrigger>
                <TabsTrigger value="optimizacion" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm">Optimización Técnica</TabsTrigger>
                <TabsTrigger value="beneficios" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm text-xs sm:text-sm">Beneficios Adicionales</TabsTrigger>
              </TabsList>
              <div className="p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                <TabsContent value="diseno" className="space-y-6 mt-0">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Sitio web de hasta 4 secciones</h3>
                    <p className="text-ink/70 mb-3">El cliente puede elegir las secciones que necesite, por ejemplo: Inicio, Nosotros, Servicios, Proyectos, Galería, Preguntas frecuentes, Contacto o Ubicación.</p>
                    <p className="text-ink/70 text-sm italic">La distribución se define de acuerdo con las necesidades de cada empresa.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Diseño profesional y personalizado</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-ink/80">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Diseño adaptado a la identidad de la empresa.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Diseño responsivo para celulares, tabletas y computadoras.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Colocación y adaptación del logotipo proporcionado.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Integración de colores, imágenes, textos y datos.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Botones de WhatsApp y redes sociales.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Formulario de contacto y mapa de ubicación.</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="hosting" className="space-y-6 mt-0">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Dominio incluido durante el primer año</h3>
                    <p className="text-ink/70 mb-3">Se incluye el registro de un dominio disponible con extensión <strong>.com</strong>, <strong>.com.mx</strong> o <strong>.mx</strong>, sujeto a disponibilidad y precio regular.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Hosting incluido y Certificado SSL</h3>
                    <p className="text-ink/70 mb-3">El alojamiento del sitio web está incluido sin costo adicional mientras el sitio permanezca administrado por Platon Code. Incluye certificado de seguridad SSL.</p>
                  </div>
                  <div className="bg-brand/5 p-4 rounded-xl border border-brand/10">
                    <h3 className="text-lg font-bold text-brand mb-2 flex items-center gap-2"><Mail className="w-5 h-5"/> Correo corporativo (1er año)</h3>
                    <p className="text-ink/70 mb-2">Se incluye una cuenta de correo profesional con el dominio de la empresa (ej. <em>contacto@tuempresa.com</em>).</p>
                    <p className="text-sm text-ink/60 italic">Nota: Para realizar la configuración, el cliente deberá proporcionar obligatoriamente una cuenta de Gmail activa. Esta cuenta se utilizará para accesos, recuperación, envío de información y administración del servicio.</p>
                  </div>
                </TabsContent>
                <TabsContent value="optimizacion" className="space-y-6 mt-0">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Optimización técnica</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-ink/80">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Optimización de velocidad y visualización.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Configuración básica para buscadores.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Preparación para indexación en Google.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Estructura compatible con campañas de Google Ads y Meta Ads.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Optimización de botones, formularios y llamadas a la acción.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Configuración para facilitar el contacto de clientes potenciales.</li>
                    </ul>
                    <p className="text-xs text-ink/50 mt-4">* La optimización no garantiza una posición específica en Google ni incluye la administración de campañas publicitarias.</p>
                  </div>
                </TabsContent>
                <TabsContent value="beneficios" className="space-y-6 mt-0">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3">Beneficios adicionales exclusivos</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-ink/80">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Atención prioritaria durante el servicio.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Acceso directo a nuestro equipo de trabajo.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Soporte para cambios incluidos.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Precio preferencial en futuros proyectos.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Descuentos especiales en servicios de publicidad digital.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Sitio preparado para futuras campañas publicitarias.</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand shrink-0"/> Asesoría básica para utilizar correctamente el sitio web.</li>
                    </ul>
                  </div>
                </TabsContent>
              </div>
             </Tabs>
          </div>

          {/* ACORDEONES DE LEGALES / MANTENIMIENTO */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-center mb-6">Reglas Claras y Mantenimiento</h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
               <AccordionItem value="item-1" className="bg-white border border-ink/10 rounded-xl px-6 data-[state=open]:shadow-sm transition-all">
                 <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5 [&[data-state=open]]:text-brand">
                   Mantenimiento incluido (Primer Año)
                 </AccordionTrigger>
                 <AccordionContent className="text-ink/80 text-base pb-5 space-y-4">
                   <p>Durante los primeros 12 meses, el cliente podrá solicitar actualizaciones relacionadas con la información existente del sitio.</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                         <h4 className="font-bold text-green-600 mb-2 flex items-center gap-1"><Check className="w-4 h-4"/> Sí Incluye:</h4>
                         <ul className="text-sm space-y-1">
                           <li>• Cambio de imágenes.</li>
                           <li>• Actualización de teléfonos, dirección u horarios.</li>
                           <li>• Corrección o sustitución de textos.</li>
                           <li>• Actualización de servicios.</li>
                           <li>• Cambio de enlaces y redes sociales.</li>
                           <li>• Ajustes menores de colores.</li>
                           <li>• Modificaciones básicas dentro de las 4 secciones contratadas.</li>
                         </ul>
                      </div>
                      <div>
                         <h4 className="font-bold text-red-500 mb-2 flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> No Incluye:</h4>
                         <ul className="text-sm space-y-1">
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
                   <p className="text-xs text-ink/50 mt-2">* Los trabajos adicionales se cotizan por separado.</p>
                 </AccordionContent>
               </AccordionItem>

               <AccordionItem value="item-2" className="bg-white border border-ink/10 rounded-xl px-6 data-[state=open]:shadow-sm transition-all">
                 <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5 [&[data-state=open]]:text-brand">
                   Costos y Renovaciones (Después del 1er Año)
                 </AccordionTrigger>
                 <AccordionContent className="text-ink/80 text-base pb-5 space-y-4">
                   <p>El desarrollo del sitio web no vuelve a pagarse. Después del primer año solamente se cobran las renovaciones necesarias para conservar los servicios activos.</p>
                   <ul className="space-y-3">
                      <li><strong className="text-ink">Renovación del dominio:</strong> Entre $500 y $1,200 MXN al año, dependiendo de la extensión, disponibilidad y precio establecido por el proveedor del dominio.</li>
                      <li><strong className="text-ink">Correo corporativo (Opcional):</strong> $100 MXN mensuales o $1,200 MXN mediante pago anual. Si el cliente decide no renovarlo, el sitio web puede continuar funcionando, pero la cuenta de correo será desactivada.</li>
                      <li><strong className="text-ink">Hosting:</strong> El hosting continúa incluido sin costo adicional mientras el sitio permanezca bajo la administración de Platon Code.</li>
                   </ul>
                 </AccordionContent>
               </AccordionItem>

               <AccordionItem value="item-3" className="bg-white border border-ink/10 rounded-xl px-6 data-[state=open]:shadow-sm transition-all">
                 <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5 [&[data-state=open]]:text-brand">
                   Tiempos de Entrega
                 </AccordionTrigger>
                 <AccordionContent className="text-ink/80 text-base pb-5">
                   <p><strong>Entrega estimada en 4 días hábiles.</strong></p>
                   <p className="mt-2">El tiempo de entrega comienza cuando el cliente proporciona toda la información necesaria: Logotipo, imágenes, textos, servicios, datos de contacto, ubicación, redes sociales y accesos requeridos.</p>
                   <p className="mt-2 text-sm text-ink/60 italic">* Los retrasos en la entrega de información pueden modificar la fecha de publicación.</p>
                 </AccordionContent>
               </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 4. CÓMO COMENZAR Y CIERRE */}
      <section className="py-24 relative bg-ink text-bone overflow-hidden">
        {/* Background Effects */}
        <div className="grid-tech absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl bg-brand/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <img src={statueApollo} className="absolute left-[-5%] top-[10%] h-[80%] opacity-20 object-contain pointer-events-none z-0" alt="" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
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
            className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl mb-12 flex flex-col md:flex-row gap-8"
          >
             <div className="flex-1">
                <h3 className="text-xl font-bold text-brand mb-4 flex items-center gap-2"><Layers className="w-5 h-5"/> Datos del Cliente</h3>
                <ul className="space-y-2 text-sm text-bone/80">
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
                <ul className="space-y-2 text-sm text-bone/80">
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
            className="text-center bg-brand/10 border border-brand/20 p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">Confirmación Obligatoria</h3>
            <p className="text-bone/70 italic mb-8 max-w-2xl mx-auto">
              “Confirmo que revisé el alcance del servicio. Entiendo que la inversión inicial es de $3,600 MXN, que el sitio incluye hasta cuatro secciones y que después del primer año el dominio y el correo corporativo requieren renovación. También entiendo que las funciones adicionales o los rediseños completos se cotizan por separado.”
            </p>
            
            <Button 
              variant="brand" 
              size="lg" 
              className="w-full sm:w-auto text-lg font-bold px-12 h-16 shadow-xl shadow-brand/20"
              onClick={() => handleWhatsAppClick("cta-final-whatsapp")}
              data-event="whatsapp_click"
              id="cta-final-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2"/> Quiero empezar ya
            </Button>
          </motion.div>
        </div>
      </section>
`;

const regex = /\{\/\* 4\. QU\% INCLUYE \*\/\}[\s\S]*/;
landing = landing.replace(regex, newSections + '\n    </div>\n  );\n}\n');

fs.writeFileSync(landingPath, landing, 'utf-8');
console.log('Replaced sections');

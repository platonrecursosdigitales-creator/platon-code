const fs = require('fs');
const path = require('path');

const landingPath = path.join(__dirname, 'src', 'pages', 'LandingSitioWeb.tsx');
let landing = fs.readFileSync(landingPath, 'utf-8');

// Add new imports
if (!landing.includes('portfolioMedina')) {
  const importString = `import portfolioMedina from "@/assets/portfolio_medina.png";
import portfolioCaballero from "@/assets/portfolio_caballero.png";
import portfolioSolec from "@/assets/portfolio_solec.png";
import portfolioDental from "@/assets/portfolio_dental.png";
import { ExternalLink } from "lucide-react";
`;
  landing = landing.replace('import mockupImg from "@/assets/portfolio_mockup.png";', importString + 'import mockupImg from "@/assets/portfolio_mockup.png";');
}

const startMarker = '{/* 3. EJEMPLOS Y PORTAFOLIO */}';
const endMarker = '{/* 4. QU INCLUYE */}';
// Windows might have encoding issues with the E in QUE. Let's just match using regex.

const newPortfolio = `{/* 3. EJEMPLOS Y PORTAFOLIO */}
      <section className="py-24 relative bg-bone overflow-hidden border-t border-ink/5">
        <div className="container mx-auto px-6">
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
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioMedina} alt="Dr. Gilberto Medina" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioCaballero} alt="Dra. Alaide Caballero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioSolec} alt="Constructora Solec Mex" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       Visitar Sitio <ExternalLink className="w-4 h-4" />
                    </div>
                 </div>
                 <img src={portfolioDental} alt="Dental Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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

const regex = /\{\/\* 3\. EJEMPLOS Y PORTAFOLIO \*\/\}[\s\S]*?(?=\{\/\* 4\. QU)/;
landing = landing.replace(regex, newPortfolio + '\n      ');

fs.writeFileSync(landingPath, landing, 'utf-8');
console.log('Replaced portfolio section');

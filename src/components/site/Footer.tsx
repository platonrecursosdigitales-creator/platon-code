import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram } from "lucide-react";

const navItems: { label: string; to: string }[] = [
  { label: "Inicio", to: "/" },
  { label: "Soluciones", to: "/soluciones" },
  { label: "Precios", to: "/precios" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Caso", to: "/caso" },
];

const Footer = () => (
  <footer className="bg-bone text-ink pt-20 pb-10">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-5">
          <div className="text-ink"><Logo showText /></div>
          <p className="mt-6 text-ink/70 max-w-md text-[15px] leading-relaxed">
            Software, sitios web y sistemas digitales para empresas que quieren crecer.
          </p>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            Digital Business Suite
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45 mb-4">Navegación</div>
          <ul className="space-y-2 text-[14px]">
            {navItems.map((l) => (
              <li key={l.to}><Link className="hover:text-brand transition-colors" to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45 mb-4">Redes</div>
          <ul className="space-y-2 text-[14px]">
            <li><a className="inline-flex items-center gap-2 hover:text-brand transition-colors" href="https://www.facebook.com/platoncodesystems" target="_blank" rel="noreferrer"><Facebook size={14} /> Facebook</a></li>
            <li><a className="inline-flex items-center gap-2 hover:text-brand transition-colors" href="https://www.instagram.com/platoncodemx/" target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45 mb-4">Legal</div>
          <ul className="space-y-2 text-[14px]">
            <li><a className="hover:text-brand transition-colors" href="#">Política de privacidad</a></li>
            <li><a className="hover:text-brand transition-colors" href="#">Términos de servicio</a></li>
            <li><a className="hover:text-brand transition-colors" href="#">Aviso de tratamiento de datos</a></li>
          </ul>
        </div>
      </div>

      {/* big wordmark */}
      <div className="border-t border-ink/15 pt-10 overflow-hidden">
        <div className="font-display text-[18vw] leading-none text-ink/[0.07] select-none tracking-tight">
          Platon Code
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
        <span>© {new Date().getFullYear()} Platon Code Systems</span>
        <span>platoncode.com</span>
      </div>
    </div>
  </footer>
);

export default Footer;

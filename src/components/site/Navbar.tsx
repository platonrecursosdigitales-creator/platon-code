import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const desktopLinks = [
  { to: "/", label: "Inicio" },
  { to: "/soluciones", label: "Soluciones" },
  { to: "/precios", label: "Precios" },
  { to: "/nosotros", label: "Nosotros" },
];

const links = [
  ...desktopLinks,
  { to: "/caso", label: "Caso" },
];

const Navbar = ({ onAgenda }: { onAgenda: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-bone/85 backdrop-blur-xl border-b border-ink/10" : "py-5"
        }`}
      >
        <div className={`container flex items-center justify-between transition-opacity duration-500 ${scrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <Link to="/" aria-label="Platon Code Systems"><Logo /></Link>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
            {desktopLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors group ${
                  pathname === l.to ? "text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden relative h-11 w-11 rounded-md border border-ink/15 bg-bone hover:border-brand transition-colors flex items-center justify-center group"
            >
              <span className="sr-only">Menú</span>
              <div className="flex flex-col gap-[5px]">
                <motion.span
                  className="block h-[2px] w-5 bg-ink"
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-[2px] w-5 bg-ink"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-[2px] w-5 bg-ink"
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-40 bg-ink text-bone"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 grid-tech opacity-[0.07]" />
            <div className="container h-full flex flex-col justify-center pt-24 pb-16">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/50 mb-10">
                Index · Navegación
              </div>
              <ul className="flex flex-col gap-2 md:gap-4">
                {links.map((l, i) => (
                  <motion.li key={l.to}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-bone/10"
                  >
                    {l.to === "#agenda" ? (
                      <button
                        type="button"
                        onClick={() => { setOpen(false); onAgenda(); }}
                        className="group flex w-full items-baseline justify-between py-4 md:py-6 text-left"
                      >
                        <span className="font-display text-4xl md:text-7xl text-bone group-hover:text-brand transition-colors">
                          {l.label}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-bone/40 group-hover:text-brand transition-colors">
                          / 0{i + 1}
                        </span>
                      </button>
                    ) : (
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between py-4 md:py-6"
                      >
                      <span className="font-display text-4xl md:text-7xl text-bone group-hover:text-brand transition-colors">
                        {l.label}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-bone/40 group-hover:text-brand transition-colors">
                        / 0{i + 1}
                      </span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/50">
                <span>platoncode.com</span>
                <a className="hover:text-brand" href="https://www.facebook.com/platoncodesystems" target="_blank" rel="noreferrer">Facebook</a>
                <a className="hover:text-brand" href="https://www.instagram.com/platoncodemx/" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

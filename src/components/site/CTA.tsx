import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Typewriter from "./Typewriter";

const CTA = ({ onAgenda }: { onAgenda: () => void }) => (
  <section id="agenda" className="py-24 lg:py-36 bg-bone">
    <div className="container">
      <div className="relative rounded-md border border-ink/15 p-10 lg:p-16 bg-bone overflow-hidden">
        <div className="absolute inset-0 grid-tech opacity-[0.05]" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">/ 09 — Próximo paso</div>
            <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
              Agenda una llamada y revisemos qué necesita tu empresa para <span className="text-brand">crecer digitalmente</span>.
            </h2>
            <p className="mt-6 text-ink/70 max-w-xl text-lg">
              Sin promesas falsas. Sin plantillas genéricas. Construimos con criterio técnico, diseño profesional y enfoque comercial.
            </p>
            <div className="mt-6 font-mono text-[12px] text-brand">
              <Typewriter text="> iniciando conversación con Platon Code_" speed={32} />
            </div>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button variant="hero" size="lg" onClick={onAgenda} className="group">
              Agendar llamada
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;

import { useState } from "react";
import { Button } from "@/components/ui/button";

const fields = [
  { id: "nombre", label: "Nombre", type: "text", required: true },
  { id: "empresa", label: "Empresa", type: "text" },
  { id: "whatsapp", label: "WhatsApp", type: "tel" },
  { id: "correo", label: "Correo", type: "email", required: true },
];

const projectTypes = ["Sitio web", "Tienda / catálogo", "Software / sistema", "Marketing digital", "Branding", "Automatización"];
const goals = ["Captar más clientes", "Profesionalizar imagen", "Automatizar operación", "Lanzar un producto digital", "Otro"];
const budgets = ["< $500 USD", "$500 – $1,500 USD", "$1,500 – $5,000 USD", "$5,000+ USD", "Por definir"];

const Diagnose = ({ onAgenda }: { onAgenda: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="diagnostico" className="py-24 lg:py-36 bg-ink text-bone">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 mb-4">/ 08 — Diagnóstico</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Revisemos qué necesita <span className="text-brand">tu empresa</span>.
            </h2>
            <p className="mt-6 text-bone/70 max-w-2xl text-lg">
              Agenda una llamada o deja tus datos para analizar el tipo de solución digital más conveniente para tu negocio.
            </p>
          </div>
        </div>

        <div className="border border-bone/15 rounded-md bg-bone/[0.03] backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 border-b border-bone/15 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">
            <span>diagnose.form</span>
            <span>{submitted ? "✓ recibido (visual)" : "ready"}</span>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="p-6 lg:p-10 grid md:grid-cols-2 gap-x-8 gap-y-6"
          >
            {fields.map((f) => (
              <label key={f.id} className="flex flex-col gap-2 group">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50 group-focus-within:text-brand transition-colors">
                  {f.label}{f.required && " *"}
                </span>
                <input
                  type={f.type}
                  required={f.required}
                  className="bg-transparent border-b border-bone/20 focus:border-brand outline-none py-2 text-bone placeholder:text-bone/30 transition-colors"
                  placeholder={f.label}
                />
              </label>
            ))}

            <label className="flex flex-col gap-2 group">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Tipo de proyecto</span>
              <select className="bg-transparent border-b border-bone/20 focus:border-brand outline-none py-2 text-bone">
                {projectTypes.map((p) => <option key={p} className="bg-ink">{p}</option>)}
              </select>
            </label>

            <label className="flex flex-col gap-2 group">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Objetivo principal</span>
              <select className="bg-transparent border-b border-bone/20 focus:border-brand outline-none py-2 text-bone">
                {goals.map((p) => <option key={p} className="bg-ink">{p}</option>)}
              </select>
            </label>

            <label className="flex flex-col gap-2 group">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Presupuesto aproximado</span>
              <select className="bg-transparent border-b border-bone/20 focus:border-brand outline-none py-2 text-bone">
                {budgets.map((p) => <option key={p} className="bg-ink">{p}</option>)}
              </select>
            </label>

            <label className="flex flex-col gap-2 group md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Mensaje</span>
              <textarea
                rows={3}
                className="bg-transparent border-b border-bone/20 focus:border-brand outline-none py-2 text-bone resize-none placeholder:text-bone/30"
                placeholder="Cuéntanos brevemente sobre tu proyecto"
              />
            </label>

            <label className="md:col-span-2 flex items-start gap-3 text-[13px] text-bone/70">
              <input type="checkbox" required className="mt-1 accent-brand" />
              <span>Acepto el tratamiento de mis datos para contacto, diagnóstico y seguimiento comercial.</span>
            </label>

            <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
              <Button type="button" variant="brand" size="lg" onClick={onAgenda}>Agendar llamada</Button>
              <Button type="submit" size="lg" className="bg-bone text-ink hover:bg-brand hover:text-bone transition-colors">
                Enviar diagnóstico
              </Button>
              {submitted && (
                <span className="self-center font-mono text-[11px] text-brand">/ visual confirmado</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Diagnose;

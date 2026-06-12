import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "529997677024";

const projectTypes = [
  "Sitio web profesional",
  "Sitio web + panel de leads",
  "Campaña / Growth Ads",
  "Sistema interno",
  "Cloud / infraestructura",
  "Branding / vectorización",
  "No estoy seguro",
];

const budgets = [
  "Desde $349 USD",
  "$700 – $1,500 USD",
  "$1,500 USD+",
  "A cotizar",
];

type FormState = {
  nombre: string;
  empresa: string;
  whatsapp: string;
  correo: string;
  tipo: string;
  presupuesto: string;
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  empresa: "",
  whatsapp: "",
  correo: "",
  tipo: "",
  presupuesto: "",
  mensaje: "",
};

const inputCls =
  "font-sans w-full bg-ink/40 border border-bone/15 rounded-md px-3.5 py-2.5 text-[14px] text-bone placeholder:text-bone/30 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all appearance-none";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-[0.24em] text-bone/55 mb-1.5";

const AgendaModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const required: (keyof FormState)[] = ["nombre", "whatsapp", "tipo"];
    const next: typeof errors = {};
    required.forEach((k) => {
      if (!data[k].trim()) next[k] = true;
    });
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    const text =
      `Hola, soy ${data.nombre}.\n` +
      `Quiero agendar una llamada con Platon Code.\n\n` +
      `Empresa: ${data.empresa || "—"}\n` +
      `WhatsApp: ${data.whatsapp}\n` +
      `Correo: ${data.correo || "—"}\n` +
      `Tipo de proyecto: ${data.tipo}\n` +
      `Presupuesto aproximado: ${data.presupuesto || "—"}\n` +
      `Mensaje: ${data.mensaje || "—"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-lg overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="agenda-title"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 20, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md my-auto bg-ink text-bone border border-bone/10 rounded-xl overflow-hidden shadow-[0_30px_120px_-20px_rgba(0,0,0,0.6)]"
          >
            {/* Glow accent */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative flex items-center justify-between px-5 py-3 border-b border-bone/10 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/55">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                schedule.call
              </span>
              <button onClick={onClose} aria-label="Cerrar" className="text-bone/55 hover:text-brand transition-colors">
                <X size={16} />
              </button>
            </div>

            <form onSubmit={submit} className="relative p-6 sm:p-7">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
                <Sparkles size={12} /> Diagnóstico inicial
              </div>
              <h3 id="agenda-title" className="mt-2 font-display text-2xl sm:text-[26px] leading-tight tracking-tight">
                Agenda una llamada con <span className="text-brand">Platon Code</span>.
              </h3>
              <p className="mt-2 text-bone/60 text-[13px]">
                Respondemos en menos de 24 h con una propuesta clara.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className={labelCls}>Nombre *</label>
                  <input className={`${inputCls} ${errors.nombre ? "border-brand ring-2 ring-brand/30" : ""}`} value={data.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder="Tu nombre" />
                </div>
                <div>
                  <label className={labelCls}>WhatsApp *</label>
                  <input className={`${inputCls} ${errors.whatsapp ? "border-brand ring-2 ring-brand/30" : ""}`} value={data.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+52 999 000 0000" />
                </div>
                <div>
                  <label className={labelCls}>Correo</label>
                  <input type="email" className={inputCls} value={data.correo} onChange={(e) => update("correo", e.target.value)} placeholder="tu@empresa.com" />
                </div>
                <div className="col-span-2">
                  <label className={labelCls}>Tipo de proyecto *</label>
                  <select className={`${inputCls} ${errors.tipo ? "border-brand ring-2 ring-brand/30" : ""}`} value={data.tipo} onChange={(e) => update("tipo", e.target.value)}>
                    <option value="" className="bg-ink">Selecciona una opción</option>
                    {projectTypes.map((o) => <option key={o} value={o} className="bg-ink">{o}</option>)}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className={labelCls}>Presupuesto</label>
                  <select className={inputCls} value={data.presupuesto} onChange={(e) => update("presupuesto", e.target.value)}>
                    <option value="" className="bg-ink">Selecciona</option>
                    {budgets.map((o) => <option key={o} value={o} className="bg-ink">{o}</option>)}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className={labelCls}>Mensaje</label>
                  <textarea rows={2} className={`${inputCls} resize-none`} value={data.mensaje} onChange={(e) => update("mensaje", e.target.value)} placeholder="Cuéntanos brevemente sobre tu proyecto" />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-bone px-5 py-3 text-[14px] font-medium tracking-tight shadow-[0_10px_40px_-10px_hsl(var(--accent-blue)/0.6)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle size={16} />
                Enviar y continuar por WhatsApp
              </button>

              <p className="mt-3 text-center text-[10.5px] leading-relaxed text-bone/45">
                Tus datos se usan únicamente para contacto y diagnóstico comercial.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgendaModal;

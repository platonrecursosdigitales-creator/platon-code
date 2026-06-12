import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="#"
    aria-label="Quiero agendar una llamada por WhatsApp"
    className="fixed bottom-5 right-5 z-40 group"
    onClick={(e) => e.preventDefault()}
  >
    <span className="relative flex items-center gap-2 bg-ink text-bone rounded-full pl-3 pr-4 py-2.5 border border-ink hover:border-brand hover:bg-brand transition-colors shadow-lg">
      <span className="h-7 w-7 rounded-full bg-brand group-hover:bg-bone group-hover:text-ink text-bone flex items-center justify-center transition-colors">
        <MessageCircle size={14} />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Quiero agendar</span>
    </span>
  </a>
);

export default WhatsAppFab;

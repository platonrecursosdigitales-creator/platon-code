import { motion } from "framer-motion";
import { viewportOnce, slideInRight, slideInLeft, popIn } from "@/lib/motion";
import Parallax from "@/components/site/Parallax";

const groups = [
  { label: "Frontend", items: ["React", "Vite", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { label: "Backend / Software", items: ["Node.js", "Python", "C#", "SQL", "PostgreSQL", "Supabase", "Firebase"] },
  { label: "Infraestructura", items: ["Linux", "Cloud", "AWS", "Google Cloud", "Networking", "Cisco"] },
  { label: "Marketing / Medición", items: ["Google", "Meta", "Analytics", "SEO", "Tracking", "Automation"] },
  { label: "Desarrollo", items: ["Git", "Version Control", "Component Architecture", "UI Systems"] },
];

const Stack = () => (
  <section id="tecnologias" className="relative py-24 lg:py-36 bg-bone overflow-hidden">
    <div className="absolute inset-0 grid-tech opacity-[0.05] pointer-events-none" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-4">/ 04 — Engineering Stack</div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.02] tracking-tight text-balance">
            Tecnología detrás de soluciones <span className="text-brand">digitales serias</span>.
          </h2>
          <p className="mt-6 text-ink/70 max-w-2xl text-lg">
            Una capa técnica completa para construir desde una landing comercial hasta un sistema digital integrado.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Terminal-style block */}
        <motion.div
          className="lg:col-span-5"
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
         <Parallax offset={-20}>
          <div className="border border-ink rounded-md bg-ink text-bone overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-bone/15 font-mono text-[11px] text-bone/60">
              <span>~ / platoncode / engineering</span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-bone/30" />
                <span className="h-2 w-2 rounded-full bg-bone/30" />
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>
            </div>
            <pre className="p-5 text-[12px] leading-relaxed font-code text-bone/90 overflow-x-auto">
{`> stack.init({
    frontend:  ["react", "vite", "ts", "tailwind"],
    backend:   ["node", "python", "c#", "sql"],
    infra:     ["linux", "aws", "gcp"],
    growth:    ["seo", "ads", "analytics"],
    method:    "ui-systems · components · clean-arch"
  })

✓ ready · "build digital systems for growth"`}
            </pre>
          </div>
         </Parallax>
        </motion.div>

        <div className="lg:col-span-7 space-y-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              custom={gi}
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="border border-ink/15 rounded-md p-5 hover:border-brand transition-colors group bg-bone"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 group-hover:text-brand transition-colors">{g.label}</span>
                <span className="font-mono text-[10px] text-ink/40">/{String(gi + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it, ii) => (
                  <motion.span
                    key={it}
                    custom={ii}
                    variants={popIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="font-mono text-[12px] px-2.5 py-1 border border-ink/15 rounded text-ink/85 hover:bg-ink hover:text-bone transition-colors"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stack;


## Rediseño del Hero (página de inicio)

Solo se modifica `src/components/site/Hero.tsx`. El Preloader, Navbar, Footer, resto de secciones y páginas no se tocan. Paleta intacta: `#FAECD6` (bone), `#020029` (ink), `#D9D9D9`, `#2563EB` (brand). Tipografías intactas: Space Grotesk + Geist Mono.

### Layout (desktop)

```text
┌─────────────────────────────────────────────────────────┐
│  fondo liso #FAECD6 — sin grid, sin watermark, sin noise │
│                                                          │
│   PLATON CODE                          ┌──────────┐     │
│   ░ Digital Business Suite             │ estatua  │     │
│                                        │  (PNG)   │     │
│                                        │          │     │
│             Somos sabiduría en         │          │     │
│             ⟳ marketing                │          │     │
│                                        └──────────┘     │
└─────────────────────────────────────────────────────────┘
```

- Grid de 12 columnas. Izquierda (col 1–6): lockup de marca + línea rotativa centrada bajo. Derecha (col 7–12): estatua PNG anclada al borde derecho, altura del viewport del hero.
- Móvil: estatua de fondo a la derecha con opacidad reducida, texto encima alineado a la izquierda.

### Bloque izquierdo — lockup de marca

1. `PLATON CODE` en **Space Grotesk** display, ~96px desktop, tracking ajustado igual al logo actual. Animación **typewriter** caracter por caracter (~45ms/char), sin cursor al terminar.
2. Al completarse `PLATON CODE`, `Digital Business Suite` aparece **deslizándose de arriba hacia abajo desde detrás** de las letras de Platon Code (mask con `clip-path` + `translateY`), en **Geist Mono** uppercase tracking 0.25em, ~14px, color `ink/70`. Duración 600ms, easing `[0.22, 1, 0.36, 1]`, equivalente visual a 60fps (framer-motion ya corre a refresh del display).

### Línea rotativa "Somos sabiduría en…"

- Posicionada bajo el lockup, centrada respecto a la mitad inferior entre estatua y marca.
- Texto fijo `Somos sabiduría en` en Space Grotesk italic + palabra rotativa en `brand` (#2563EB) usando el componente existente `RotatingWord`.
- Palabras: `marketing`, `automatizaciones`, `software`, `branding`, `sistemas`, `crecimiento`.
- Bajo esa línea: CTAs existentes `Agendar llamada` (hero) + `Ver soluciones` (ghostGlow). Se conservan sin cambio visual.

### Bloque derecho — estatua

- Imagen PNG subida (`png.png`) externalizada con `lovable-assets` a `src/assets/statue.png.asset.json`.
- Render con `<img>` (o `motion.img`) anclado al borde derecho, `object-contain`, altura ~85vh, sin sombras ni filtros (respetar PNG con fondo transparente).
- Entrada: fade + leve `translateX` desde la derecha (700ms, easing premium), retrasada hasta que termine el typewriter para no competir.

### Qué se elimina del Hero actual

- Barra superior `// PCS · 2026 · Digital Business Suite · Engineering · Growth · Brand`.
- Watermark del octaedro SVG.
- Línea vertical central animada.
- Fondo `grid-tech-fade` y capa `noise`.
- Panel técnico derecho `system.status` (stack/focus/mode/since/_run diagnose).
- Marquee inferior con `Desarrollo Web · Software a medida · …`.
- Headline multilínea actual `Desarrollamos / [rotating] / para empresas / que quieren crecer`.

Todos los demás componentes (`CTA`, `Solutions`, `Plans`, `Process`, `Stack`, etc.) quedan intactos para iteración posterior.

### Detalles técnicos

- Nuevo archivo: `src/assets/statue.png.asset.json` (creado vía `lovable-assets create --file /mnt/user-uploads/png.png --filename statue.png`).
- Edita: `src/components/site/Hero.tsx` (reescritura del JSX, mismas exportaciones, misma prop `onAgenda`).
- Reutiliza: `RotatingWord`, `Button` (variantes `hero` y `ghostGlow`), tokens `bone`/`ink`/`brand`.
- Animaciones con `framer-motion` (ya instalado). Typewriter: `motion.span` con `useEffect` que va revelando substring; o reutilizar el componente `Typewriter.tsx` existente disparado en `mount` (no en scroll). Slide de "Digital Business Suite": `motion.div` con `initial={{ y: '-100%' }} animate={{ y: 0 }}` dentro de un wrapper `overflow-hidden`, delay = duración del typewriter.
- Respeta `prefers-reduced-motion`: muestra el lockup completo sin animar.
- Sin cambios en `index.css`, `tailwind.config.ts`, rutas, ni SEO.

### Fuera de alcance

- Nuevas animaciones de scroll (se definirán después, según indicó el usuario).
- Cambios en otras secciones, páginas o el Preloader.

# Porto — AI Agent Notes

Portfolio website milik **Hafidz Zakky D** — Senior Front End Engineer, Jakarta, Indonesia.

---

## Tech Stack

| Category | Package | Version |
|----------|---------|---------|
| Framework | React | ^19.2.0 |
| Language | TypeScript | ~5.9.3 |
| Build | Vite | ^7.2.4 |
| Styling | Tailwind CSS | ^3.4.17 |
| UI Kit | DaisyUI | ^4.12.10 |
| Animation | Framer Motion | ^12.33.0 |
| Smooth Scroll | Lenis | ^1.3.17 |
| 3D | Three.js + @react-three/fiber + @react-three/drei | ^0.182.0 |
| Carousel | @splidejs/react-splide | ^0.7.12 |
| Map | Leaflet + react-leaflet | ^1.9.4 / ^5.0.0 |
| PWA | vite-plugin-pwa | ^1.2.0 |
| Icons | react-icons | ^5.5.0 |

## Build Commands

```bash
npm run dev       # development server
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # preview production build
```

---

## Project Structure

```
src/
  App.tsx                         # Root: layout, theme, nav, Lenis scroll
  main.tsx                        # Entry point
  index.css                       # Tailwind + custom CSS vars
  sections/
    Hero.tsx                      # Hero + rotating roles text
    Skills.tsx                    # Skill radar (SVG) + stack grid
    Philosophy.tsx                # 4 accordion expand cards
    Experience.tsx                # Timeline cards (click to expand)
    Education.tsx                 # Single education card
    Showcase.tsx                  # Masonry project grid + modal
    Contact.tsx                   # Bento grid + 3D avatar
    StaticAbstractBackground.tsx  # Fixed decorative background
    AbstractBackground.tsx        # (disabled)
    WorldMap.tsx                  # (disabled)
    Summary.tsx                   # (disabled)
    Projects.tsx                  # (disabled - old version)
  components/
    HeroParallax.tsx              # Javanese SVG parallax (wayang, gunungan, awan)
    User3D.tsx                    # 3D GLB avatar via Three.js
    Preloader.tsx                 # Fullscreen loader (gunungan animation)
  data/
    projects.ts                   # Project[] array — 12 active projects
  assets/
    image/
      me/                         # Personal photos
      portfolio/                  # Project screenshots (.webp)
        bni/                      # 5 BNI projects
        merdeka/                  # Merdeka Safety
        tukangku/v1, v2           # Tukangku app
        difacare/                 # DifaCare
        senjacare/                # Senja Care
        saka/                     # Saka EIS (20 images)
        saka-vessel/              # Saka Vessel Tracker
      traditional/v2/             # SVG: wayang, gunungan 1&2, awan 1-5, bg circle
    model/3d/user.glb             # 3D avatar model
    file/                         # CV PDF
```

---

## App.tsx — Key Behaviors

- **Theme**: persisted to `localStorage`, default `luxury`. 8 options: `mytheme`, `light`, `dark`, `cyberpunk`, `retro`, `synthwave`, `luxury`, `dracula`
- **Lenis smooth scroll**: duration 1.2, easing `Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- **Sticky nav**: appears after scroll > 100px. Bottom on mobile, top on desktop.
- **Active section**: `IntersectionObserver` with `rootMargin: '-40% 0px -40% 0px'`
- **Sections order**: Hero → Skills → Philosophy → Experience → Education → Showcase → Contact
- **Scroll progress bar**: `motion.div` with `scaleX: scrollYProgress`
- **Preloader**: 2000ms timeout then dismissed

---

## Design System & Styling Patterns

### Glassmorphism (standard)
```
bg-base-100/30 backdrop-blur-md shadow-sm
```

### Glassmorphism (luxury theme override)
```
[html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.05)]
[html[data-theme=luxury]_&]:backdrop-blur-[10px]
[html[data-theme=luxury]_&]:shadow-[0_4px_30px_rgba(0,0,0,0.1)]
[html[data-theme=luxury]_&]:border-none
[html[data-theme=luxury]_&]:hover:bg-[rgba(255,255,255,0.1)]
```

### Section heading
```html
<h2 class="text-3xl font-bold border-b-4 border-primary inline-block pb-1">Title</h2>
```

### Framer Motion standard entrance
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### CSS Variables (index.css)
```css
html[data-theme] {
  --bg-spot-1: rgb(var(--in) / 0.16);
  --bg-spot-2: rgb(var(--su) / 0.14);
}
html[data-theme='luxury'] {
  --bg-glow-primary: 22 33 61;
  --bg-glow-secondary: 22 33 61;
}
```

---

## Sections Detail

### Hero (`src/sections/Hero.tsx`)
- Rotating roles (3000ms): "Senior Front End Engineer", "React Specialist", "UI/UX Enthusiast", + 2 more
- Left 7-col (text) + right 5-col (HeroParallax, desktop only)
- Buttons: LinkedIn, GitHub, Download CV

### HeroParallax (`src/components/HeroParallax.tsx`)
- Javanese cultural SVGs: wayang, gunungan 1 & 2, 5 types of awan (clouds), bg circle
- Mouse parallax (Framer Motion spring: damping 25, stiffness 120) + scroll parallax
- 3 depth layers: Back (scroll 0→150px), Mid (0→50px), Front (0→10px)
- Assets: `src/assets/image/traditional/v2/`

### Skills (`src/sections/Skills.tsx`)
- **FrontendStack**: category label (1/3 width) + skill badges (flex-wrap) with brand icons
- **SkillRadar**: custom SVG pentagon chart, 5 axes:
  - Frontend 9/10 | Architecture 8.5/10 | Testing 7.5/10 | Performance 8.5/10 | UI/UX 8/10
- Interactive radar: hover vertex → floating tooltip

### Philosophy (`src/sections/Philosophy.tsx`)
- 4 cards in horizontal flex row, `hover:flex-[3]` accordion expand
- Height: 750px mobile / 240px desktop
- Cards: User-Centric, Performance-Obsessed, Scalable Architecture, Security & Quality

### Experience (`src/sections/Experience.tsx`)
- Dashed border-left timeline
- 3 jobs (click to expand bullet points):
  1. **PT. Petrosea, Tbk** — Senior FE Engineer | May 2020 – Present
  2. **PT. Merdeka Copper Gold** — FE Engineer | Jun 2019 – May 2020
  3. **PT. Mitra Integrasi Informatika** — FE Engineer | Jan 2018 – Jun 2019
- Tech stack badges always visible; 4 stat cards below

### Education (`src/sections/Education.tsx`)
- BSc Informatics Engineering, Dian Nuswantoro University, Semarang | 2013–2017

### Showcase (`src/sections/Showcase.tsx`)
- Masonry layout: CSS columns 1→2→3
- Category filter from project tags (desktop: pills above; mobile: floating fixed bar)
- `ShowcaseCard`: image cycle on hover (1500ms interval)
- `ProjectModal`: Splide.js carousel (autoplay 3000ms), keyboard nav (←→ Esc)

### Contact (`src/sections/Contact.tsx`)
- Bento grid: LinkedIn (2×2), 3D avatar, Email, Instagram, GitHub
- `User3D` lazy-loaded (only when InView)
- Links: LinkedIn, GitHub, Email hafidzzakky@gmail.com, Instagram, WhatsApp wa.me/6285602577078

### User3D (`src/components/User3D.tsx`)
- React Three Fiber, GLB: `src/assets/model/3d/user.glb`
- Scale 4.5, position [0, -7.6, 0] (shows upper body)
- Float animation, OrbitControls (no zoom, locked horizontal)

---

## Project Data (`src/data/projects.ts`)

```ts
interface Project {
  id: number;
  title: string;
  tags: string[];
  role?: string;
  context?: string;
  description: string;
  links: { github: string; demo: string };
  images: string[]; // imported webp paths
}
```

**12 Active Projects:**
1. Saka EIS — Oil & Gas invoicing (React/Next.js, Lead Frontend)
2. SAKA Vessel Tracker — Maritime logistics + Leaflet map
3. Tukangku.co v1 — Construction marketplace (Solo Founder)
4. Tukangku.co v2 — One-stop construction solution
5. Senja Care App — React Native caregiver platform
6. DifaCare — Special needs healthcare (React/Vite)
7. BNI Digi Payroll — Banking payroll
8. BNI Digimap — Geospatial analytics
9. BNI Digimudik — Event tracking
10. BNI E-Absensi — Attendance system
11. BNI My Office — Internal office tools
12. Merdeka Safety — Mining safety management

All images: `.webp` format. All `links.github` and `links.demo` are currently `#`.

---

## Owner Contact Info
- LinkedIn: https://www.linkedin.com/in/hafidzzakkyd/
- GitHub: https://github.com/hafidzzakky
- Email: hafidzzakky@gmail.com
- Instagram: https://instagram.com/hafidzzakkyd
- WhatsApp: https://wa.me/6285602577078
- Location: Jakarta, Indonesia

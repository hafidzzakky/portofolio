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
| Carousel | @splidejs/react-splide | ^0.7.12 |
| PWA | vite-plugin-pwa | ^1.2.0 |
| Icons | react-icons | ^5.5.0 |
| Font | @fontsource-variable/plus-jakarta-sans | ^5.3.0 |

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
    Contact.tsx                   # Bento grid + portrait photo
    StaticAbstractBackground.tsx  # Fixed decorative background
  components/
    HeroParallax.tsx              # Javanese SVG parallax (wayang, gunungan, awan)
    Preloader.tsx                 # Fullscreen loader (gunungan animation)
    SectionHeading.tsx            # Shared section header (headline + animated rule + lead)
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
    file/                         # CV PDF
```

---

## App.tsx — Key Behaviors

- **Theme**: two only, persisted to `localStorage`, default dark. `luxury` = dark, `mytheme` = light.
  Toggled by a `role="switch"` button (top right), not a dropdown. Any other stored value falls back to dark.
  `tailwind.config.js` ships only these two DaisyUI themes.
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
Use `<SectionHeading title lead? level={2|3} align={'left'|'center'} />`.
Plain `text-base-content` headline + a primary rule that draws itself on entry.
No gradient/animated text headings — they were removed in the redesign.

### Framer Motion standard entrance
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Typography
`Plus Jakarta Sans Variable`, self-hosted via `@fontsource-variable/...` imported at the top of
`index.css` and wired into `theme.extend.fontFamily.sans`. Never link Google Fonts from `index.html`.

### Light theme palette
`mytheme` is sampled from the hero artwork (gunungan `#b0682d`, highlight `#ef9344`) so light mode
shares one warm identity with it, the way `luxury`'s gold already does. Primary `#A05E26` clears
AA on `base-100` (5.1:1) as both text and button fill. Neutrals are warm, never slate.
Muted text uses `text-base-content/65` (5.3:1) and `/75` (7.5:1) - nothing below /65, which fails AA.

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
- Left 7-col (text) + right 5-col (HeroParallax, `hidden lg:block` - the artwork is fixed-size)
- Two CTAs only: Download CV (primary) + LinkedIn (outline). No scroll cue, no tech-stack strip.

### HeroParallax (`src/components/HeroParallax.tsx`)
- Javanese cultural SVGs: wayang, gunungan 1 & 2, 5 types of awan (clouds), bg circle
- Mouse parallax (Framer Motion spring: damping 25, stiffness 120) + scroll parallax
- 3 depth layers: Back (scroll 0→150px), Mid (0→50px), Front (0→10px)
- Assets: `src/assets/image/traditional/v2/`

### Skills (`src/sections/Skills.tsx`)
- **StackExplorer**: 7 categories as a tab rail (vertical on desktop, scroll-snap row on mobile)
  + panel of skill chips. Active marker uses `layoutId='stack-active'`; chips stagger in per category.
- **SkillRadar**: fixed-viewBox SVG pentagon (no resize listener), labels sit on the chart itself,
  one detail readout below. 5 axes:
  Frontend 9/10 | Architecture 8.5/10 | Testing 7.5/10 | Performance 8.5/10 | UI/UX 8/10

### Philosophy (`src/sections/Philosophy.tsx`)
- 4 cards in horizontal flex row, `hover:flex-[3]` accordion expand
- Height: 750px mobile / 240px desktop
- Cards: User-Centric, Performance-Obsessed, Scalable Architecture, Security & Quality

### Experience (`src/sections/Experience.tsx`)
- Timeline rail that fills with `useScroll` progress; first role expanded by default
- 3 jobs (click to expand bullet points):
  1. **PT. Petrosea, Tbk** — Senior FE Engineer | May 2020 – Present
  2. **PT. Merdeka Copper Gold** — FE Engineer | Jun 2019 – May 2020
  3. **PT. Mitra Integrasi Informatika** — FE Engineer | Jan 2018 – Jun 2019
- Closed state shows 6 tech chips + "+N more"; 4 highlights below as a divided row (no cards)

### Education (`src/sections/Education.tsx`)
- Editorial band: large 2013 / 2017 numerals + degree, no card
- BSc Informatics Engineering, Dian Nuswantoro University, Semarang | 2013-2017

### Showcase (`src/sections/Showcase.tsx`)
- Desktop: `ProjectRow` index list + `IndexPreview`, a cursor-tracked image preview
  (pointermove writes motion values only; `PreviewFrames` cycles screenshots every 1200ms)
- Mobile: `ProjectCard` grid with the image always visible
- Category filter from project tags (desktop: underlined text links; mobile: floating fixed bar)
- `ProjectModal`: Splide.js carousel (autoplay 3000ms), keyboard nav (←→ Esc)

### Contact (`src/sections/Contact.tsx`)
- Bento grid: LinkedIn (2×2), portrait photo, Email, Instagram, GitHub
- Portrait: `src/assets/image/me/portrait.jpg` (replaced the 3D avatar)
- Links: LinkedIn, GitHub, Email hafidzzakky@gmail.com, Instagram, WhatsApp wa.me/6285602577078

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

**14 Active Projects.** Two Petrosea entries carry `images: []` because the screens are internal;
Showcase renders those as a text tile on mobile, a narrow modal on desktop, and no hover preview.

Projects:
1. Minerva - Mining Operations SaaS (no images)
2. Risk Monitoring Dashboards (no images)
3. Saka EIS — Oil & Gas invoicing (React/Next.js, Lead Frontend)
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

All images: `.webp` format. Showcase filters are a curated list (`All, React, Next JS, React Native, Vite`),
not derived from every tag.

---

## Owner Contact Info
- LinkedIn: https://www.linkedin.com/in/hafidzzakkyd/
- GitHub: https://github.com/hafidzzakky
- Email: hafidzzakky@gmail.com
- Instagram: https://instagram.com/hafidzzakkyd
- WhatsApp: https://wa.me/6285602577078
- Location: Jakarta, Indonesia

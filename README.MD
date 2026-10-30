# Canna For Twenty Coffee ☕🍃

An artisanal, single-page web application for **Canna For Twenty Coffee**, featuring micro-dosed organic botanical coffee blends and visual menu cards. Built with modern web standards, GSAP animations, ScrollTrigger scroll interactions, Tailwind CSS, and full dark mode support.

---

## 🎨 Design System & Palette (60-30-10 Rule)

Our design system uses warm, organic coffee tones accented by vibrant botanical emerald green:

- **Dominant (60%)**: Warm Parchment `#FAF7F2` (Light Mode) / Deep Charcoal `#0C0A09` (Dark Mode) — used for main backgrounds and layout body.
- **Secondary (30%)**: Warm Sand `#EADBC8` (Light Mode) / Warm Stone `#1C1917` (Dark Mode) — used for cards, subtle borders, and header backdrops.
- **Accent (10%)**: Botanical Emerald `#059669` (Light Mode) / `#10B981` (Dark Mode) — used for call-to-action buttons, badges, hover states, and the scroll progress indicator.

### Visual Style
- **Glassmorphism & Bento Grid**: Combines semi-transparent frosted card containers (`backdrop-blur-md`) with high-resolution menu imagery in a dynamic modular bento-grid layout.

### Contrast Check (C4)
- **Body Text**: `#1C1917` on `#FAF7F2` in light mode provides an **8.8:1 contrast ratio**. `#F5F5F4` on `#0C0A09` in dark mode provides a **15.2:1 contrast ratio**. Both far exceed the WCAG AA requirement of 4.5:1.

---

## 🚀 Key Features & Stack

- **Stack**: HTML5, Tailwind CSS (v4 CDN), JavaScript (ES6+), GSAP 3.13.0, ScrollTrigger.
- **GSAP Animations**:
  - Page-load intro timeline with `defaults`, staggers, position parameter overlaps (`"-=0.4"`, `"<"`), and explicit ease comments.
  - Interactive "Replay Intro" button.
- **ScrollTrigger Integration**:
  - Section reveal animations on scroll (`gsap.utils.toArray`).
  - Top scroll-progress bar scrubbed with `ease: "none"`.
  - Accessible animation guard using `gsap.matchMedia()` (`prefers-reduced-motion`).
- **Dark Mode**: Toggle button with local storage persistence (`localStorage`).
- **Responsive Layout**: Mobile-first design enhanced with Tailwind `md:` and `lg:` breakpoints.

---

## 📂 Suggested Git Commit Workflow

To satisfy the requirement of **4+ descriptive commits across Session A and Session B**:

### Session A Commits
1. `git commit -m "Add semantic HTML5 structure and responsive Tailwind layout"`
2. `git commit -m "Configure 60-30-10 palette tokens, dark mode toggle, and localStorage"`

### Session B Commits
3. `git commit -m "Implement GSAP intro timeline with replay button interaction"`
4. `git commit -m "Add ScrollTrigger section reveals, scrub progress bar, and reduced motion guard"`

---

## 🛠️ Local Setup & Deployment

1. Clone this repository:
   ```bash
   git clone [https://github.com/your-username/canna-for-twenty-coffee.git](https://github.com/your-username/canna-for-twenty-coffee.git)
# 🍣 Kō Sushi — Luxury Restaurant Landing Page

A fully responsive luxury sushi restaurant landing page built with **React 18 + Vite 5 + Tailwind CSS v3**.

## Tech Stack

- ⚛️  **React 18** — Component-based UI
- ⚡  **Vite 5** — Lightning-fast dev server & bundler
- 🎨  **Tailwind CSS v3** — Utility-first styling with custom luxury theme
- 🖋️  **Cormorant Garamond** + **Josefin Sans** — Luxury typography pair

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
ko-sushi/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component — assembles all sections
    ├── index.css             # Tailwind directives + global @layer styles
    ├── data/
    │   └── content.js        # All site copy, images, and data
    ├── hooks/
    │   └── useScrollReveal.js # IntersectionObserver scroll animation hook
    └── components/
        ├── Navbar.jsx         # Sticky nav + mobile hamburger menu
        ├── Hero.jsx           # Full-screen hero with Ken Burns animation
        ├── TodaysSpecials.jsx # 3-card specials grid
        ├── InteriorBanner.jsx # Full-width atmosphere banner
        ├── Specialities.jsx   # Two-column specialities layout
        ├── TrendingGrid.jsx   # CSS masonry photo grid
        ├── DiningEvents.jsx   # 3 event cards with overlays
        ├── ChefSection.jsx    # Chef bio + achievements
        ├── ExperienceBanner.jsx # Full-screen CTA banner
        ├── Footer.jsx         # 3-column footer
        └── Toast.jsx          # Global toast notification context
```

---

## Design System

| Token | Value |
|-------|-------|
| Gold | `#C9A24A` |
| Gold Light | `#E4C47A` |
| Ink (bg) | `#0A0A0A` |
| Charcoal | `#111111` |
| Surface | `#161616` |
| Parchment (text) | `#F0EBE0` |
| Muted | `#8A8070` |
| Display Font | Cormorant Garamond |
| UI Font | Josefin Sans |

---

## Sections

1. **Navbar** — Sticky with glassmorphism scroll effect + mobile menu
2. **Hero** — Fullscreen with parallax Ken Burns zoom + scroll hint
3. **Today's Special** — 3 sushi cards with order feedback
4. **Interior Banner** — Atmospheric full-width image with text overlay
5. **Our Specialities** — Side list + featured hero item
6. **Trending Sushi** — Masonry CSS grid with hover reveal labels
7. **Dining Events** — $500 / $1,000 / $1,500 event cards
8. **About Our Chef** — Two-column with floating stat card
9. **Experience Banner** — Full-width CTA with icons
10. **Footer** — Brand, navigation, contact info + copyright


A Valorant-inspired, dark-themed developer portfolio built with React, Vite, and Tailwind CSS. Features a tactical UI aesthetic with glassmorphism, smooth animations, and an immersive launch experience.

## Live Demo

[View Portfolio](portifolio-ochre-mu-57.vercel.app)

## Features

- **Launch Screen** — Unstyled HTML page with "Initialize Agent Portfolio" button and dramatic ripple reveal
- **Agent Loader** — Tactical loading sequence with progress bar and status messages
- **Background Music** — Ambient theme music with mute/unmute toggle
- **Animated Backgrounds** — Red particle canvas, floating orbs, and tactical HUD doodles
- **Staggered Animations** — Each section drops in with cascading delays using Framer Motion
- **Glassmorphic UI** — Backdrop blur cards with subtle red-tinted borders
- **Responsive Design** — Fully responsive across all screen sizes

## Sections

- **Hero** — Agent profile card, bio, CTA buttons, and stats
- **Arsenal** — Tech stack with SVG icons (React, Angular, Vue, TypeScript, etc.)
- **Missions** — Featured project (Parametric 3D Interior Design Tool) and side projects
- **Service Record** — Work experience timeline
- **Contact** — Gmail and LinkedIn links

## Tech Stack

- **React 19** — UI framework
- **Vite** — Build tool
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **React Icons** — Icon library
- **HTML5 Canvas** — Background particle effects and tactical doodles

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Pratham-30/portifolio.git

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── effects/       # StarCanvas, FloatingOrbs, SpaceDoodles
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Skills, Projects, Experience, Contact, LaunchScreen, AgentLoader
│   └── ui/            # Button, GlassCard, SectionHeader, Tag, ScrollReveal
├── data/
│   └── portfolio.js   # All portfolio data (skills, projects, experience, etc.)
├── hooks/
│   └── useScrollReveal.js
├── styles/
│   └── globals.css    # Tailwind theme config and custom styles
├── App.jsx
└── main.jsx
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `val-black` | `#0f1015` | Background |
| `val-dark` | `#1a1a23` | Card backgrounds |
| `accent-red` | `#ff4655` | Primary accent |
| `accent-darkred` | `#bd3944` | Secondary accent |
| `text-primary` | `#ece8e1` | Headings and body |
| `text-secondary` | `#768079` | Muted text |

## License

MIT

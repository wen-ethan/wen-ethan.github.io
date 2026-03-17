# wen-ethan.net

Personal portfolio website for Ethan Wen — engineering student interested in embedded systems, hardware–software interfaces, and applied research.

Live at: [wen-ethan.net](https://wen-ethan.net/) (deployed via Vercel)

---

## The Journey

This site has gone through several redesigns and one rebuild, each iteration driven by learning something new and wanting to do it better.

1. **Raw HTML + CSS** — A basic first attempt at a personal site. Functional, but rough around the edges; a decent introduction to how web pages are structured, nothing more.

2. **Bootstrap** — Redesigned using Bootstrap Studio, which made it look cleaner but at the cost of ownership. The WYSIWYG, plug-a-class-in nature of it made the result feel assembled rather than made. As such, fell out of love with it quickly, and never fully finished.

3. **Back to HTML + CSS** — During a break, stepped back and fully redesigned the site from scratch using plain HTML and CSS, without big frameworks or shortcuts; wanted to own every design decision and actually understand what was happening at each step. This became the definitive version of the site.

4. **React + Vite (current)** — After picking up React, rebuilt v3 as a faithful reimplementation; ultimately the same look and feel, just ported to a component-based architecture. React Router handles navigation cleanly, and Bulma was chosen for lightweight CSS utilities without the opinionated behavior of Bootstrap.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI component architecture |
| [Vite](https://vitejs.dev/) | Fast dev server and build tooling |
| [React Router DOM](https://reactrouter.com/) | Client-side SPA routing |
| [Bulma](https://bulma.io/) | CSS framework for layout and styling |
| [Vercel](https://vercel.com/) | Hosting and continuous deployment |

---

## Pages

- **Home** — Landing page with a brief intro
- **About** — Background and interests
- **Projects** — Showcase of notable work (see below)
- **Resume** — Professional summary and experience

---

## Featured Projects

### Spatial Computing Portfolio
Interactive AR and spatial computing projects built during a Digital Creators Internship, exploring 3D interaction, animation, and immersive storytelling for platforms like Apple Vision Pro.

### AP Physics C Notes
A notes website for AP Physics C: E&M, built while studying for the AP exam — one of the early projects that got the ball rolling on learning web development.

### Google Form Autofill
A Google Apps Script workflow that takes form responses and generates auto-filled, ready-to-submit PDFs. A practical automation tool built to solve a real problem.

### Blog Template
A reusable blog template designed for easy customization and deployment.

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
src/
├── components/         # Shared UI components (Nav, Footer, Carousel, Background)
├── pages/              # Top-level page views (Home, About, Projects, Resume)
│   └── projects/       # Individual project detail pages
├── App.jsx             # Route definitions and scroll-to-top behavior
└── main.jsx            # Application entry point
```

---

## Deployment

Hosted on Vercel with automatic deployments on push to `main`. The `vercel.json` config rewrites all routes to `index.html` to support client-side SPA routing.

---

*Built and maintained by Ethan Wen*

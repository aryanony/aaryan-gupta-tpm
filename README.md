<div align="center">

# ⚡ Aaryan Gupta — Portfolio

**Technical Project Manager · Health-Tech & SaaS · Jaipur, India**

*Bridging complex technology with seamless execution — so clinics, startups and product teams ship faster, smarter and at scale.*

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-aaaryangupta.com-00E8A8?style=for-the-badge&labelColor=020C09)](https://aryanony.github.io/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aryanony-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aryanony/)
[![Twitter](https://img.shields.io/badge/X_(Twitter)-@aryanony-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/aryanony)
[![Instagram](https://img.shields.io/badge/Instagram-@aryanony-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/aryanony)

---

</div>

## 🎯 About This Project

This is **not** a generic developer portfolio. It is a **conversion-optimised, AI-visible, SEO-dominant digital headquarters** built from the ground up for my Technical Project Management business — with a special focus on **doctors, clinic owners, Health-Tech founders** and clients from **Jaipur & Ahmedabad**.

Every pixel, every meta tag, every JSON-LD schema is engineered to:
- Rank on Google for high-intent local keywords
- Get quoted by AI engines (ChatGPT, Perplexity, Gemini)
- Convert visitors into booked calls within 60 seconds

## 🏗️ Architecture

This site uses a **Custom Static Site Generator (SSG)** — a data-driven build system that combines the simplicity of vanilla HTML/CSS/JS with the power of templated injection, giving us:

| Benefit | How |
|---|---|
| **Instant load times** | Zero runtime JavaScript frameworks — pure static HTML served from CDN |
| **Perfect SEO scores** | JSON-LD schemas, semantic HTML, sitemap, robots.txt — all baked in at build time |
| **Single source of truth** | All content lives in `data/*.json` — change once, update everywhere |
| **No vendor lock-in** | No React, no Next.js, no Gatsby — just standards-compliant web technologies |

```
How it works:

  data/config.json ─┐
  schema/*.json ────┤
  assets/css/*.css ──┤──▶ build.js ──▶ dist/ (production-ready site)
  *.html templates ──┘
```

## 📂 Project Structure

```
portfolio/
│
├── assets/                  # Design system & static assets
│   ├── css/                 # Stylesheets (critical, dark, light, animations)
│   ├── fonts/               # Self-hosted WOFF2 (Syne, DM Sans, DM Mono)
│   ├── images/              # Profile photos, icons, OG images
│   ├── js/                  # Modular vanilla JS (cursor, loader, theme, etc.)
│   └── video/               # Any video assets
│
├── data/                    # Content layer (JSON)
│   ├── config.json          # Master site configuration
│   ├── services.json        # Service offerings
│   ├── experience.json      # Work history & timeline
│   ├── testimonials.json    # Client testimonials
│   └── faq.json             # FAQ content (powers FAQ schema)
│
├── schema/                  # SEO structured data (JSON-LD)
│   ├── person.json          # Person schema
│   ├── website.json         # WebSite schema
│   ├── localbusiness.json   # LocalBusiness schema (GEO targeting)
│   └── faqpage.json         # FAQ schema (rich results)
│
├── seo/                     # SEO configuration files
│   ├── sitemap.xml          # XML sitemap
│   ├── robots.txt           # Crawler directives
│   └── manifest.json        # PWA manifest
│
├── blog/                    # Blog post templates
│
├── index.html               # Homepage template
├── about.html               # About page
├── services.html            # Services + pricing tables
├── work.html                # Case studies & projects
├── contact.html             # Contact form
├── jaipur.html              # Local SEO — Jaipur
├── ahmedabad.html           # Local SEO — Ahmedabad
├── for-doctors.html         # Dedicated doctor landing page
├── products.html            # Micro-SaaS product showcase
│
├── build.js                 # 🔧 Build engine (Node.js SSG)
│
└── dist/                    # 🚀 Production output (deploy THIS)
```

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | Semantic HTML5 |
| **Styling** | Vanilla CSS (custom properties, dark/light themes) |
| **Scripting** | Vanilla JavaScript (ES6+, modular) |
| **Typography** | Syne (display), DM Sans (body), DM Mono (code) — self-hosted WOFF2 |
| **Animations** | GSAP + ScrollTrigger (CDN), CSS keyframes |
| **3D Effects** | Three.js (CDN, lazy-loaded for hero section only) |
| **Build Tool** | Custom Node.js SSG (`build.js`) |
| **SEO** | JSON-LD, Open Graph, Twitter Cards, hreflang, GEO meta |
| **Deployment** | GitHub Pages / Vercel / Netlify |

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed

### Setup & Run

```bash
# 1. Clone the repository
git clone https://github.com/aryanony/portfolio.git
cd portfolio

# 2. Build the production site
node build.js

# 3. Preview locally
npx serve dist

# Open http://localhost:3000 in your browser
```

### Development Workflow

```bash
# Edit any template (index.html, about.html, etc.)
# or update data in data/config.json
# Then rebuild:
node build.js

# Preview changes:
npx serve dist
```

## 🎨 Design System

### Color Palette

| Token | Dark Mode | Light Mode |
|---|---|---|
| Primary | `#00E8A8` (Neon Teal) | `#0F766E` (Deep Teal) |
| Background | `#020C09` (Void Black) | `#F8FAFC` (Frost White) |
| Surface | `#0A2019` | `#FFFFFF` |
| Text | `#C8E8DC` | `#0F172A` |

### Typography Scale
- **Display (H1):** Syne ExtraBold, 3.815rem
- **Body:** DM Sans Regular, 1rem
- **Mono:** DM Mono, 0.875rem

## 📈 SEO & Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance (Mobile) | 92+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |

## 🗺️ Pages & Their Purpose

| Page | SEO Target | Purpose |
|---|---|---|
| `/` | Brand + primary keywords | Hook & convert visitors |
| `/about` | "Who is Aaryan Gupta" | AI entity training document |
| `/services` | Service keywords + pricing | Convert to booked calls |
| `/work` | Case study keywords | Build credibility |
| `/jaipur` | "Project Manager Jaipur" | Local GEO ranking |
| `/ahmedabad` | "IT PM Ahmedabad" | Local GEO ranking |
| `/for-doctors` | "Tech PM for clinics" | Doctor-specific conversion |
| `/products` | Micro-SaaS keywords | Product showcase |
| `/blog/*` | Long-tail health-tech queries | Content marketing engine |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Built with precision by [Aaryan Gupta](https://www.linkedin.com/in/aryanony/)**

*Technical Project Manager · Health-Tech & SaaS · Jaipur, India*

If this project inspired you, consider giving it a ⭐

</div>

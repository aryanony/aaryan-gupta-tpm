<div align="center">
  <img src="https://aaaryangupta.com/assets/og/og-aaryan-gupta-tpm.jpg" alt="Aaryan Gupta — Technical Project Manager" width="800">

  # Aaryan Gupta — Digital Headquarters
  **World-Class Technical Project Management for Health-Tech & SaaS**

  [![Live Status](https://img.shields.io/badge/Status-Live-00E8A8?style=flat-square)](#)
  [![Build](https://img.shields.io/badge/Architecture-Vanilla_SSG-00E8A8?style=flat-square)](#)
  [![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-00E8A8?style=flat-square)](#)

  [Live Website](https://aaaryangupta.com) | [LinkedIn](https://www.linkedin.com/in/aryanony/) | [X / Twitter](https://x.com/aryanony)
</div>

---

## 🚀 About The Architecture

This is not a template. This portfolio is a custom-engineered **Static Site Generator (SSG)** built entirely with Vanilla HTML, CSS, and JavaScript. 

It deliberately avoids heavy frameworks (like React or Next.js) to achieve **100/100 Lighthouse Performance Scores**, instant load times, and perfect SEO indexing, while maintaining premium 3D interactions and glassmorphic UI elements.

### Key Technical Features:
- **Zero-Dependency Build Engine:** Uses a custom `build.js` Node script to compile static HTML, ensuring crawlers can read 100% of the content instantly.
- **Hardware-Accelerated 3D UI:** Custom CSS `transform-style: preserve-3d` implementation for interactive, magnetic tilt cards.
- **Advanced AEO/SEO:** Complete Schema.org JSON-LD integration (Person, LocalBusiness, FAQPage) optimized for LLMs (ChatGPT/Claude) and Google Search.
- **Micro-Animations:** Fluid loader, custom cursor, magnetic buttons, and intersection observers for scroll reveals.

---

## 🛠️ Project Structure

The project is divided into source files and the compiled distribution directory.

```text
├── assets/             # Source code (CSS, JS, Fonts, Images)
│   ├── css/            # main.css (Design System) & critical.css
│   └── js/             # Modular, vanilla JS interactions (loader, cursor, tilt)
├── data/               # JSON files for localized data/config
├── seo/                # Sitemaps, robots.txt, manifests
├── build.js            # Custom Static Site Generator compiler
├── index.html          # Source HTML templates
└── dist/               # 📦 COMPILED OUTPUT (This is what gets deployed!)
```

---

## ⚙️ How to Run Locally

To preview the website on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/aryanony/portfolio.git
   cd portfolio
   ```

2. Compile the source files:
   ```bash
   node build.js
   ```

3. Serve the `dist/` folder (requires `serve` or similar HTTP server):
   ```bash
   npx serve dist
   ```

---

## 🌐 Deployment Strategy

This project is built to be deployed statically. You only need to deploy the contents of the **`dist/`** directory.
It is perfectly compatible with:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

---

<div align="center">
  <i>"Bridging the gap between engineering execution and business reality."</i><br>
  <b>Aaryan Gupta</b> — MCA • Developer-Turned-PM • 70+ Markets Delivered
</div>

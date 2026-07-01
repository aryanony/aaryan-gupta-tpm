# Aaryan Gupta — Technical Project Manager Portfolio

Welcome to the source code for my personal portfolio website, designed to be a conversion-optimized, ultra-engaging digital headquarters for my Technical Project Management business.

## 🚀 Live Demo
[View Live Portfolio](https://aaryangupta.com) *(Update with your actual domain)*

## 🛠️ Architecture & Tech Stack
This project is built focusing on extreme performance, SEO optimization, and a high-end UI/UX, avoiding heavy JavaScript frameworks where they are not needed.

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design System:** Custom CSS properties, CSS Grid/Flexbox, Light/Dark Theme
- **Animations:** CSS transitions, requestAnimationFrame, IntersectionObserver for scroll effects
- **Build System:** Custom Node.js build script (`build.js`) for template injection and static site generation
- **Hosting/Deployment:** Vercel / GitHub Pages

## 📂 Project Structure
```
├── assets/
│   ├── css/          # Modular CSS files (critical, main, animations, light/dark themes)
│   ├── fonts/        # Preloaded custom fonts (Syne, DM Sans)
│   ├── images/       # WebP/AVIF optimized images
│   └── js/           # Modular vanilla JS components (theme, cursor, loader, scroll, etc.)
├── data/
│   └── config.json   # Centralized content and configuration for the site
├── schema/           # JSON-LD Structured Data for SEO (Person, Website, LocalBusiness, FAQ)
├── seo/              # SEO and PWA assets (robots.txt, manifest, sitemap)
├── build.js          # Node.js script to compile HTML and inject config/schema
├── index.html        # Main template file
├── package.json      # NPM scripts and dependencies
└── vercel.json       # Vercel deployment configuration
```

## ⚙️ How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/aryanony/portfolio.git
   cd portfolio
   ```
2. **Install dependencies (if any):**
   ```bash
   npm install
   ```
3. **Build and Serve:**
   ```bash
   npm run dev
   ```
   This command runs `node build.js` to generate the static files into the `dist/` folder and then serves them using `serve`.

## 🚀 Deployment to GitHub Pages
To replace your old portfolio with this new one on GitHub Pages:
1. Clear the old repository contents (except `.git` folder) or simply overwrite them with these new files.
2. In your repository settings, set the source for GitHub Pages to be GitHub Actions or the `main` branch. 
3. Since this uses a build step (`node build.js`), you can use a GitHub Action to build and deploy the `dist/` folder, OR simply push the generated `dist/` folder contents to a `gh-pages` branch. 
*Note: If using Vercel (as per the included `vercel.json`), simply connect the repository to Vercel, and it will deploy automatically on push.*

## ✨ Key Features
- **Magnetic Buttons & Custom Cursor:** High-end interactive feel.
- **3D Tilt Cards:** Premium depth effects on hover.
- **Dynamic Typewriter & Marquee:** Engaging text animations.
- **Micro-SaaS & Health-Tech Focus:** Content tailored for converting high-value clients.
- **100/100 Lighthouse Performance:** Preloaded fonts, deferred non-critical CSS, and zero render-blocking scripts.

## 📄 License
Copyright © 2026 Aaryan Gupta. All rights reserved.

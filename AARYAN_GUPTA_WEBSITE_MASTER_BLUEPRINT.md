# AARYAN GUPTA — PORTFOLIO WEBSITE MASTER BLUEPRINT
## Complete Architecture, Design System, SEO/GEO/AEO Strategy & Build Specification
### Version 2.0 · Vanilla HTML/CSS/JS · Production-Grade · 2025–2027

---

> **HOW TO USE THIS DOCUMENT**
> This is a complete, self-contained specification for building Aaryan Gupta's personal portfolio website.
> Every decision, file, section, color, font, animation, schema, and SEO signal is defined here.
> Build exactly as specified — no assumptions, no shortcuts, no omissions.

---

## ━━━ SECTION 0: IDENTITY CONSTANTS (CONFIG LAYER) ━━━

All values below are **dynamic config** — stored in `data/config.json` and injected at build time.
Never hardcode these in HTML. Reference them via a build script or JS config loader.

```json
{
  "site": {
    "domain": "aaaryangupta.com",
    "protocol": "https",
    "url": "https://aaaryangupta.com",
    "name": "Aaryan Gupta",
    "tagline": "Technical Project Manager | Health-Tech & SaaS | Jaipur, India",
    "description": "Aaryan Gupta is a freelance Technical Project Manager specializing in Health-Tech digital transformation, SaaS project coordination, and AI automation. MCA graduate. Developer-turned-PM. 70+ markets delivered.",
    "locale": "en_IN",
    "language": "en",
    "timezone": "Asia/Kolkata"
  },
  "person": {
    "name": "Aaryan Gupta",
    "handle": "aryanony",
    "title": "Technical Project Manager",
    "email": "aryanrajk63@gmail.com",
    "phone": "+916205650368",
    "whatsapp": "916205650368",
    "location": {
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "countryCode": "IN",
      "secondary": "Ahmedabad",
      "postalCode": ""
    }
  },
  "social": {
    "linkedin": "https://linkedin.com/in/aryanony/",
    "github": "https://github.com/aryanony",
    "twitter": "https://x.com/aryanony/",
    "instagram": "https://instagram.com/aryanony/",
    "portfolio": "https://aryanony.github.io/portfolio",
    "projectport": "https://projectsport.vercel.app/",
    "uibrium": "https://uibrium.vercel.app/"
  },
  "meta": {
    "ogImage": "/assets/og/og-aaryan-gupta-tpm.jpg",
    "twitterCard": "summary_large_image",
    "themeColor": "#00C896",
    "tileColor": "#03100D"
  }
}
```

---

## ━━━ SECTION 1: PROJECT ARCHITECTURE — FULL FILE TREE ━━━

```
aaaryangupta.com/
│
├── index.html                          # Homepage (SPA-style single page)
├── about.html                          # Extended about page (SEO depth)
├── services.html                       # All services (dedicated SEO page)
├── work.html                           # Portfolio/projects (dedicated)
├── blog/                               # Blog directory (AEO + GEO engine)
│   ├── index.html                      # Blog listing page
│   ├── technical-pm-healthtech.html    # Article 1
│   ├── dev-turned-pm-guide.html        # Article 2
│   ├── healthtech-india-opportunity.html # Article 3
│   └── ai-tools-for-project-managers.html # Article 4
├── contact.html                        # Contact page (standalone for SEO)
├── privacy-policy.html                 # E-E-A-T trust signal
├── terms.html                          # Legal — trust signal
│
├── assets/
│   ├── css/
│   │   ├── critical.css                # Above-the-fold CSS (inlined in <head>)
│   │   ├── main.css                    # Full stylesheet (deferred)
│   │   ├── animations.css              # All keyframes, transitions
│   │   ├── dark.css                    # Dark mode: neon/glassmorphism
│   │   ├── light.css                   # Light mode: glassmorphism/material
│   │   └── print.css                   # Print stylesheet
│   │
│   ├── js/
│   │   ├── app.js                      # Core app init, config loader
│   │   ├── theme.js                    # Dark/light toggle + persistence
│   │   ├── cursor.js                   # Custom cursor logic
│   │   ├── loader.js                   # Page loader animation
│   │   ├── scroll.js                   # Scroll reveal, parallax, active nav
│   │   ├── animations.js               # GSAP-free custom animation engine
│   │   ├── tilt.js                     # 3D card tilt (vanilla, <2KB)
│   │   ├── typewriter.js               # Hero typewriter effect
│   │   ├── counter.js                  # Number counter on scroll
│   │   ├── timeline.js                 # Experience timeline interactivity
│   │   ├── faq.js                      # FAQ accordion
│   │   ├── form.js                     # Contact form + validation
│   │   ├── marquee.js                  # Ticker/marquee control
│   │   ├── particles.js                # Lightweight particle background
│   │   ├── magnetic.js                 # Magnetic button effect
│   │   ├── storage.js                  # localStorage/sessionStorage utils
│   │   ├── cookies.js                  # Cookie consent + management
│   │   ├── pwa.js                      # PWA install prompt
│   │   ├── analytics.js                # GA4 (deferred, privacy-safe)
│   │   └── config.js                   # Loads data/config.json dynamically
│   │
│   ├── fonts/
│   │   ├── Syne-Bold.woff2             # Display headings
│   │   ├── Syne-ExtraBold.woff2        # Hero title
│   │   ├── DMSans-Regular.woff2        # Body text
│   │   ├── DMSans-Medium.woff2         # Body medium
│   │   ├── DMSans-Light.woff2          # Body light
│   │   └── DMMono-Regular.woff2        # Labels, code, mono
│   │
│   ├── images/
│   │   ├── profile/
│   │   │   ├── aaryan-gupta-tpm.webp   # Main profile photo
│   │   │   ├── aaryan-gupta-tpm.avif   # AVIF version
│   │   │   └── aaryan-gupta-tpm-thumb.webp # 80px thumbnail
│   │   ├── projects/
│   │   │   ├── projectport-preview.webp
│   │   │   ├── uibrium-preview.webp
│   │   │   └── aibot-preview.webp
│   │   ├── og/
│   │   │   └── og-aaryan-gupta-tpm.jpg # 1200x630px Open Graph image
│   │   ├── icons/
│   │   │   ├── favicon.ico
│   │   │   ├── favicon-16.png
│   │   │   ├── favicon-32.png
│   │   │   ├── apple-touch-icon.png    # 180x180
│   │   │   ├── android-192.png
│   │   │   └── android-512.png
│   │   └── bg/
│   │       ├── grid-dark.svg           # Background grid SVG (dark)
│   │       └── grid-light.svg          # Background grid SVG (light)
│   │
│   └── video/
│       └── hero-bg.mp4                 # Optional: compressed hero BG video
│
├── data/
│   ├── config.json                     # Site identity constants (above)
│   ├── services.json                   # All service offerings + pricing
│   ├── projects.json                   # Portfolio projects data
│   ├── experience.json                 # Work history structured data
│   ├── skills.json                     # Tech skills by category
│   ├── testimonials.json               # Client testimonials
│   ├── faq.json                        # FAQ Q&A pairs
│   └── blog-meta.json                  # Blog post metadata index
│
├── schema/
│   ├── person.json                     # Person schema template
│   ├── website.json                    # WebSite schema
│   ├── faqpage.json                    # FAQPage schema
│   ├── localbusiness.json              # LocalBusiness schema (Jaipur)
│   ├── service.json                    # Service schema
│   └── breadcrumb.json                 # BreadcrumbList for inner pages
│
├── seo/
│   ├── sitemap.xml                     # Dynamic XML sitemap
│   ├── sitemap-images.xml              # Image sitemap
│   ├── robots.txt                      # Crawl directives
│   ├── manifest.json                   # PWA web app manifest
│   ├── browserconfig.xml               # Windows tile config
│   └── .htaccess                       # Apache: redirects, cache, gzip
│
├── _headers                            # Cloudflare Pages headers
├── _redirects                          # Cloudflare/Netlify redirects
├── netlify.toml                        # Netlify config (if used)
├── vercel.json                         # Vercel config (if used)
└── build.js                            # Node build script: inject config, minify
```

---

## ━━━ SECTION 2: DESIGN SYSTEM ━━━

### 2.1 Color Architecture

```css
/* ─── DARK MODE: Neon-on-void — inspired by Linear, Vercel, Raycast ─── */
:root[data-theme="dark"] {
  /* Backgrounds — layered depth */
  --bg-void:      #020C09;   /* True void — page base */
  --bg-deep:      #03100D;   /* Primary surface */
  --bg-surface:   #071A14;   /* Elevated surface */
  --bg-card:      #0A2019;   /* Card background */
  --bg-card-hi:   #0D2820;   /* Card hover state */
  --bg-glass:     rgba(10, 32, 25, 0.65); /* Glassmorphism base */
  --bg-overlay:   rgba(2, 12, 9, 0.92);   /* Modal overlay */

  /* Neon Accent Palette — teal-cyan-aqua family */
  --neon-primary:  #00E8A8;  /* Primary neon — electric teal-green */
  --neon-teal:     #00C896;  /* Deep teal neon */
  --neon-cyan:     #00F5D4;  /* Bright cyan neon */
  --neon-aqua:     #00D4E8;  /* Blue-teal aqua */
  --neon-blue:     #0066FF;  /* Deep electric blue */
  --neon-dark:     #007A5E;  /* Muted neon — secondary */

  /* Neon Glows — for box-shadow, text-shadow */
  --glow-primary:  0 0 20px rgba(0, 232, 168, 0.35), 0 0 60px rgba(0, 232, 168, 0.12);
  --glow-teal:     0 0 20px rgba(0, 200, 150, 0.3);
  --glow-cyan:     0 0 30px rgba(0, 245, 212, 0.2);
  --glow-blue:     0 0 20px rgba(0, 102, 255, 0.25);
  --glow-card:     0 0 0 1px rgba(0, 232, 168, 0.08), 0 4px 24px rgba(0,0,0,0.5);
  --glow-card-hover: 0 0 0 1px rgba(0, 232, 168, 0.2), 0 8px 40px rgba(0,0,0,0.7), 0 0 30px rgba(0, 232, 168, 0.12);

  /* Text */
  --text-bright:   #F0FBF5;  /* Near-white with green tint */
  --text-primary:  #C8E8DC;  /* Primary text */
  --text-secondary:#7AADA0;  /* Secondary text */
  --text-muted:    #3D6B60;  /* Muted / placeholder */
  --text-inverse:  #020C09;  /* Text on neon bg */

  /* Borders */
  --border-void:   rgba(0, 232, 168, 0.04);
  --border-subtle: rgba(0, 232, 168, 0.09);
  --border-accent: rgba(0, 232, 168, 0.22);
  --border-strong: rgba(0, 232, 168, 0.5);
  --border-neon:   rgba(0, 232, 168, 0.8);
}

/* ─── LIGHT MODE: Glassmorphism + Material Design + Cupertino ─── */
:root[data-theme="light"] {
  /* Backgrounds — frosted glass layers */
  --bg-void:      #E8F7F2;
  --bg-deep:      #F0FBF8;
  --bg-surface:   #FFFFFF;
  --bg-card:      rgba(255, 255, 255, 0.85);  /* Glass card */
  --bg-card-hi:   rgba(255, 255, 255, 0.95);
  --bg-glass:     rgba(255, 255, 255, 0.60);  /* Frosted glass */
  --bg-overlay:   rgba(240, 251, 248, 0.92);

  /* Accent Palette — deep teal, dark blue, rich cyan */
  --neon-primary:  #006B52;  /* Deep forest teal */
  --neon-teal:     #008C72;  /* Mid teal */
  --neon-cyan:     #0099A8;  /* Deep cyan-blue */
  --neon-aqua:     #0077A8;  /* Blue-teal */
  --neon-blue:     #0055CC;  /* Deep material blue */
  --neon-dark:     #004A3C;  /* Darkest teal */

  /* Shadows — material elevation + Cupertino depth */
  --shadow-sm:   0 1px 4px rgba(0, 80, 60, 0.08);
  --shadow-md:   0 4px 16px rgba(0, 80, 60, 0.12), 0 1px 4px rgba(0, 80, 60, 0.06);
  --shadow-lg:   0 8px 32px rgba(0, 80, 60, 0.15), 0 2px 8px rgba(0, 80, 60, 0.08);
  --shadow-xl:   0 16px 48px rgba(0, 80, 60, 0.18), 0 4px 16px rgba(0, 80, 60, 0.1);
  --shadow-glass: 0 8px 32px rgba(0, 80, 60, 0.12), inset 0 1px 0 rgba(255,255,255,0.6);

  /* Text */
  --text-bright:   #03100D;
  --text-primary:  #0A2019;
  --text-secondary:#1F5A48;
  --text-muted:    #5A8A7A;
  --text-inverse:  #FFFFFF;

  /* Borders — material dividers */
  --border-void:   rgba(0, 107, 82, 0.05);
  --border-subtle: rgba(0, 107, 82, 0.10);
  --border-accent: rgba(0, 107, 82, 0.25);
  --border-strong: rgba(0, 107, 82, 0.55);
  --border-neon:   rgba(0, 107, 82, 0.80);
}
```

### 2.2 Typography System

```css
/* Typefaces */
--font-display: 'Syne', system-ui, sans-serif;     /* Headings — geometric authority */
--font-body:    'DM Sans', system-ui, sans-serif;  /* Body — humanist legibility */
--font-mono:    'DM Mono', 'Fira Code', monospace; /* Labels, code, badges */

/* Scale — Major Third (1.250 ratio) */
--text-xs:   0.64rem;   /* 10.24px — micro labels */
--text-sm:   0.75rem;   /* 12px — captions */
--text-base: 0.875rem;  /* 14px — body small */
--text-md:   1rem;      /* 16px — body default */
--text-lg:   1.125rem;  /* 18px — body large */
--text-xl:   1.25rem;   /* 20px — lead text */
--text-2xl:  1.563rem;  /* 25px — h4 */
--text-3xl:  1.953rem;  /* 31px — h3 */
--text-4xl:  2.441rem;  /* 39px — h2 */
--text-5xl:  3.052rem;  /* 49px — h1 page */
--text-6xl:  3.815rem;  /* 61px — hero title */
--text-7xl:  4.768rem;  /* 76px — hero large */

/* Weights */
--weight-light:     300;
--weight-regular:   400;
--weight-medium:    500;
--weight-semibold:  600;
--weight-bold:      700;
--weight-extrabold: 800;

/* Letter spacing */
--tracking-tight:   -0.04em;   /* Display headings */
--tracking-snug:    -0.02em;   /* Subheadings */
--tracking-normal:   0em;
--tracking-wide:     0.04em;   /* Body */
--tracking-wider:    0.1em;    /* Labels */
--tracking-widest:   0.2em;    /* Eyebrow caps */

/* Line heights */
--leading-tight:  1.05;   /* Display */
--leading-snug:   1.25;   /* Headings */
--leading-normal: 1.5;    /* Body */
--leading-relaxed: 1.7;   /* Long-form */
--leading-loose:  1.9;    /* Descriptive text */
```

### 2.3 Spacing & Grid

```css
/* Base unit: 4px */
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */

/* Container */
--container-max:  1200px;
--container-pad:  clamp(1.25rem, 4vw, 2.5rem);

/* Border radius — edgy, minimal rounding (not circular) */
--radius-sm:  4px;    /* Inputs, small chips */
--radius-md:  8px;    /* Buttons, cards inner */
--radius-lg:  12px;   /* Cards */
--radius-xl:  16px;   /* Large cards */
--radius-2xl: 20px;   /* Section blocks */
/* AVOID: 50%, 100px, pill shapes on major elements */

/* Section padding */
--section-pad: clamp(64px, 8vw, 120px) 0;
```

### 2.4 Icon System

**Use Phosphor Icons** (phosphoricons.com) — 1,000+ consistent SVG icons.
Method: Load SVG sprite inline. Do NOT use icon fonts (hurt performance + accessibility).

```html
<!-- Load only needed icons as inline SVG symbols — zero HTTP requests -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="ico-briefcase" viewBox="0 0 256 256">...</symbol>
  <symbol id="ico-heartbeat" viewBox="0 0 256 256">...</symbol>
  <!-- etc. -->
</svg>
<!-- Use as: -->
<svg width="20" height="20" aria-hidden="true"><use href="#ico-briefcase"/></svg>
```

Icons to include in sprite (all from Phosphor):
`briefcase, heartbeat, robot, code, globe, map-pin, phone, envelope, linkedin-logo, github-logo, twitter-logo, instagram-logo, arrow-right, arrow-square-out, check-circle-fill, plus-circle, minus-circle, calendar-blank, paper-plane-tilt, moon, sun, list, x, caret-down, buildings, package, wrench, blueprint, chart-line-up, users, star-fill, quotes, funnel, play, pause, trending-up, database, device-mobile, shield-check, lightning, sparkle`

---

## ━━━ SECTION 3: PAGE-BY-PAGE CONTENT ARCHITECTURE ━━━

### 3.1 index.html — Homepage

**URL:** `https://aaaryangupta.com/`
**Title:** `Aaryan Gupta — Technical Project Manager | Health-Tech & SaaS | Jaipur`
**Meta:** 155 chars: `Freelance Technical PM specializing in Health-Tech, SaaS & AI delivery. 70+ markets. MCA graduate. Developer-turned-PM. Jaipur & Ahmedabad. Book a free 30-min call.`

#### Sections (in exact order):

```
1.  <header> NAV
2.  #hero         — Hero: title, subtitle, CTAs, proof bar
3.  .marquee      — Infinite ticker (services + keywords)
4.  #about        — About: photo, story, skills, credentials
5.  #why          — Why Me: 4 differentiators (3D tilt cards)
6.  #services     — Services: 4 service cards (featured layout)
7.  #work         — Signature Projects: 3 project cards
8.  #experience   — Interactive experience timeline
9.  #skills       — Skills & stack by category
10. #industries   — Industries served (Health-Tech focus)
11. #process      — How I work: 5-step process diagram
12. #testimonials — Client testimonials: 3 cards
13. #faq          — FAQ accordion (schema-powered)
14. #cta          — CTA banner with ambient background
15. #contact      — Contact: info + form
16. <footer>      — Footer: links, social, legal, status
```

---

### 3.2 Hero Section — Deep Spec

**Visual Design (dark mode):**
- Background: `var(--bg-void)` with perspective CSS grid (green lines, `opacity: 0.04`)
- Two ambient orbs: radial-gradient circles, `filter: blur(100px)`, CSS animation `drift`
- Particle layer: 40 particles, `<canvas>` element, `requestAnimationFrame` loop, 2KB JS
- NO background image files — all CSS/canvas

**Content structure:**
```
BADGE ROW:
  [● live dot] "Available for projects · Jaipur, Ahmedabad & Remote"
  Font: DM Mono, 11.5px, letter-spacing: 0.15em

H1 TITLE (3 lines):
  Line 1: "Technical Project"
  Line 2: "Manager for"
  Line 3: [accent] "Health-Tech" & SaaS
  Font: Syne ExtraBold, clamp(40px, 7vw, 80px), tracking: -0.04em
  Animation: fade-up stagger, 0.15s between lines

SUBTITLE (1 paragraph, max 180 chars):
  "I bridge complex technology with seamless execution — delivering
   healthcare, SaaS, and product teams from ambiguity to shipped.
   MCA graduate · Developer-turned-PM · 70+ markets delivered."
  Font: DM Sans Light, 18px, color: var(--text-secondary)

ACTION ROW:
  [Book a Free 30-Min Call]  ← Primary CTA (neon bg)
  [See My Work →]            ← Secondary (ghost border)

PROOF BAR (4 stats, horizontal dividers):
  70+  Markets Delivered
  20+  Projects Managed
  Health-Tech  Primary Specialization
  Jaipur  Priority Market · Remote-First

SCROLL INDICATOR:
  Animated down-arrow, CSS keyframe, disappears on scroll
```

**JavaScript behaviors:**
- Typewriter effect on H1 accent word cycling: `"Health-Tech"` → `"SaaS"` → `"HealthTech"` → repeat
- Counter animation: numbers count up when scrolled into view
- Hero badge: live pulse dot (CSS animation)
- Magnetic effect on CTA button: follows cursor within 60px radius

---

### 3.3 Experience Section — Interactive Timeline

**Left panel:** Vertical timeline with 4 role entries
**Right panel:** Detail card — swaps on timeline click

```
Timeline entries (exact roles):
1. Associate Project Manager | Oblinex Pvt. Ltd. | May 2026–Present
2. Frontend Web3 Developer Intern | MyDigiShell | Apr 2025–Feb 2026
3. Digital Marketer & E-Commerce Strategist | Elipact | Nov 2021–Mar 2022
4. Web Developer & WordPress Specialist | Ipistis + Startup Web Support | Aug 2021–Nov 2021

Detail bullets for Role 1 (Oblinex):
- Managing end-to-end delivery across 70+ international markets — full lifecycle PM
- Cross-functional team coordination via structured ticketing; sprint governance
- VPS provisioning, Ubuntu server setup, SSL, domain config, database migration (Hostinger)
- Android APK + iOS App Store release cycles via QA and client acceptance workflows
- Post-delivery upselling: identifying scope additions, contributing to revenue expansion
- Centralised credential governance via private Git repositories

Detail bullets for Role 2 (MyDigiShell):
- Coordinated multi-project Web3 frontend delivery over 11 months
- Enforced cross-browser QA; blockchain wallet integration (React.js, Tailwind, Web3)
- Pre-release performance optimization across all decentralised application deliveries
```

**JS behavior:** Click timeline item → fade out panel → swap content → fade in. Active item gets neon dot + accent line. Keyboard navigable (arrow keys).

---

### 3.4 Services Section — 4 Cards

```json
[
  {
    "id": "tpm",
    "icon": "blueprint",
    "title": "Technical Project Management",
    "tagline": "End-to-end delivery coordination. Agile-first. Full lifecycle ownership.",
    "bullets": ["Sprint planning & backlog management","Cross-functional team leadership","QA validation & release governance","Stakeholder reporting","Play Store & App Store launches"],
    "pricing_india": "₹25,000/project",
    "pricing_global": "$500/project",
    "featured": true
  },
  {
    "id": "healthtech",
    "icon": "heartbeat",
    "title": "Health-Tech Consulting",
    "tagline": "For doctors and clinics who need a PM who understands clinical reality.",
    "bullets": ["Clinic digitization strategy","Patient management system PM","EMR & telemedicine coordination","Clinical workflow mapping","HealthTech startup advisory"],
    "pricing_india": "₹20,000/month",
    "pricing_global": "$400/month",
    "featured": false
  },
  {
    "id": "ai-saas",
    "icon": "robot",
    "title": "AI Automation & Micro-SaaS",
    "tagline": "Build AI-powered tools once. Deploy for 100+ clients. Client pays infrastructure.",
    "bullets": ["WhatsApp AI auto-reply bots","AI lead qualification agents","Clinic appointment systems","AI customer support agents","Custom micro-SaaS products"],
    "pricing_india": "₹4,000 one-time",
    "pricing_global": "$69 one-time",
    "featured": false
  },
  {
    "id": "maintenance",
    "icon": "wrench",
    "title": "Website Maintenance",
    "tagline": "Ongoing management for clinics, businesses, and SaaS teams.",
    "bullets": ["Uptime monitoring & security patches","Performance optimization","Monthly SEO health audits","Content updates (10/month)","Analytics reporting"],
    "pricing_india": "From ₹8,000/month",
    "pricing_global": "From $149/month",
    "featured": false
  }
]
```

**Card design (dark mode):** Neon border on hover, glow shadow, background glass layer, icon morphs to filled neon on hover.
**Card design (light mode):** Elevated glassmorphism — `backdrop-filter: blur(20px)`, material shadow, colored top border strip.

---

### 3.5 Industries Section — NEW

**Purpose:** Explicitly targeting doctor/HealthTech audience + AEO signals

```
Section heading: "Industries I Serve"
Subheading: "Specialized in Health-Tech. Proficient across every vertical."

Industry cards (8 total):
1. Healthcare & Clinics ← FEATURED (larger card, different bg)
2. Health-Tech Startups ← FEATURED
3. SaaS & Software Products
4. E-Commerce & D2C
5. EdTech
6. Web3 & Blockchain
7. Digital Agencies
8. Real Estate & PropTech

Each card:
  - Icon (Phosphor SVG)
  - Industry name
  - 1-line description (12 words max)
  - "Learn more →" link to relevant service

Healthcare card content:
  "From single-physician clinics to multi-specialty hospitals — I translate clinical
  workflows into working software without the usual tech chaos."
```

---

### 3.6 Process Section — How I Work

```
Section heading: "How Every Engagement Runs"
Subheading: "No ambiguity. No surprises. Delivery by design."

5 steps (horizontal on desktop, vertical on mobile):

1. DISCOVER
   Icon: magnifying-glass
   "Requirements gathering — in writing, not verbal.
   Stakeholder alignment before a single line of code."

2. SCOPE
   Icon: blueprint
   "Feature specs, acceptance criteria, tech stack confirmation.
   Milestone schedule and payment structure agreed upfront."

3. EXECUTE
   Icon: lightning
   "Sprint-based delivery with daily status tracking.
   Blockers resolved before they become delays."

4. VALIDATE
   Icon: shield-check
   "QA cycles against defined acceptance criteria.
   UAT with client sign-off before any production push."

5. DELIVER
   Icon: paper-plane-tilt
   "Production deployment, handoff documentation,
   and 30-day post-launch support included."

Visual: Horizontal connector line between steps (desktop).
       Active step highlights on scroll progress.
       Mobile: vertical accordion.
```

---

### 3.7 Testimonials Section

```
3 testimonials from data/testimonials.json:

[
  {
    "id": "t1",
    "name": "Dr. Rajesh M.",
    "role": "General Physician",
    "location": "Jaipur",
    "initials": "DR",
    "stars": 5,
    "text": "Aaryan understood our clinic workflow before recommending any technology. He didn't just manage a project — he translated clinical reality into a product the staff actually uses every day.",
    "category": "healthtech"
  },
  {
    "id": "t2",
    "name": "Samira K.",
    "role": "CTO, HealthTech Startup",
    "location": "Ahmedabad",
    "initials": "SK",
    "stars": 5,
    "text": "Most PMs can't challenge engineering decisions. Aaryan flagged a critical API integration risk before it hit production — saving us three weeks and a painful rollback.",
    "category": "healthtech"
  },
  {
    "id": "t3",
    "name": "Michael T.",
    "role": "Founder, SaaS Platform",
    "location": "London, UK",
    "initials": "MT",
    "stars": 5,
    "text": "Cross-timezone delivery with zero confusion. Clear sprint goals, release checklists, aligned stakeholders every step. This is what serious project management looks like.",
    "category": "saas"
  }
]
```

---

### 3.8 FAQ Section — AEO Optimized

```json
[
  {"q": "Who is Aaryan Gupta?", "a": "Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation and SaaS project coordination. MCA graduate (AKTU, 2025) with a software engineering background, managing 20+ projects across 70+ global markets."},
  {"q": "What does a Technical Project Manager do?", "a": "A Technical PM owns the full project lifecycle — from requirement scoping through deployment and release governance. Unlike traditional PMs, a technical PM understands codebases, challenges engineering estimates, identifies technical debt, and prevents costly misunderstandings before they happen."},
  {"q": "Does Aaryan Gupta work with doctors and clinics?", "a": "Yes — health-tech is a primary specialization. Aaryan helps doctors, clinic owners, and hospital administrators digitize clinical workflows, build patient management systems, and coordinate healthcare app development without technical chaos. Serving Jaipur, Ahmedabad, and all of India."},
  {"q": "Do you only work in Jaipur and Ahmedabad?", "a": "No — Jaipur and Ahmedabad are priority local markets, but Aaryan manages projects globally across 70+ countries via remote-first workflows. Current clients span India, UAE, UK, USA, Europe, and Southeast Asia."},
  {"q": "Is the 30-minute consultation free?", "a": "Yes — completely free, no sales pitch. In 30 minutes: project scope clarity, how similar challenges were solved, and honest assessment of whether there's a fit. Even without engaging, you leave with at least one actionable insight."},
  {"q": "What makes a developer-background PM different?", "a": "A PM who can read code challenges developer estimates, spots scope creep, understands technical debt, and earns the engineering team's respect. This changes every project conversation — fewer surprises, faster decisions, better outcomes."},
  {"q": "What industries does Aaryan Gupta serve?", "a": "Primary: Healthcare (clinics, hospitals, HealthTech startups). Also: SaaS, E-commerce, EdTech, Web3/Blockchain, Real Estate, and Digital Agencies. Health-tech clients in Jaipur and Ahmedabad receive priority."},
  {"q": "What is Aaryan Gupta's pricing?", "a": "Technical Project Management starts at ₹25,000 per project (India) or $500 globally. Health-Tech Consulting from ₹20,000/month. AI Automation from ₹4,000 one-time. Website Maintenance from ₹8,000/month. Free 30-minute consultation to scope your needs."}
]
```

---

## ━━━ SECTION 4: SEO ARCHITECTURE ━━━

### 4.1 Head Template (Every Page)

```html
<head>
  <!-- ① PERFORMANCE CRITICAL — inline above the fold -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- ② PRELOAD — critical resources before browser discovers them -->
  <link rel="preload" href="/assets/fonts/Syne-ExtraBold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/DMSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/css/critical.css" as="style">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- ③ CRITICAL CSS — inlined, never render-blocking -->
  <style>[INLINED critical.css content here]</style>

  <!-- ④ TITLE + META SEO -->
  <title>Aaryan Gupta — Technical Project Manager | Health-Tech & SaaS | Jaipur</title>
  <meta name="description" content="Freelance Technical PM for Health-Tech & SaaS. 70+ markets delivered. Developer-turned-PM. MCA graduate. Serving Jaipur, Ahmedabad & globally. Book a free 30-min call.">
  <meta name="keywords" content="Technical Project Manager India, Health Tech Project Manager Jaipur, IT Project Manager Ahmedabad, Freelance Technical PM, SaaS Project Coordinator India, Aaryan Gupta, aryanony">
  <meta name="author" content="Aaryan Gupta">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <link rel="canonical" href="https://aaaryangupta.com/">

  <!-- ⑤ GEO TARGETING META -->
  <meta name="geo.region" content="IN-RJ">
  <meta name="geo.placename" content="Jaipur, Rajasthan, India">
  <meta name="geo.position" content="26.9124;75.7873">
  <meta name="ICBM" content="26.9124, 75.7873">
  <meta name="DC.language" content="en">

  <!-- ⑥ OPEN GRAPH (Social) -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://aaaryangupta.com/">
  <meta property="og:site_name" content="Aaryan Gupta — Technical Project Manager">
  <meta property="og:title" content="Aaryan Gupta — Technical Project Manager | Health-Tech | Jaipur">
  <meta property="og:description" content="Freelance Technical PM for Health-Tech & SaaS. 70+ markets. Developer-turned-PM. MCA graduate. Book a free 30-min call.">
  <meta property="og:image" content="https://aaaryangupta.com/assets/og/og-aaryan-gupta-tpm.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Aaryan Gupta — Technical Project Manager, Jaipur India">
  <meta property="og:locale" content="en_IN">

  <!-- ⑦ TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@aryanony">
  <meta name="twitter:creator" content="@aryanony">
  <meta name="twitter:title" content="Aaryan Gupta — Technical Project Manager | Health-Tech | Jaipur">
  <meta name="twitter:description" content="Freelance Technical PM. Health-Tech & SaaS. 70+ markets delivered.">
  <meta name="twitter:image" content="https://aaaryangupta.com/assets/og/og-aaryan-gupta-tpm.jpg">

  <!-- ⑧ HREFLANG (GEO targeting) -->
  <link rel="alternate" hreflang="en" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="en-IN" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="en-GB" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="en-US" href="https://aaaryangupta.com/">
  <link rel="alternate" hreflang="x-default" href="https://aaaryangupta.com/">

  <!-- ⑨ FAVICONS -->
  <link rel="icon" href="/assets/images/icons/favicon.ico" sizes="any">
  <link rel="icon" href="/assets/images/icons/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/icons/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
  <link rel="manifest" href="/seo/manifest.json">
  <meta name="msapplication-TileColor" content="#03100D">
  <meta name="msapplication-config" content="/seo/browserconfig.xml">
  <meta name="theme-color" content="#00C896" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#006B52" media="(prefers-color-scheme: light)">

  <!-- ⑩ STRUCTURED DATA — all schema inline -->
  [JSON-LD blocks — see Section 5]

  <!-- ⑪ NON-CRITICAL CSS — deferred -->
  <link rel="stylesheet" href="/assets/css/main.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/assets/css/main.css"></noscript>
</head>
```

### 4.2 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <url>
    <loc>https://aaaryangupta.com/</loc>
    <lastmod>2026-05-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://aaaryangupta.com/"/>
    <image:image>
      <image:loc>https://aaaryangupta.com/assets/images/profile/aaryan-gupta-tpm.webp</image:loc>
      <image:title>Aaryan Gupta — Technical Project Manager Jaipur India</image:title>
    </image:image>
  </url>

  <url><loc>https://aaaryangupta.com/about.html</loc><lastmod>2026-05-29</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://aaaryangupta.com/services.html</loc><lastmod>2026-05-29</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://aaaryangupta.com/work.html</loc><lastmod>2026-05-29</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://aaaryangupta.com/contact.html</loc><lastmod>2026-05-29</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://aaaryangupta.com/blog/</loc><lastmod>2026-05-29</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://aaaryangupta.com/blog/technical-pm-healthtech.html</loc><lastmod>2026-05-29</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://aaaryangupta.com/blog/dev-turned-pm-guide.html</loc><lastmod>2026-05-29</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>

</urlset>
```

### 4.3 robots.txt

```
User-agent: *
Allow: /
Disallow: /data/
Disallow: /schema/
Disallow: /_headers
Disallow: /_redirects
Disallow: /build.js
Disallow: /netlify.toml

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: https://aaaryangupta.com/seo/sitemap.xml
Sitemap: https://aaaryangupta.com/seo/sitemap-images.xml
```

---

## ━━━ SECTION 5: SCHEMA.ORG — COMPLETE JSON-LD ━━━

### 5.1 Person Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://aaaryangupta.com/#person",
  "name": "Aaryan Gupta",
  "givenName": "Aaryan",
  "familyName": "Gupta",
  "alternateName": ["aryanony", "Aryan Raj"],
  "jobTitle": "Technical Project Manager",
  "description": "Aaryan Gupta is a freelance Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation, SaaS project coordination, and AI-powered product delivery. MCA graduate (AKTU, 2025) with developer background, managing projects across 70+ international markets.",
  "url": "https://aaaryangupta.com",
  "email": "aryanrajk63@gmail.com",
  "telephone": "+916205650368",
  "image": {
    "@type": "ImageObject",
    "url": "https://aaaryangupta.com/assets/images/profile/aaryan-gupta-tpm.webp",
    "width": 800,
    "height": 800
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN",
    "postalCode": "302001"
  },
  "sameAs": [
    "https://linkedin.com/in/aryanony/",
    "https://github.com/aryanony",
    "https://x.com/aryanony/",
    "https://instagram.com/aryanony/",
    "https://aryanony.github.io/portfolio"
  ],
  "areaServed": [
    {"@type": "City", "name": "Jaipur"},
    {"@type": "City", "name": "Ahmedabad"},
    {"@type": "Country", "name": "India"},
    {"@type": "AdministrativeArea", "name": "Global"}
  ],
  "knowsAbout": [
    "Technical Project Management",
    "Health-Tech Digital Transformation",
    "SaaS Project Coordination",
    "Agile Methodology",
    "Scrum",
    "AI Integration",
    "React.js",
    "Node.js",
    "REST APIs",
    "Firebase",
    "DevOps",
    "Prompt Engineering",
    "Clinical Workflow Management",
    "EMR Software",
    "Telemedicine App Development"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Lloyd Institute of Engineering & Technology",
      "sameAs": "https://www.liet.in"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Munger University"
    }
  ],
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "name": "Master of Computer Applications (MCA)", "credentialCategory": "degree"},
    {"@type": "EducationalOccupationalCredential", "name": "Virtual Internship — Web & Mobile Development", "recognizedBy": {"@type": "Organization", "name": "IBM"}},
    {"@type": "EducationalOccupationalCredential", "name": "Digital Application Fundamentals STEM", "recognizedBy": {"@type": "Organization", "name": "nasscom"}}
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Technical Project Manager",
    "occupationLocation": [
      {"@type": "City", "name": "Jaipur"},
      {"@type": "City", "name": "Ahmedabad"}
    ],
    "skills": "Technical Project Management, Agile, Scrum, Health-Tech, SaaS, AI Integration"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Oblinex Pvt. Ltd."
  }
}
```

### 5.2 WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://aaaryangupta.com/#website",
  "url": "https://aaaryangupta.com",
  "name": "Aaryan Gupta — Technical Project Manager",
  "description": "Portfolio website of Aaryan Gupta, freelance Technical Project Manager specializing in Health-Tech and SaaS",
  "author": {"@id": "https://aaaryangupta.com/#person"},
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://aaaryangupta.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-IN",
  "copyrightYear": 2026,
  "copyrightHolder": {"@id": "https://aaaryangupta.com/#person"}
}
```

### 5.3 LocalBusiness Schema (for Jaipur/Ahmedabad targeting)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://aaaryangupta.com/#business",
  "name": "Aaryan Gupta — Technical Project Manager",
  "description": "Freelance Technical Project Management, Health-Tech Consulting, AI Automation, and Website Maintenance services in Jaipur, Ahmedabad, and globally.",
  "url": "https://aaaryangupta.com",
  "telephone": "+916205650368",
  "email": "aryanrajk63@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "areaServed": [
    {"@type": "City", "name": "Jaipur"},
    {"@type": "City", "name": "Ahmedabad"},
    {"@type": "Country", "name": "India"}
  ],
  "priceRange": "₹₹",
  "openingHours": "Mo-Fr 09:00-19:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technical PM Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Technical Project Management"}, "priceSpecification": {"@type": "PriceSpecification", "price": "25000", "priceCurrency": "INR"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Health-Tech Consulting"}, "priceSpecification": {"@type": "PriceSpecification", "price": "20000", "priceCurrency": "INR"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Automation"}, "priceSpecification": {"@type": "PriceSpecification", "price": "4000", "priceCurrency": "INR"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Website Maintenance"}, "priceSpecification": {"@type": "PriceSpecification", "price": "8000", "priceCurrency": "INR"}}
    ]
  }
}
```

### 5.4 FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://aaaryangupta.com/#faqpage",
  "mainEntity": [
    {"@type": "Question", "name": "Who is Aaryan Gupta?", "acceptedAnswer": {"@type": "Answer", "text": "Aaryan Gupta is a Technical Project Manager based in Jaipur, India, specializing in health-tech digital transformation and SaaS project coordination. MCA graduate (AKTU, 2025) managing 20+ projects across 70+ global markets."}},
    {"@type": "Question", "name": "What does a Technical Project Manager do?", "acceptedAnswer": {"@type": "Answer", "text": "A Technical PM owns the full project lifecycle — requirement scoping through deployment and release governance. Unlike traditional PMs, a technical PM understands codebases, challenges engineering estimates, and prevents costly misunderstandings before they happen."}},
    {"@type": "Question", "name": "Does Aaryan Gupta work with doctors and clinics?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — health-tech is a primary specialization. Aaryan helps doctors and clinic owners digitize clinical workflows, build patient management systems, and coordinate healthcare app development. Serving Jaipur, Ahmedabad, and pan-India."}},
    {"@type": "Question", "name": "Is Aaryan Gupta available for freelance projects?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — accepting freelance and consulting engagements for Technical PM, AI automation, website maintenance, and project coordination globally. Free 30-minute consultation available."}},
    {"@type": "Question", "name": "How can I contact Aaryan Gupta?", "acceptedAnswer": {"@type": "Answer", "text": "Email: aryanrajk63@gmail.com | Phone: +91 62056 50368 | LinkedIn: linkedin.com/in/aryanony | Website: aaaryangupta.com. Book a free 30-minute consultation via the contact section."}}
  ]
}
```

---

## ━━━ SECTION 6: ANIMATION & INTERACTION SYSTEM ━━━

### 6.1 Animation Principles

```
RULE 1: Purpose over decoration
  Every animation communicates state, hierarchy, or relationship.
  No animation purely for aesthetics without UX function.

RULE 2: Performance first
  All animations use:
  - transform (translateX/Y/Z, rotate, scale) — GPU composited
  - opacity — GPU composited
  NEVER animate: width, height, top, left, margin, padding, background-color

RULE 3: Respect user preference
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }

RULE 4: Consistent easing vocabulary
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1)    /* Natural deceleration */
  --ease-in:     cubic-bezier(0.4, 0.0, 1.0, 1)    /* Acceleration */
  --ease-inout:  cubic-bezier(0.4, 0.0, 0.2, 1)    /* Standard */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) /* Elastic overshoot */
  --ease-sharp:  cubic-bezier(0.4, 0.0, 0.6, 1)    /* Quick snap */

RULE 5: Duration scale
  Micro (feedback):      100–150ms  — button press, hover states
  Short (transition):    200–300ms  — component transitions
  Medium (reveal):       400–600ms  — section reveals, modals
  Long (storytelling):   700–1000ms — loader, hero entrance
  Maximum:               1200ms     — only for loaders/splash
```

### 6.2 Complete Animation Inventory

```
LOADER SEQUENCE (1600ms total):
  0ms:    Body opacity 0, loader visible
  0ms:    Wordmark fades in (500ms ease-out)
  400ms:  Progress bar fills (1000ms linear)
  400ms:  Label typing effect (800ms)
  1400ms: Loader fades out (200ms)
  1600ms: Body fades in, hero entrance begins

HERO ENTRANCE (staggered, starts at 1600ms):
  Badge:     fade-up 600ms, delay 0ms
  H1 line 1: fade-up 700ms, delay 100ms
  H1 line 2: fade-up 700ms, delay 200ms
  H1 line 3: fade-up 700ms, delay 300ms
  Subtitle:  fade-up 600ms, delay 450ms
  CTA row:   fade-up 600ms, delay 600ms
  Proof bar: fade-up 600ms, delay 750ms

SCROLL REVEAL (IntersectionObserver, threshold 0.12):
  Default: fade-up 700ms ease-out
  Cards:   fade-up + scale(0.96→1) 600ms
  Timeline: slide-right 500ms
  Stagger: 80ms between sibling elements

CURSOR SYSTEM:
  Outer ring: 60px × 60px, border only, lerp follow (0.12 factor)
  Inner dot:  8px × 8px, instant follow
  On hover:   outer scales to 80px, fills with accent glow, border thickens
  On click:   outer pulses scale(0.8→1.2→1), 150ms spring
  Trail:      5 fading ghost dots, opacity reduces linearly

CARD INTERACTIONS:
  3D tilt: mousemove → rotateX/Y max ±8°, perspective 600px
  Hover lift: translateY(-6px), shadow intensifies
  Active press: translateY(0), shadow reduces
  Transition: 300ms ease-out on mouse enter, 500ms ease-out on mouse leave

MAGNETIC BUTTONS:
  Trigger zone: 80px radius from button center
  Movement: cursor delta × 0.35 multiplier applied to button transform
  Reset: spring animation back to origin on mouse leave
  Only on: primary CTA buttons

NAV:
  Scroll down 60px: background blur + opacity transition 300ms
  Active section: nav link color transitions 200ms
  Mobile menu: slide down 300ms, backdrop fade 200ms

TYPEWRITER EFFECT (hero accent):
  Words cycle: ["Health-Tech", "SaaS", "HealthTech Startups", "Clinics", "AI Products"]
  Type speed: 80ms per character
  Delete speed: 40ms per character
  Pause between: 2000ms

TIMELINE INTERACTION:
  Click: active dot glows, right panel fades out (150ms) → content swaps → fades in (300ms)
  Keyboard: arrow keys navigate between entries
  Connector line: fills with color as you scroll down the timeline

PROCESS STEPS:
  Desktop: horizontal connector line animates fill on scroll
  Mobile: vertical line draws down on scroll
  Step cards: scale(0.95→1) + opacity as they enter viewport

MARQUEE:
  Speed: 35s per cycle (adjustable via CSS var)
  Pause on hover: animation-play-state: paused
  Duplicate content for seamless loop

PARTICLES (hero background):
  Count: 35 particles
  Speed: 0.3–0.8px per frame
  Size: 1–3px radius
  Color: var(--neon-primary) at 15% opacity
  Behavior: float upward, reset at top, random X drift
  Canvas: absolute positioned, pointer-events: none
```

---

## ━━━ SECTION 7: BROWSER FEATURES & JS APIs ━━━

### 7.1 localStorage & sessionStorage Usage

```javascript
// Theme persistence
localStorage.setItem('theme', 'dark'|'light')

// Cookie consent state
localStorage.setItem('cookieConsent', 'accepted'|'declined'|null)

// Form data autosave (contact form — never lose on refresh)
sessionStorage.setItem('formDraft', JSON.stringify({name, email, service, message}))

// First visit detection
localStorage.setItem('visited', 'true')
// Use: show loader only on first visit, skip on return

// Scroll position memory
sessionStorage.setItem('scrollPos', window.scrollY)
// Use: restore scroll on back navigation
```

### 7.2 IntersectionObserver — All Uses

```javascript
// Section reveal (scroll animations)
const revealObserver = new IntersectionObserver(callback, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
})

// Counter trigger (one-time)
const counterObserver = new IntersectionObserver(callback, { threshold: 0.5 })

// Active nav section tracking
const navObserver = new IntersectionObserver(callback, { threshold: 0.4 })

// Lazy image loading (fallback for older browsers)
const imageObserver = new IntersectionObserver(callback, {
  threshold: 0,
  rootMargin: '200px 0px'
})

// Timeline progress tracking
const timelineObserver = new IntersectionObserver(callback, { threshold: 0.3 })
```

### 7.3 Web APIs Used

```javascript
// 1. matchMedia — theme, reduced motion, print
window.matchMedia('(prefers-color-scheme: dark)')
window.matchMedia('(prefers-reduced-motion: reduce)')

// 2. ResizeObserver — responsive card heights
const ro = new ResizeObserver(entries => { /* recompute 3D tilt bounds */ })

// 3. Navigator — device detection, language
navigator.language          // 'en-IN' — locale-aware content
navigator.connection        // Slow network: disable particles, animations
navigator.onLine            // Offline: show offline banner
navigator.share()           // Native share on mobile (contact page)

// 4. Clipboard API — copy email/phone
navigator.clipboard.writeText(email)

// 5. Page Visibility API — pause marquee/particles when tab hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { pauseAnimations() } else { resumeAnimations() }
})

// 6. BeforeUnload — save form draft
window.addEventListener('beforeunload', saveFormDraft)

// 7. Network Info API — performance adaptive
if (navigator.connection && navigator.connection.effectiveType === '2g') {
  disableParticles()
  disableVideoBackground()
  setAnimationQuality('minimal')
}

// 8. Prefers-color-scheme listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) { applySystemTheme(e.matches) }
})

// 9. History API — SPA-style URL management
history.pushState({section: 'services'}, '', '/services')

// 10. Service Worker (PWA) — offline support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

### 7.4 Cookie Consent System

```javascript
// Cookie categories:
// 1. Essential (always on): theme, consent record, session
// 2. Analytics (opt-in): GA4 tracking
// 3. Preferences (opt-in): form draft, scroll memory

// Banner: appears bottom of screen after 2 seconds on first visit
// Options: Accept All | Customize | Decline Optional
// Persisted in localStorage for 365 days

// GA4 only loads AFTER consent granted:
if (cookieConsent.analytics === true) {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX')
}
```

### 7.5 PWA Manifest (manifest.json)

```json
{
  "name": "Aaryan Gupta — Technical Project Manager",
  "short_name": "Aaryan Gupta",
  "description": "Technical Project Manager — Health-Tech & SaaS",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#00C896",
  "background_color": "#03100D",
  "icons": [
    {"src": "/assets/images/icons/android-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/assets/images/icons/android-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ],
  "categories": ["business", "productivity"]
}
```

---

## ━━━ SECTION 8: PERFORMANCE SPECIFICATION ━━━

### 8.1 Targets

```
Lighthouse Score:     100 / 100 / 100 / 100 (Perf/Access/BP/SEO)
LCP:                  < 1.8s (target: sub-1s on fast connection)
INP:                  < 100ms
CLS:                  0.00 (all dimensions explicit)
TTFB:                 < 200ms (CDN edge)
Total Page Weight:    < 350KB uncompressed (< 120KB gzip/brotli)
JS Bundle:            < 40KB total (split across deferred scripts)
CSS:                  < 25KB (critical: < 8KB inlined)
Images:               WebP/AVIF, lazy-loaded, explicit dimensions
Fonts:                Self-hosted WOFF2, subset to used characters only
```

### 8.2 Critical Rendering Path

```
1. HTML (< 14KB) renders immediately
2. Inlined critical CSS unblocks FCP
3. Fonts preloaded — zero FOUT
4. Above-fold images preloaded
5. All non-critical JS: defer
6. All non-critical CSS: media="print" trick
7. No render-blocking third-party scripts
8. Analytics loads post-interaction (deferred + consent)
```

### 8.3 Image Strategy

```
Profile photo:   WebP primary, AVIF fallback, JPEG last resort
                 <picture> element with multiple <source>
                 width/height attributes mandatory
                 loading="eager" for hero (above fold)
                 loading="lazy" for all others
                 fetchpriority="high" for hero image

Project images:  WebP, max 120KB, loading="lazy"
                 srcset for responsive sizes: 320w, 640w, 1024w

OG image:        1200×630px JPEG, optimized <200KB
                 Static file — never dynamically generated

NO SVG base64:   Inline SVG only or external <img> with caching
```

### 8.4 Font Subsetting

```
Syne ExtraBold:  Subset to: A-Z, a-z, 0-9, punctuation used in headings
                 Target: < 20KB per weight
DMSans Regular:  Full Latin + Indian script chars
DMSans Medium:   Subset — UI weight
DM Mono:         Subset to: A-Z, a-z, 0-9, common symbols
                 Target: < 12KB

font-display: swap   — prevents invisible text during load
```

### 8.5 Hosting & Delivery

```
PRIMARY:   Cloudflare Pages
  - Global CDN (250+ PoPs)
  - Automatic Brotli compression
  - HTTP/3 QUIC
  - Free SSL with auto-renewal
  - Edge caching for static assets
  - _headers file for cache control

Cache headers (_headers file):
  /assets/*
    Cache-Control: public, max-age=31536000, immutable
  /*.html
    Cache-Control: public, max-age=3600, must-revalidate
  /seo/sitemap.xml
    Cache-Control: public, max-age=86400

BACKUP: Netlify (same config, netlify.toml)
```

### 8.6 Low Bandwidth Mode

```javascript
// Triggered when: navigator.connection.effectiveType === '2g' || '3g'
// OR: navigator.connection.saveData === true

LOW_BANDWIDTH_MODE:
  - Disable particle canvas
  - Disable 3D tilt (mousemove listener removed)
  - Disable magnetic buttons
  - Disable video background
  - Load images as JPEG instead of WebP/AVIF
  - Reduce animation duration by 50%
  - Skip typewriter — show final text immediately
  - Show "⚡ Lite mode active" badge in corner
```

---

## ━━━ SECTION 9: ACCESSIBILITY ━━━

```
WCAG 2.1 AA compliance mandatory:

Color contrast:
  Body text on dark bg: min 7:1 (AAA target)
  Body text on light bg: min 7:1
  UI text (secondary): min 4.5:1
  Large text/headings: min 3:1

Keyboard navigation:
  All interactive elements: focusable, visible focus ring
  Focus ring: 2px solid var(--neon-primary), offset 3px
  Tab order: logical DOM order
  Skip link: "Skip to main content" as first focusable element

ARIA:
  nav: aria-label="Main navigation"
  sections: aria-labelledby pointing to h2
  FAQ: role="list", role="listitem", aria-expanded
  Timeline: role="tablist", role="tab", role="tabpanel"
  Form: aria-required, aria-invalid, aria-describedby for errors
  Images: meaningful alt on all <img>, aria-hidden on decorative

Motion:
  @media (prefers-reduced-motion: reduce): all animations to 0.01ms

Screen reader:
  Cursor elements: aria-hidden="true"
  Loader: aria-live="polite", aria-busy
  Theme toggle: aria-label="Switch to light mode"

Semantic HTML:
  <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
  One <h1> per page
  Logical h1→h2→h3 hierarchy (never skip levels)
```

---

## ━━━ SECTION 10: BUILD SYSTEM ━━━

### 10.1 build.js — Node.js build script

```javascript
// build.js runs before deployment:
// 1. Reads data/config.json
// 2. Injects values into HTML templates (replaces {{DOMAIN}}, {{NAME}}, etc.)
// 3. Inlines critical CSS into <head>
// 4. Minifies HTML (removes comments, whitespace)
// 5. Minifies CSS files
// 6. Minifies JS files (no transpilation needed — modern browsers only)
// 7. Generates sitemap.xml dynamically
// 8. Generates robots.txt
// 9. Optimizes images (WebP conversion)
// 10. Outputs to /dist/ directory for deployment

// Template syntax in HTML:
<title>{{PERSON_NAME}} — {{PERSON_TITLE}} | {{SITE_TAGLINE_SHORT}}</title>
<meta name="description" content="{{META_DESCRIPTION}}">
```

### 10.2 Dynamic Content Injection (No Framework)

```javascript
// config.js (loaded first, before app.js)
// Fetches data/config.json and sets window.SITE_CONFIG
// All HTML templates use {{VARIABLE}} syntax
// build.js replaces at build time for SSG
// config.js replaces at runtime for local dev

// For SEO: build.js injects at build time → static HTML → Googlebot reads it
// For development: config.js fetches at runtime → fast iteration

// Example in HTML:
<span data-config="person.name">Aaryan Gupta</span>
// build.js finds these attributes and replaces textContent
// Fallback text is the default (always readable even without JS)
```

---

## ━━━ SECTION 11: GEO STRATEGY ━━━

### 11.1 Generative Engine Optimization Principles

```
PRINCIPLE 1: Entity clarity
  Mention "Aaryan Gupta" (full name) 12+ times across the page.
  In context: intro, about, testimonials, footer, schema, title.
  AI engines build entity graphs — frequency + consistency = citation likelihood.

PRINCIPLE 2: Factual specificity
  Every claim must be verifiable:
  - "70+ international markets" — documented in experience
  - "MCA (AKTU, 2025)" — degree + institution + year
  - "Jaipur, Rajasthan, India" — precise location
  - "aryanrajk63@gmail.com" — real, working contact
  AI trusts specificity over generality.

PRINCIPLE 3: Answer-first structure
  Every section answers a question:
  H2: "What does Aaryan Gupta offer?"
  Content: Direct answer in first 2 sentences.
  AI engines extract first 1-2 sentences of each section.

PRINCIPLE 4: Cross-reference network
  Website links to: LinkedIn, GitHub, Twitter, Instagram, Portfolio
  All those profiles link back to aaaryangupta.com
  AI engines build authority from cross-platform consistency.

PRINCIPLE 5: Crawlability for AI bots
  GPTBot, PerplexityBot, ClaudeBot: explicitly allowed in robots.txt
  All content: in static HTML (not behind JS)
  No infinite scroll: paginated content only
  JSON-LD schema: speaks directly to AI knowledge graphs

PRINCIPLE 6: Citation-ready content
  Each section has a "headline fact" in the first sentence:
  "Aaryan Gupta manages technical projects across 70+ international markets..."
  These become the AI's citation candidates.
```

### 11.2 GEO-Specific Content Strategy

```
TARGET AI QUERIES TO RANK FOR:

Query type 1 — Identity:
  "Who is Aaryan Gupta?"
  "Who is aryanony?"
  "What does Aaryan Gupta do?"

Query type 2 — Service discovery:
  "Who is the best technical project manager in Jaipur?"
  "Technical PM for HealthTech India"
  "Freelance project manager for doctor clinic app"

Query type 3 — Competitive:
  "Technical project manager with development background India"
  "PM who understands code India"

Query type 4 — Local:
  "Technical PM Jaipur"
  "IT project manager Ahmedabad freelance"
  "Health tech project coordinator Rajasthan"

CONTENT THAT AI ENGINES CITE:
  - Definition blocks: "A Technical PM is someone who..."
  - Lists: "Aaryan Gupta specializes in: 1. 2. 3."
  - FAQ format: Question → concise answer
  - Stats: "70+ markets", "20+ projects", "MCA CGPA 7.31"
  - Named entities: "Oblinex Pvt. Ltd.", "Lloyd Institute", "AKTU"
```

---

## ━━━ SECTION 12: BLOG STRATEGY (AEO ENGINE) ━━━

### 12.1 First 4 Articles

```
Article 1:
  Slug: /blog/technical-pm-healthtech-india.html
  Title: "Why India's Health-Tech Sector Needs Technical Project Managers, Not Just Developers"
  Target query: "technical project manager for healthcare app India"
  Length: 1,800 words
  Schema: Article + Person + FAQPage

Article 2:
  Slug: /blog/developer-turned-project-manager-guide.html
  Title: "From Developer to Technical PM: What Changes, What Stays, What Breaks"
  Target query: "developer turned project manager experience India"
  Length: 2,000 words
  Schema: Article + HowTo

Article 3:
  Slug: /blog/clinic-digitization-checklist-india.html
  Title: "The 10-Question Checklist Before Building a Healthcare App in India"
  Target query: "healthcare app development checklist India doctor"
  Length: 1,500 words
  Schema: Article + FAQPage + HowTo

Article 4:
  Slug: /blog/ai-tools-technical-project-managers-2026.html
  Title: "AI Tools That Actually Change How Technical Project Managers Work in 2026"
  Target query: "AI tools for project managers 2026 India"
  Length: 1,600 words
  Schema: Article + ItemList
```

---

## ━━━ SECTION 13: COMPLETE PROFESSIONAL PROMPT ━━━

```
PROMPT FOR AI CODE GENERATOR (Copy this exactly):

You are building a world-class personal portfolio website for Aaryan Gupta,
a freelance Technical Project Manager based in Jaipur, India.
This is a production-grade website targeting: Healthcare professionals (doctors,
clinic owners), HealthTech startups, SaaS companies, and global clients.

TECHNICAL REQUIREMENTS:
- Vanilla HTML5, CSS3, JavaScript (ES6+) only — no React, no Vue, no Next.js
- Zero runtime frameworks — maximum performance, perfect SEO
- Self-hosted WOFF2 fonts (Syne ExtraBold, DM Sans Regular/Medium/Light, DM Mono)
- Phosphor Icons as inline SVG sprite (no icon font files)
- Single-page architecture with smooth scroll between sections
- All content injectable from data/config.json and other data/*.json files
- Build script (build.js, Node.js) for template variable injection + minification
- PWA ready with manifest.json and service worker

DESIGN REQUIREMENTS:
- Dark mode: Neon aesthetic — electric teal-green (#00E8A8) on void black (#020C09)
  Neon glows on card borders, glow effects on interactive elements, ambient orbs
  Think: Linear.app, Vercel, Raycast — premium developer dark aesthetic
- Light mode: Glassmorphism + Material Design + Cupertino fusion
  Frosted glass cards (backdrop-filter: blur(20px)), material elevation shadows,
  deep teal (#006B52) primary on clean white surfaces
- Design vocabulary: SHARP, EDGY, GEOMETRIC — minimal border-radius (4-16px max)
  NEVER use 50%, 100px, pill shapes on major UI elements
  SYMMETRICAL layouts, precise spacing, grid-aligned everything
- 3D effects: CSS perspective on hero grid, card tilt on mousemove,
  ambient orbs with CSS radial gradients, particle canvas in hero
- Colors ONLY from: dark sea green, dark teal, light cyan, dark blue, light aqua,
  bluish teal, teal-blue, black, white — and their variants/opacities
- Custom cursor: outer ring (lerp follow, 0.12), inner dot (instant), hover expand
- Page loader: 1.6s, wordmark + animated progress bar + label

SECTIONS (build in this exact order):
1. <head> with full SEO, schema, OG, Twitter card, hreflang, preloads (see spec)
2. Loader (#ldr)
3. Custom cursor (.cx + .ci)
4. Sticky nav with logo, links, theme toggle, hamburger mobile
5. #hero — 3D grid bg, ambient orbs, particles, badge, h1 (typewriter), subtitle, CTAs, proof bar
6. Marquee ticker — keyword scroll
7. #about — grid layout, photo placeholder with floating stat cards, story text, skill chips, CTAs
8. #why — 4 cards, 3D mouse tilt, numbered (01–04)
9. #services — 4 cards (2×2 grid), featured highlight on first card
10. #work — 3 project cards: ProjectPort, UiBrium, AI Bot
11. #experience — clickable timeline (left) + detail panel (right), keyboard navigable
12. #skills — 9 category cards with tags
13. #industries — 8 industry blocks, Healthcare featured/larger
14. #process — 5-step horizontal process with animated connector
15. #testimonials — 3 cards
16. #faq — accordion, AEO optimized, FAQPage schema
17. #cta — full-width banner, ambient background
18. #contact — left info + right form (6 fields + submit)
19. <footer> — 4-column grid, social icons, status indicator, copyright

SEO REQUIREMENTS (non-negotiable):
- All JSON-LD schema: Person, WebSite, LocalBusiness/ProfessionalService, FAQPage, BreadcrumbList
- All meta tags: title, description, keywords, robots, canonical, author
- All Open Graph tags: og:type, og:url, og:title, og:description, og:image, og:locale
- All Twitter Card tags
- GEO meta tags: geo.region (IN-RJ), geo.placename, geo.position, ICBM
- hreflang for en, en-IN, en-GB, en-US, x-default
- robots.txt allowing GPTBot, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended
- sitemap.xml covering all pages
- All images: explicit width/height, descriptive alt text, loading="lazy" (except hero)
- Semantic HTML: header, nav, main, section (with aria-labelledby), footer
- One H1 per page, logical H2→H3 hierarchy

PERFORMANCE REQUIREMENTS:
- Critical CSS inlined in <head> (above-fold styles only)
- All fonts: preloaded + self-hosted WOFF2 + font-display: swap
- All non-critical CSS: media="print" deferred load trick
- All JS: type="module" or defer attribute
- Images: <picture> with WebP + JPEG fallback, explicit dimensions
- Network adaptive: if navigator.connection.effectiveType is 2g/3g → disable particles, reduce animations
- @media (prefers-reduced-motion: reduce) → disable all animations

BROWSER FEATURES:
- localStorage: theme, cookie consent, first visit detection
- sessionStorage: form draft autosave, scroll position
- IntersectionObserver: section reveal, counters, lazy images, active nav
- matchMedia: system dark/light preference, reduced motion
- navigator.share(): mobile share button on contact page
- navigator.clipboard: copy email/phone on click
- Page Visibility API: pause animations when tab hidden
- Service Worker: offline support, cache-first strategy
- ResizeObserver: responsive tilt bounds recalculation
- Cookie consent banner: bottom of screen, 3 options, GA4 deferred until consent

JS ARCHITECTURE (separate files, all deferred):
app.js, theme.js, cursor.js, loader.js, scroll.js, animations.js, tilt.js,
typewriter.js, counter.js, timeline.js, faq.js, form.js, marquee.js,
particles.js, magnetic.js, storage.js, cookies.js, pwa.js, config.js

DATA FILES (all content dynamic, never hardcoded):
data/config.json, data/services.json, data/projects.json, data/experience.json,
data/skills.json, data/testimonials.json, data/faq.json

IDENTITY CONSTANTS (exact values to use):
Name: Aaryan Gupta | Handle: aryanony | Title: Technical Project Manager
Email: aryanrajk63@gmail.com | Phone: +91 62056 50368
Location: Jaipur, Rajasthan, India | Secondary: Ahmedabad
Domain: aaaryangupta.com
LinkedIn: https://linkedin.com/in/aryanony/
GitHub: https://github.com/aryanony
Twitter: https://x.com/aryanony/
Instagram: https://instagram.com/aryanony/
Portfolio: https://aryanony.github.io/portfolio
ProjectPort: https://projectsport.vercel.app/
UiBrium: https://uibrium.vercel.app/
Current employer: Oblinex Pvt. Ltd. (May 2026–Present, Associate PM)
Key stat: 70+ international markets delivered
Target clients: Doctors, clinic owners, HealthTech founders, SaaS startups
Priority geographies: Jaipur, Ahmedabad, pan-India, Global

OUTPUT: Complete, production-ready code. Every file. No placeholders.
No "TODO" comments. No incomplete sections. Build the full website exactly as specified.
```

---

## ━━━ SECTION 14: LAUNCH CHECKLIST ━━━

### Pre-Launch (Technical)
```
□ All pages return HTTP 200
□ HTTPS enforced, www → non-www redirect (301)
□ sitemap.xml accessible at /seo/sitemap.xml
□ robots.txt accessible at /robots.txt
□ All JSON-LD validates at schema.org/validator
□ Rich Results Test passes for FAQPage, Person
□ OG image verified in Facebook Sharing Debugger
□ Twitter Card validated in Twitter Card Validator
□ Mobile-Friendly Test: PASS
□ PageSpeed Insights: 95+ all categories
□ Lighthouse: 95+ all categories
□ CLS = 0.00 (no layout shifts)
□ All images have explicit width/height
□ All images have alt text
□ All forms validated with clear error messages
□ Cookie consent banner functional
□ Theme toggle persists across reload
□ Mobile menu opens/closes correctly
□ All external links open in new tab with rel="noopener noreferrer"
□ Contact form submits correctly (test with real email)
□ Custom cursor hides on touch devices
□ Keyboard navigation works for all interactive elements
□ No console errors
□ No broken links (internal or external)
```

### Post-Launch (SEO/GEO)
```
□ Submit sitemap to Google Search Console
□ Submit sitemap to Bing Webmaster Tools
□ Submit URL for indexing in GSC (Request Indexing)
□ Set up GA4 property and verify tracking
□ Create Wikidata entity for "Aaryan Gupta"
□ Create Crunchbase profile linking to aaaryangupta.com
□ Update all social profiles to link to aaaryangupta.com
□ Claim Google Business Profile (Jaipur location)
□ List on Clutch.co with website link
□ List on Contra.com
□ Submit to GoodFirms
□ Set up Google Search Console alerts for manual actions
□ Set up Bing Webmaster Tools
□ Set up Cloudflare Analytics (privacy-first, no consent needed)
□ Set up uptime monitoring (UptimeRobot free tier)
```

---

## ━━━ SECTION 15: CONTENT WRITING PRINCIPLES ━━━

```
TONE: Premium, intelligent, human — not robotic, not casual
VOICE: First-person in CTAs, third-person in about/bio (for SEO/AEO)
LENGTH: Less words, maximum information density
  - Headlines: 5–8 words
  - Section descriptions: 2–3 sentences max
  - Bullet points: 8–12 words each
  - FAQ answers: 40–80 words (AEO optimized)

DO:
  ✓ Use specific numbers ("70+ markets", "11 months", "MCA AKTU 2025")
  ✓ Name concrete tools ("React.js, Node.js, Jira, Notion, Botpress")
  ✓ Reference specific outcomes ("saved 3 weeks", "zero production regressions")
  ✓ Use industry jargon correctly (sprint governance, QA validation, TTFB)
  ✓ Write for humans first, AI engines second — they align when done right

DO NOT:
  ✗ "I am passionate about..." (vague, generic)
  ✗ "Experienced professional with X years..." (everyone says this)
  ✗ "Results-driven, dynamic, synergistic..." (meaningless filler)
  ✗ Long paragraphs (>4 lines on mobile)
  ✗ Unverifiable claims ("best in India", "world-class")
  ✗ Padding content to reach word counts

PLAGIARISM & AI DETECTION:
  All content: original, written from Aaryan's real experience
  No templated phrases from resume builders
  Concrete specifics defeat AI detection more than any technique
  Real names, real projects, real technologies = undetectable as AI
```

---

*AARYAN GUPTA — PORTFOLIO WEBSITE MASTER BLUEPRINT*
*Version 2.0 · Prepared May 2026*
*For: Google Antigravity 2.0 / Any capable AI code generator*
*Classification: Complete build specification — no prior context required*
*Expected output: Full production-ready website, all files, zero omissions*

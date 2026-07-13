# window_horizon

> Expert window treatment service website built with Next.js and Tailwind CSS.

![GitHub stars](https://img.shields.io/github/stars/Sehar-1207/window_horizon?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/Sehar-1207/window_horizon?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/Sehar-1207/window_horizon?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/Sehar-1207/window_horizon?style=for-the-badge&logo=github)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributing](#contributing)

## 📝 Description

Window Horizons is a specialized web application designed for a window treatment services business. It provides a structured online presence featuring custom window treatment options, helping users discover product offerings, browse galleries, and access direct consultation services.

Built on Next.js with TypeScript and styled using Tailwind CSS, the application utilizes structured page layouts, modular components (such as hero sections, testimonials, and FAQs), and smooth interactive animations powered by Framer Motion. Layout components ensure cohesive header, navigation, and footer states across routes.

This platform is designed for home improvement and window treatment providers looking to establish a professional web presence. It provides customers with direct contact information, service directories, and structured informational content to encourage booking consultations.

## ✨ Key Features

- **🪟 Product and Service Directory** — Displays a structured catalog of window treatment products and specialized services.
- **💬 Consultation Booking CTA** — Includes dedicated call-to-action components with direct phone links for schedule coordination.
- **🎬 Integrated Video Gallery** — Features a visual multimedia section to showcase window treatment designs and demonstrations.
- **🙋 Interactive FAQ Section** — Implements a frequent questions component to address common customer inquiries.
- **🎨 Animated UI Components** — Utilizes Framer Motion and Tailwind CSS for smooth page transitions and responsive layouts.

## 🎯 Use Cases

- Creating a service-focused business website for window treatment installation and design consulting.
- Building a modular Next.js landing page with organized sections for product showcases, client testimonials, and FAQs.
- Deploying a responsive web portal to collect customer consultation leads via dedicated call-to-action targets.


## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**Notable libraries:** Framer Motion


## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/Sehar-1207/window_horizon.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## 📦 Key Dependencies

```
framer-motion: ^12.42.2
lucide-react: ^1.23.0
next: 16.2.10
react: 19.2.4
react-dom: 19.2.4
react-icons: ^5.7.0
```

## 🚀 Available Scripts

- **dev** — `npm run dev`
- **build** — `npm run build`
- **start** — `npm run start`
- **lint** — `npm run lint`

## 📁 Project Structure

```
.
├── AGENTS.md
├── CLAUDE.md
├── app
│   ├── blog
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── locations
│   │   └── [slug]
│   │       └── page.tsx
│   ├── page.tsx
│   ├── portfolio
│   │   └── page.tsx
│   ├── products
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── services
│       └── page.tsx
├── components
│   ├── CallToAction.tsx
│   ├── Consultation.tsx
│   ├── Explore.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── assets
│   │   ├── customBlind1.jpg
│   │   ├── customblind2.jpg
│   │   ├── customblind3.jpg
│   │   ├── customblinds4.jpg
│   │   ├── furniture.jpg
│   │   ├── logo.png
│   │   ├── service1.jpg
│   │   ├── service2.jpg
│   │   ├── service3.jpg
│   │   ├── service4.jpg
│   │   ├── shade1.jpg
│   │   ├── shade2.jpg
│   │   ├── shade3.jpg
│   │   ├── shade4.jpg
│   │   └── testimonial1.jpg
│   ├── blogs
│   │   ├── BlogComponent.tsx
│   │   ├── BlogLayout.tsx
│   │   └── FloatingCategory.tsx
│   ├── contacts
│   │   ├── Banner.tsx
│   │   └── ContactForm.tsx
│   ├── home
│   │   ├── About.tsx
│   │   ├── FrequentQuestion.tsx
│   │   ├── ProductSection.tsx
│   │   ├── Seo.tsx
│   │   ├── ServiceDirectory.tsx
│   │   ├── Testimonials.tsx
│   │   ├── VideoGallery.tsx
│   │   └── WhyChooseUs.tsx
│   ├── portfolio
│   │   ├── ClientTestimonials.tsx
│   │   ├── ProjectCards.tsx
│   │   └── StatsSection.tsx
│   ├── products
│   │   ├── Hero.tsx
│   │   ├── ProductCards.tsx
│   │   └── ProductFeatures.tsx
│   └── services
│       └── WhatWeOffer.tsx
├── data
│   ├── blogs.ts
│   ├── locations.ts
│   └── products.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tsconfig.json
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above


## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Sehar-1207/window_horizon.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style.

---



</div>

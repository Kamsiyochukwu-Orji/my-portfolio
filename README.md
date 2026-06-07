# 🧑‍💻 Kamsiyochukwu Orji — Developer Portfolio

A personal portfolio website built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**. Showcases my projects, skills, and contact information as a junior frontend developer based in Nigeria.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [https://my-portfolio-eight-gilt-11.vercel.app/](https://my-portfolio-eight-gilt-11.vercel.app/) in your browser.

---

## 🗂 Project Structure

```
kamy-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navbar with smooth scroll & mobile menu
│   │   ├── Hero.tsx         # Landing section with code editor card
│   │   ├── About.tsx        # About me with image and quick facts
│   │   ├── Skills.tsx       # Tech stack with progress bars & badges
│   │   ├── Projects.tsx     # Featured and other projects grid
│   │   ├── Contact.tsx      # Contact form and info cards
│   │   └── Footer.tsx       # Footer with links
│   ├── App.tsx              # Root component, renders all sections
│   ├── index.css            # Tailwind base + custom component classes
│   └── main.tsx             # App entry point
├── index.html
├── tailwind.config.js       # Tailwind theme with custom fonts & animations
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 📄 Sections

| Section  | Component      | Description                                             |
| -------- | -------------- | ------------------------------------------------------- |
| Hero     | `Hero.tsx`     | Animated landing with code card, stats, and CTA buttons |
| About    | `About.tsx`    | Bio, image, quick facts, and availability status        |
| Skills   | `Skills.tsx`   | Progress bars, tech badge cloud, currently exploring    |
| Projects | `Projects.tsx` | Featured layout + grid for all 4 projects               |
| Contact  | `Contact.tsx`  | Contact info cards + message form                       |
| Footer   | `Footer.tsx`   | Links and credits                                       |

---

## 🧩 Key Features

- **Single page** — all sections on one page with smooth scroll navigation
- **Sticky navbar** — transparent on load, solid background on scroll, active link highlighting
- **Mobile responsive** — hamburger menu on mobile, all layouts adapt to screen size
- **Animated hero** — gradient text, glowing blobs, floating badges, blinking cursor
- **Code editor card** — displays your stack as a syntax-highlighted code snippet
- **Skills progress bars** — visual proficiency levels per technology
- **Featured projects** — alternating two-column layout for top projects
- **Contact form** — opens default mail client with pre-filled subject and body
- **Custom Tailwind config** — extended with Space Grotesk, Fira Code, and custom animations

---

## 🎨 Design

- **Theme** — dark (gray-950 base) with sky blue accents
- **Fonts** — Inter (body), Space Grotesk (headings/display), Fira Code (mono/code)
- **Animations** — `fadeUp`, `fadeIn`, `slideLeft`, `pulse-slow` via custom Tailwind keyframes
- **Color palette** — gray-950 background, gray-900 cards, sky-400/500 accent, green-400 availability indicator

---

## 🛠 Tech Stack

| Tool                   | Purpose                         |
| ---------------------- | ------------------------------- |
| React 18               | UI framework                    |
| TypeScript             | Type safety                     |
| Tailwind CSS 3         | Utility-first styling           |
| Vite                   | Build tool & dev server         |
| PostCSS + Autoprefixer | CSS processing                  |
| Google Fonts           | Inter, Space Grotesk, Fira Code |

---

## 🌍 Deployment

No environment variables required. Deploy to **Vercel** in two steps:

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com) — Vercel auto-detects Vite

Add a `vercel.json` at the root for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## ✏️ Customisation

To make this your own, update the following:

- **`src/components/Hero.tsx`** — name, title, and bio text
- **`src/components/About.tsx`** — bio paragraphs, quick facts, image URL
- **`src/components/Skills.tsx`** — skill names and proficiency levels
- **`src/components/Projects.tsx`** — project titles, descriptions, tags, GitHub and live URLs
- **`src/components/Contact.tsx`** — email address, GitHub, LinkedIn URL
- **`src/components/Footer.tsx`** — social links
- **`index.html`** — page title and meta description

---

## 📝 License

MIT — free to use and modify.

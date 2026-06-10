# skia-global-portfolio

**Swaasti Khandale · Image Architect & Executive Presence Strategist**
Portfolio website for SKIA Global — Executive Presence & Professional Image Consultancy.

---

## Overview

A premium, brand-accurate personal portfolio built with Next.js 14 (App Router) and Tailwind CSS. Designed to mirror the SKIA Global brand identity — warm caramel/espresso palette, Cormorant Garamond + Playfair Display typography, and luxury-consulting aesthetic.

**Sections:**
- Hero — tagline, social proof metrics, strong CTA
- About — brand story, mission, SKIA programme overview
- Programs — four corporate programmes with outcomes
- Results — interactive case study panel (Hexaware, Cognizant, Capgemini, ICICI/HDFC)
- Specialisations — skill matrix + three-step methodology
- Experience — career timeline + education + certifications
- Contact — enquiry panel + all contact details

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Tech Stack

| Layer      | Choice                        |
|------------|-------------------------------|
| Framework  | Next.js 14 (App Router)       |
| Styling    | Tailwind CSS 3                |
| Fonts      | Google Fonts (Cormorant Garamond, Playfair Display, Montserrat, Lato) |
| Deployment | Any Node.js host / Vercel     |

---

## Brand Colours

| Token          | Hex       | Use                    |
|----------------|-----------|------------------------|
| brand-cream    | `#F7F1EB` | Page backgrounds       |
| brand-pale     | `#EDE0D4` | Section fills          |
| brand-blush    | `#E8D5C4` | Primary brand / CTAs   |
| brand-caramel  | `#D4B896` | Accent / hover         |
| brand-deep     | `#C4A882` | Headings, borders, rules |
| brand-espresso | `#5C3D2E` | Primary text, footer   |
| brand-brown    | `#8B6350` | Subheadings            |
| brand-slate    | `#7A6A5A` | Captions, fine print   |

---

## Adding a Real Photo

In `components/Hero.jsx`, replace the placeholder `<div>` inside the portrait frame with:

```jsx
<img
  src="/swaasti-khandale.jpg"
  alt="Swaasti Khandale"
  className="absolute inset-0 w-full h-full object-cover object-top"
/>
```

Place your photo at `public/swaasti-khandale.jpg`.

---

## GitHub Repo Name

**`skia-global-portfolio`**

---

*SKIA Global · Transform. Elevate. Lead.*

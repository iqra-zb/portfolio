# Iqra Ramzan — Portfolio (Next.js + TypeScript)

Personal portfolio and blog, built with Next.js (App Router) and Tailwind CSS.
Theme: orange accent (`#FF6B2B`), zinc dark/light mode, PT Sans + DM Sans.

**Live sections:** Hero · About · Work (case studies) · Experience · Services · Blog · Contact

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
```

---

## Project structure

```
app/
  layout.tsx            Root layout — fonts, dark mode class, Header/Footer
  page.tsx               Home page — stacks all sections (Hero → Contact)
  globals.css             Global styles (scrollbar, hover/underline effects, shimmer)
  blog/
    page.tsx              Full blog listing (all posts)
    [slug]/page.tsx        Dynamic blog detail page — one template for every post
  not-found.tsx           Custom 404

components/
  Header.tsx              Sticky nav, anchor links + dark mode toggle
  Footer.tsx
  ThemeToggle.tsx          Dark/light toggle (persists to localStorage)
  Hero.tsx
  About.tsx
  Work.tsx                 Case studies grid — reads from data/projects.ts
  Experience.tsx           Work history + education (from LinkedIn)
  Services.tsx
  BlogPreview.tsx          3 most recent posts, shown on the home page
  BlogCard.tsx             Shared card used by BlogPreview and /blog
  Contact.tsx

data/
  projects.ts              All case studies — typed, one object per project
  blogPosts.ts              All blog posts — typed, one object per post

public/
  logos/                   SVG project logos (48×48, consistent icon style)
```

---

## Adding a new blog post

Open `data/blogPosts.ts` and add an object to the `blogPosts` array:

```ts
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  category: 'Category',
  readTime: '5 min read',
  date: '2026-01-01',
  excerpt: 'One or two sentence summary shown on the card.',
  content: [
    'First paragraph.',
    'Second paragraph.',
  ],
},
```

It automatically appears on the home page preview (if recent), on `/blog`, and gets its own page at `/blog/your-post-slug`. No other file needs to change.

---

## Adding a new project / case study

Open `data/projects.ts` and add an object to the `projects` array:

```ts
{
  code: 'XX',                 // 2-letter fallback badge, used only if no logo is set
  name: 'Project Name',
  tagline: 'Short one-liner',
  category: 'Category',
  problem: '...',
  action: '...',
  result: '...',
  tags: ['Tech', 'Stack', 'Here'],
  logo: '/logos/your-icon.svg',  // optional — omit to show the code badge instead
},
```

It shows up automatically in the Work section on the home page.

### Project logos

All current logos are hand-drawn SVGs in `public/logos/`, 48×48px, same rounded-square + icon style, so they stay visually consistent no matter the project. To add a new one:
- Keep the `viewBox="0 0 48 48"` and rounded-square (`rx="14"`) background convention used by the existing files.
- If a project has no distinct icon mark, just omit `logo` from its entry — it'll fall back to a colored badge using `code`.

---

## Updating your info

| What | Where |
|---|---|
| Hero tagline, stats | `components/Hero.tsx` |
| About bio, skills list | `components/About.tsx` |
| Work history, education, certifications | `components/Experience.tsx` |
| Services offered | `components/Services.tsx` |
| Email, LinkedIn, GitHub, location | `components/Contact.tsx` and `components/Footer.tsx` |
| Site title/description (SEO) | `app/layout.tsx` → `metadata` |

---

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- next/font (self-optimized Google Fonts: PT Sans, DM Sans)

No external UI libraries — all components are hand-built to match the theme exactly.

---

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero configuration needed, it's a standard Next.js app. Any other Node host (Netlify, Railway, your own server) works too via `npm run build && npm run start`.

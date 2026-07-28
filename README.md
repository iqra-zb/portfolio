# Iqra Ramzan — Portfolio (Next.js)

A Next.js 14 (App Router + TypeScript) rebuild of the original static portfolio site.
Same dark theme, same content, same interactions — rebuilt with proper React
patterns instead of vanilla DOM scripting.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx          Root layout — fonts, global CSS, cursor, loading screen
  page.tsx             Homepage (hero, about, projects, skills, blog teaser, contact)
  globals.css          All design tokens & component styles (ported from the original site)
  blog/
    page.tsx            Blog listing page
    [slug]/page.tsx      Dynamic article page (statically generated per post)

components/
  Navbar.tsx            Nav bar + slide-in mobile sidebar (React state, no Bootstrap JS)
  Cursor.tsx             Custom cursor (dot + lagging ring)
  LoadingScreen.tsx      Name-typing intro animation
  HeroTyping.tsx         Rotating hero headline text
  Reveal.tsx              Scroll-reveal wrapper (IntersectionObserver)
  ProjectsSection.tsx    Case studies grid with category filtering

lib/
  data.ts               All content — projects, skills, blog posts, profile info.
                         Edit this file to update anything on the site.
```

## Editing content

Everything text-based — project case studies, skills, blog posts, stats, contact
info — lives in `lib/data.ts`. You don't need to touch any component or page file
to update copy; just edit the data arrays.

To add a new blog post: add an entry to the `blogPosts` array in `lib/data.ts`.
A page at `/blog/your-slug` is generated automatically — no new files needed.

To add a new project case study: add an entry to the `projects` array. Pick an
existing `logoClass` (pp/dh/cp/ic/cb/sb/ao) or add a new one + matching gradient
in `globals.css` under `.project-logo.<class>`.

## Notes on what changed from the static HTML version

- Bootstrap (CSS + JS) was dropped. Layout now uses plain CSS Grid (`.grid`,
  `.grid-2`, `.grid-3`, `.grid-4` utility classes in `globals.css`), and the
  mobile nav sidebar is now controlled by React state instead of Bootstrap's
  Offcanvas JS component.
- The staggered per-line fade-in animation on the hero code block was
  simplified — the whole block now fades in once via the shared `Reveal`
  component rather than animating each line individually.
- Social icons in the contact section are simple text glyphs as placeholders
  (originally inline SVGs) — swap in `lucide-react` or your own SVGs if you'd
  like the original icon look back.

## Deploying

This is a standard Next.js app — deploys directly to Vercel:

```bash
npx vercel
```

or connect the repo in the Vercel dashboard. No environment variables or
extra config needed.

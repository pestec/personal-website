# Cosmin Peste — Personal Portfolio

A single-page portfolio built from Cosmin's CV, styled with a dark glassmorphic aesthetic.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@theme` in `src/index.css`)
- [Framer Motion](https://motion.dev/) for scroll-reveal and hover animations
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif) + [Manrope](https://fonts.google.com/specimen/Manrope) (body sans), self-hosted via `@fontsource`
- [react-icons](https://react-icons.github.io/react-icons/) for iconography

## Project structure

```
src/
  data/portfolio.ts        Typed CV content (profile, experience, skills, projects, etc.)
  components/
    Navbar.tsx, Hero.tsx, About.tsx, Experience.tsx, Skills.tsx,
    Projects.tsx, EducationCerts.tsx, Contact.tsx
    ui/GlassCard.tsx, SectionHeading.tsx, AnimatedBackground.tsx
public/
  cv.pdf                   Downloadable CV (generated from the source .docx)
```

To update site content, edit `src/data/portfolio.ts` — all sections read from there.

## Development

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying (Vercel, free tier)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), "Add New Project", import the repo.
   Vercel auto-detects Vite — no config needed (build command `npm run build`, output `dist`).
3. Deploy. You'll get a `*.vercel.app` URL immediately, at $0 cost on the Hobby plan.

### Attaching your custom domain (www.cosminpeste.com)

1. In the Vercel project → **Settings → Domains**, add `cosminpeste.com` and `www.cosminpeste.com`.
2. At your domain registrar's DNS settings, add the records Vercel shows you — typically:
   - `A` record for the apex domain (`cosminpeste.com`) → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
3. DNS propagation can take a few minutes to a few hours. Vercel auto-issues an SSL certificate once it verifies the domain.

No server, database, or paid services are required — hosting stays free as long as you're on Vercel's Hobby tier.

## Updating the CV PDF

If the CV changes, regenerate `public/cv.pdf` from the source `.docx` (e.g. via Word's "Save As PDF" or LibreOffice) and drop it in place — the Download CV buttons already point to `/cv.pdf`.

## Known follow-ups

- Swap the "CP" monogram in the hero for a real profile photo when available.
- Add LinkedIn / GitHub links to the navbar and contact section once URLs are provided.

# Vamsi Krishna Reddy Yarava — Portfolio

A single-page portfolio, redesigned from scratch (not the codewithsadee vCard template) around a
data/ML visual identity: navy base, amber accent, a kinetic name treatment in the hero, an animated
line-chart backdrop, and a scrolling tech-stack ticker.

## Run it
Just open `index.html` in a browser — no build step, no dependencies to install.

## Before you send this to a recruiter
1. **Add your photo**: drop a headshot into `assets/images/` and reference it in the hero if you want
   a face in there (currently text-only by design).
2. **Fill in exact internship dates** in the Experience section (`index.html`, search for `timeline-item`).
3. **Swap in real project links**: add GitHub repo / live demo links to each project card once you're
   ready to point recruiters at the code.
4. **Resume link**: consider adding a "Download résumé" button in the hero pointing to a PDF.

## Structure
```
index.html
assets/
  css/style.css   — all styling, custom properties at the top (colors, fonts)
  js/script.js    — scroll reveal, nav highlighting, mobile menu
  images/         — your avatar + any project screenshots you add
```

## Deploying for free
- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch — live in ~1 minute.
- **Vercel/Netlify**: drag-and-drop the folder in their dashboard for a free URL.

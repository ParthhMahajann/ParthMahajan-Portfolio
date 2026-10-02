# Parth Mahajan — Portfolio

A responsive React portfolio combining AI/software projects with independent creative concepts. Built with Vite, locally served Manrope typography, and original film media.

## Run locally

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:5173. The server uses a strict port so it reports a conflict instead of silently moving.

## Production build

```powershell
npm run build
npm run preview
```

The complete static site is in `build/`; the production preview is http://127.0.0.1:4173. It can be hosted at the root of any static host. No API keys, database, paid service, or contact-form backend is needed. Email links open the visitor's email application. The legacy `dist/` folder is unused; the output directory changed because Windows held an old preview video file open during the version 2 rebuild.

## Editing

- `src/content.js`: contact destinations, projects, and experience.
- `src/App.jsx`: main page, biography, capabilities, navigation, and email-copy interaction.
- `src/styles.css`: responsive styling and motion preferences.
- `src/TechnicalPreview.jsx`: explanatory ranking and recovery diagrams, grounded in the project source.
- `src/ProjectDialog.jsx`: accessible project dialogs and film playback.
- `public/media/`: original project assets.
- `public/Parth-Mahajan-Resume.pdf`: supplied resume, unchanged.
- `docs/content-sources.md`: provenance and claim boundaries.

Native dialogs support Escape, keyboard focus containment, and focus restoration. System reduced-motion preferences are respected. Films play only when requested; there is no decorative animation loop. Header navigation stays above the content instead of covering it.

Version 2 audit screenshots, comparison scores, and a recoverable archive of version 1 source are in `docs/review-v2/`.

The portfolio is prepared locally. No public deployment or remote Git push has been performed.

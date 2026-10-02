# Portfolio verification — historical V1

For the current V2 build, see [the visual review and verification](review-v2/REVIEW.md). The notes below record the original V1 and include the since-removed decorative scene.

Checked against the final local implementation on 30 September 2026.

- Production build succeeds (`npm run build`). The optional, lazy-loaded Three.js scene generates Vite's advisory for a chunk over 500 kB; it is about 133 kB compressed and separate from the main page bundle.
- Production page, styles, scripts, favicon, local font, project posters, both MP4s, and resume return HTTP 200.
- The served resume's SHA-256 exactly matches the supplied PDF.
- Browser checked at widths 320, 390, 560, 768, and 1440 pixels: no horizontal page overflow.
- Desktop and phone layouts inspected visually, including hero, selected work, biography, contact, and project dialogs.
- All four project dialogs open and close; repository destinations match the resume. Native keyboard navigation reaches the project link, Escape closes the dialog, and focus returns to the initiating card.
- Both concept films load as 24-second videos and actually play. LOOPPOP was observed advancing beyond 16 seconds; ORVEN reaches readyState 4 and playing state. These checks do not constitute a new full editorial or audio review of the original films.
- Email copy displays its success state. Contact uses a real mailto link; it does not claim server-side message delivery.
- Motion control updates its pressed state and the document motion setting. Code review confirms that the animation loop stops for paused, offscreen, and hidden states. A scene-only error boundary preserves the portfolio if the decorative chunk fails.
- No browser console errors observed in the production preview. Development emitted a harmless shader floating-point precision warning from the local graphics driver.
- Focused independent code review completed; its three findings were fixed and rechecked.

Preview screenshot: `docs/portfolio-preview.jpg`.
The working source and production output are local. No deployment, public upload, or remote push was performed.

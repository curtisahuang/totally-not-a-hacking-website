# Totally Not About Phishing – Astro Site

This project is now an [Astro](https://astro.build) site, converted from a simple static HTML page.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

   Then open the URL shown in the terminal (usually http://localhost:4321).

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Project structure

- `src/pages/index.astro` – main page content (converted from the original `index.html`)
- `public/assets/style.css` – site styles
- `public/assets/script.js` – client-side quiz logic
- `astro.config.mjs` – Astro configuration
- `package.json` – scripts and dependencies

The mini quiz is still fully client-side: no data is sent or stored anywhere.

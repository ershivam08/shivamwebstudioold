# Shivam Web Studio

React + Vite + Tailwind CSS landing page for Shivam Web Studio.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel (or any static host).

## Connecting the requirement form to Google Forms

The "Send requirement" form (`src/components/Contact.jsx`) posts directly to a
Google Form's `formResponse` endpoint, so every submission lands in a linked
Google Sheet — no backend or database required.

1. Create a Google Form with fields matching: Full name, Business name, Email,
   Phone, Website type, Budget, Additional requirements.
2. Open the **live** form (not the edit view), right-click on each field →
   **Inspect**, and find the `name="entry.XXXXXXXXXX"` attribute on the
   corresponding `<input>` / `<select>` / `<textarea>`.
3. Open `src/components/Contact.jsx` and:
   - Replace `REPLACE_WITH_YOUR_FORM_ID` in `GOOGLE_FORM_ACTION` with your
     form's ID (the long string in the form URL, right before
     `/formResponse` or `/viewform`).
   - Replace each value in the `ENTRY_IDS` object with the matching
     `entry.XXXXXXXXXX` you found in step 2.
4. Save, rebuild, and test a submission — check your linked Google Sheet to
   confirm the row appears.

Note: the request uses `mode: 'no-cors'`, so the browser won't let us read a
success/failure response from Google — the UI shows a generic "Thanks!"
message on submit as long as the network request itself doesn't throw.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx        — code-to-preview signature panel
    Services.jsx
    Work.jsx         — "built for every kind of business" concepts
    Pricing.jsx
    TechStrip.jsx
    FAQ.jsx
    Contact.jsx       — Google Forms-integrated requirement form
    Footer.jsx
    Reveal.jsx        — scroll-reveal wrapper
  App.jsx
  main.jsx
  index.css
tailwind.config.js
```

## Stack

- React 18 + Vite
- Tailwind CSS
- react-router-dom (installed, ready for multi-page routes as the site grows)

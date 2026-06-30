# Lavanya Banga — Portfolio

A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, Achievements, Resume, Contact, Footer
  data/         skills.js, projects.js, achievements.js
  assets/       place images/icons here if needed
  App.jsx       assembles all sections
  main.jsx      React entry point
  index.css     Tailwind directives + custom utility classes
```

## Notes

- Replace `/public/resume-lavanya-banga.pdf` with your actual resume file (same filename, or update the `href` in `Hero.jsx` and `Resume.jsx`).
- Update social/contact links (GitHub, LinkedIn, email) in `Contact.jsx` and `Footer.jsx`.
- Update real GitHub/live demo links for each project in `src/data/projects.js`.
- The contact form is UI-only — wire `handleSubmit` in `Contact.jsx` to a backend or a service like Formspree/EmailJS to actually receive messages.

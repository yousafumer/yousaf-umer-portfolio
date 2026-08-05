# Yousaf Umer — Portfolio

A premium, dark-themed portfolio built with React, Vite, Tailwind CSS, and Framer Motion for a
Data Engineer / Data Analyst profile. All content (projects, skills, certificates, experience,
testimonials, contact info) lives in `src/data/` — nothing is hardcoded into components, so you
can add or edit content without touching any UI code.

## Tech Stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling, custom dark/blue design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, hover states, page transitions, hero animations
- **React Router** — client-side routing (`/`, `/projects/:slug`, `/resume`, `/contact`)
- **React Icons** — all iconography (`react-icons/fi`, `si`, `tb`, `fa`, `hi`)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project Structure

```
src/
  assets/            static images (add your own project screenshots here)
  components/
    Navbar/          sticky nav with scroll-spy + mobile menu
    Hero/             animated intro, typing effect
    About/            story + animated stat counters
    Skills/           categorized skill cards with progress bars
    Projects/         filterable project grid + ProjectCard
    Experience/        timeline (jobs / freelance / education)
    Certificates/      certificate cards
    Testimonials/      testimonial cards (Upwork-ready)
    GithubSection/     GitHub profile card + top languages
    Resume/            resume preview + download CTA
    Contact/           contact info + form
    Footer/
    shared/            SectionHeading, PipelineFlow (signature visual)
  data/               <-- EDIT HERE to update site content
    profile.js         name, roles, bio, contact links, resume path
    skills.js           skill categories
    projects.js          all projects + full case-study fields
    experience.js         timeline entries
    certificates.js        certificates
    testimonials.js        testimonials (placeholder until real reviews are added)
  hooks/
    useActiveSection.js  scroll-spy hook used by the Navbar
  pages/
    Home.jsx             assembles all sections
    ProjectDetails.jsx    full case-study page per project
    ResumePage.jsx         resume preview page
    ContactPage.jsx         standalone contact page
public/
  projects/            placeholder SVG project images — replace with real screenshots
  certificates/         placeholder certificate images
  resume/                Yousaf-Umer-Resume.pdf (generated from your CV — replace as needed)
  favicon.svg
```

## Adding a New Project

Open `src/data/projects.js` and add a new object to the `projects` array:

```js
{
  slug: 'my-new-project',
  title: 'My New Project',
  category: 'Data Engineering', // must match one of the `categories` list
  tags: ['Python', 'Airflow'],
  image: '/projects/my-new-project.png', // add the image to public/projects/
  summary: 'One or two sentence summary shown on the card.',
  stack: ['Python', 'Airflow', 'PostgreSQL'],
  github: 'https://github.com/yousafumer/my-new-project',
  demo: null,
  overview: '...',
  businessProblem: '...',
  solution: '...',
  architecture: ['Step one', 'Step two'],
  screenshots: [],
  technologiesUsed: ['Python', 'Airflow'],
  challenges: ['...'],
  lessonsLearned: '...',
  futureImprovements: ['...'],
}
```

It will automatically appear in the grid, respect category filtering, and get its own
`/projects/my-new-project` case-study page — no component changes required.

The same pattern applies to `skills.js`, `certificates.js`, `experience.js`, and
`testimonials.js`.

## Replacing Placeholder Assets

- **Project images**: `public/projects/*.svg` are generated placeholders. Swap them for real
  screenshots (same filenames, or update the `image` path in `projects.js`).
- **Resume PDF**: `public/resume/Yousaf-Umer-Resume.pdf` was generated from the CV content
  provided. Replace with an updated PDF any time — the filename is referenced in
  `src/data/profile.js` (`resumeUrl`).
- **Certificates**: `public/certificates/*.svg` — replace with real certificate images.

## Contact Form

The contact form in `src/components/Contact/Contact.jsx` is wired up on the client side only.
To actually deliver messages, connect it to a service such as Formspree, EmailJS, or your own
API endpoint inside the `handleSubmit` function.

## Deployment

This is a static Vite build — deploy the `dist/` folder to any static host:

- **Vercel** — `vercel deploy` (auto-detects Vite)
- **Netlify** — drag-and-drop the `dist/` folder, or connect the repo
- **GitHub Pages** — build, then push `dist/` to a `gh-pages` branch

## SEO

`index.html` includes title, meta description, keywords, and Open Graph/Twitter tags. Update the
`/og-cover.png` reference with a real social preview image before sharing the live link widely.

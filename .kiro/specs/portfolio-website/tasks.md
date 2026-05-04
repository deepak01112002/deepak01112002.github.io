# Implementation Tasks — Portfolio Website Upgrade

## Task List

- [x] 1. Global design system setup
  - [x] 1.1 Add CSS custom properties (colour tokens) to `src/index.css`: `--bg`, `--card-bg`, `--accent`, `--text`, `--text-heading`, `--border-glass`, `--card-bg-solid`
  - [x] 1.2 Set `body { background-color: var(--bg); color: var(--text); }` in `src/index.css`
  - [x] 1.3 Update global `button` styles in `src/App.css` to use accent colour and 0.3s transition

- [x] 2. Navbar — scroll effect and new links
  - [x] 2.1 Add `scrolled` boolean state and `useEffect` scroll listener in `Navbar.jsx` that sets `scrolled = true` when `window.scrollY > 50`
  - [x] 2.2 Apply conditional class `navbar-scrolled` to the navbar div when `scrolled` is true
  - [x] 2.3 Add `.navbar-scrolled` CSS rule in `Navbar.css` with `background: rgba(35,40,62,0.85)`, `backdrop-filter: blur(12px)`, and `box-shadow`
  - [x] 2.4 Add nav links for "Experience" (`/#experience`) and "Education" (`/#education`) to the desktop and mobile nav link lists in `Navbar.jsx`
  - [x] 2.5 Rename `hameburger` string state to `menuOpen` boolean state and update toggle logic accordingly
  - [x] 2.6 Update `Navbar.css` section heading and link styles to match the new design system (accent colour, 0.3s hover transition)

- [x] 3. Hero section — layout and profile photo
  - [x] 3.1 Restructure the hero content in `Home.jsx` into a two-column flex layout: left column (text) and right column (photo)
  - [x] 3.2 Add the profile photo `<img>` with class `hero-photo` to the right column, sourced from `https://i.ibb.co/PMJzmBV/Untitled-design.jpg`
  - [x] 3.3 Add `glow-pulse` keyframe animation and `.hero-photo` styles (circular, green border, animation) in `Home.css`
  - [x] 3.4 Update the Typewriter strings to: "Full Stack Web Developer", "Backend Engineer", "MERN Stack Developer", "Generative AI Enthusiast"
  - [x] 3.5 Update the hero summary paragraph text to the current professional summary from the resume
  - [x] 3.6 Verify all five social icon links are present: GitHub, LinkedIn, Gmail, phone, and resume download
  - [x] 3.7 Add responsive CSS in `Home.css`: at `max-width: 768px` switch hero to `flex-direction: column-reverse` and reduce heading to `2rem`; at `max-width: 480px` reduce heading to `1.8rem`

- [x] 4. About section — Tilt photo and updated bio
  - [x] 4.1 Import `Tilt` from `react-parallax-tilt` in `About.jsx`
  - [x] 4.2 Wrap the profile photo `<img>` in `<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>` in `About.jsx`
  - [x] 4.3 Replace the existing bio paragraph with the updated text: Full Stack Web Developer with MERN stack expertise, enterprise backend experience, and growing focus on Generative AI
  - [x] 4.4 Ensure the interests list (Singing, Travelling, Reading Adventure Stories) is present
  - [x] 4.5 Apply glassmorphism card styles to the bio panel in `About.css`
  - [x] 4.6 Add `data-aos="fade-right"` to the photo wrapper and `data-aos="fade-left"` to the bio panel

- [x] 5. Skills section — categorised grid
  - [x] 5.1 Define the `skillCategories` data array in `Skills.jsx` with four categories: Languages (JavaScript, TypeScript, Java), Frontend (React.js, Next.js, Tailwind CSS, Redux), Backend (Node.js, Express.js, NestJS, Spring Boot, MongoDB, PostgreSQL, MySQL, Redis), Cloud & DevOps (AWS, Docker, Kubernetes, Git)
  - [x] 5.2 Import all required icons from `react-icons` for the new skills (SiNextdotjs, SiNestjs, SiSpringboot, SiPostgresql, SiMysql, SiRedis, FaAws, FaDocker, SiKubernetes)
  - [x] 5.3 Replace the flat icon grid in `Skills.jsx` with a mapped render of `skillCategories`: for each category render a heading and a grid of skill cards
  - [x] 5.4 Add `data-aos="fade-up"` and staggered `data-aos-delay` (index * 50, max 400ms) to each skill card
  - [x] 5.5 Update `Skills.css` to apply glassmorphism card styles to `.skills-card`, add category heading styles, and add hover glow effect (`box-shadow: 0 0 20px rgba(64,228,143,0.15)` on hover)

- [x] 6. Projects section — three new production projects
  - [x] 6.1 Define the `projects` data array in `Projects.jsx` with three entries: Ghanshyam Murti Bhandar, DecorERP, and Bill Management System (all with `isPrivate: true`)
  - [x] 6.2 Replace the existing five project cards with a mapped render of the `projects` array
  - [x] 6.3 Each project card must render: gradient accent header bar, project title, description, tech stack icon row, "See this Live" button, and a "View Code" button
  - [x] 6.4 Render the "View Code" button as `<button disabled data-tip="Private Repository">` when `project.isPrivate === true`, with `<ReactTooltip>` present
  - [x] 6.5 Add `data-aos="flip-left"` to each project card wrapper
  - [x] 6.6 Update `Projects.css` to apply glassmorphism card styles, gradient accent header, and a responsive `auto-fit` grid layout (`repeat(auto-fit, minmax(320px, 1fr))`)

- [x] 7. Experience section — new component
  - [x] 7.1 Create `src/Components/Experience/Experience.jsx` with the `experiences` data array containing all four entries (FirstMeridian, BRT, Trivium, Red & White)
  - [x] 7.2 Render a vertical timeline: a container with a `2px solid #40e48f` left border, and for each entry a positioned dot, role title, company name, duration, and bullet list
  - [x] 7.3 Add `data-aos="fade-right"` with staggered `data-aos-delay` to each timeline entry
  - [x] 7.4 Create `src/Components/Experience/Experience.css` with timeline styles: connector line, dot (16px circle, `background: #40e48f`), entry card using glassmorphism pattern, and responsive adjustments at 768px
  - [x] 7.5 Import and render `<Experience />` in `Home.jsx` between `<Projects />` and `<Github />`

- [x] 8. Education section — new component
  - [x] 8.1 Create `src/Components/Education/Education.jsx` with the `educationData` array containing two entries (DDU Gorakhpur University BA, Masai School Full Stack)
  - [x] 8.2 Render two glassmorphism cards, each showing institution name, degree/programme, and duration
  - [x] 8.3 Add `data-aos="fade-up"` to each card
  - [x] 8.4 Create `src/Components/Education/Education.css` with two-column flex layout on desktop and single column on mobile (max-width: 768px)
  - [x] 8.5 Import and render `<Education />` in `Home.jsx` after `<Experience />`

- [x] 9. Certifications section — new component
  - [x] 9.1 Create `src/Components/Certifications/Certifications.jsx` with the `certifications` array containing one entry (Prompt Engineering Certification, Masai School)
  - [x] 9.2 Render one glassmorphism card showing certification title, issuer name, and a badge icon (`FaCertificate` from `react-icons/fa`)
  - [x] 9.3 Add `data-aos="zoom-in"` to the card
  - [x] 9.4 Create `src/Components/Certifications/Certifications.css` with centred card layout and glassmorphism styles
  - [x] 9.5 Import and render `<Certifications />` in `Home.jsx` after `<Education />`

- [x] 10. Contact section — success/error state
  - [x] 10.1 Add `status` state (`'idle' | 'success' | 'error'`) to `Contact.jsx` using `useState`
  - [x] 10.2 Update `sendEmail` to call `setStatus('success')` and `form.current.reset()` on resolve, and `setStatus('error')` on reject
  - [x] 10.3 Add `onChange` handlers to all form fields that call `setStatus('idle')` when the user starts typing
  - [x] 10.4 Render a success notification div (`.contact-notification.contact-success`) when `status === 'success'`
  - [x] 10.5 Render an error notification div (`.contact-notification.contact-error`) when `status === 'error'`
  - [x] 10.6 Update `Contact.css` to apply glassmorphism card styles to the form panel and contact-info panel, add notification styles (green for success, red for error), and ensure side-by-side layout on desktop with `flex-direction: column` at max-width 768px

- [x] 11. GitHub section — minor polish
  - [x] 11.1 Verify `data-aos="fade-right"` is present on the calendar wrapper, description list, and stats grid in `Github.jsx` (add if missing)
  - [x] 11.2 Apply section heading styles consistent with the design system in `Github.css`

- [x] 12. Footer — social links
  - [x] 12.1 Add GitHub (`https://github.com/deepak01112002`) and LinkedIn (`https://www.linkedin.com/in/deepak-pandey-0511a3250/`) icon links to `Footer.jsx` using `FaGithubAlt` and `FiLinkedin` from `react-icons`
  - [x] 12.2 Update `Footer.css` to use `var(--bg)` background, `var(--accent)` icon colour, and consistent padding

- [x] 13. AOS configuration update
  - [x] 13.1 Update the `AOS.init()` call in `Home.jsx` to include `{ duration: 700, once: true, offset: 80 }`

- [x] 14. Responsive overflow fix
  - [x] 14.1 Add `overflow-x: hidden` to the `body` and `.App` selectors in `src/index.css` and `src/App.css` to prevent horizontal scroll on narrow viewports

- [x] 15. Section heading consistency
  - [x] 15.1 Update section `h1` styles across all component CSS files (Skills, Projects, About, Github, Contact) to use `color: #ffffff`, `font-size: 2.5rem`, `text-transform: uppercase`, and a `2px solid #40e48f` bottom accent (via `border-bottom` or `::after` pseudo-element)

- [-] 16. Verification
  - [x] 16.1 Run `npm run build` and confirm zero compilation errors
  - [ ] 16.2 Manually verify all sections render correctly in the browser at desktop width (1280px)
  - [ ] 16.3 Manually verify responsive layout at 768px and 480px using browser DevTools device emulation
  - [ ] 16.4 Manually verify AOS animations trigger on scroll for all sections
  - [ ] 16.5 Manually verify navbar backdrop blur activates on scroll
  - [ ] 16.6 Manually verify EmailJS form sends a test message and displays the success notification
  - [x] 16.7 Run `npm test -- --watchAll=false` and confirm existing tests pass

- [-] 17. GitHub Pages deployment setup
  - [x] 17.1 Verify `"homepage": "https://deepak01112002.github.io"` is set in `package.json` (already present — confirm it matches the target GitHub Pages URL)
  - [x] 17.2 Verify `gh-pages` is listed under `devDependencies` in `package.json` (already present at `^6.3.0`)
  - [x] 17.3 Verify the `predeploy` script (`"predeploy": "npm run build"`) and `deploy` script (`"deploy": "gh-pages -d build"`) are present in `package.json` (already present — confirm no changes needed)
  - [x] 17.4 Ensure all internal asset paths and anchor links use relative paths (e.g. `href="#section-id"` not `href="/section-id"`) so they resolve correctly on the `github.io` subdomain
  - [x] 17.5 Ensure the `<BrowserRouter>` is NOT used anywhere — all routing must use plain anchor `href` links or `HashRouter` if react-router-dom is used, because GitHub Pages does not support server-side routing fallback
  - [ ] 17.6 Commit all changes to the `main` branch with message: `feat: FAANG-level portfolio upgrade`
  - [ ] 17.7 Run `npm run deploy` to build and push the `build/` output to the `gh-pages` branch — this triggers automatic deployment to `https://deepak01112002.github.io`
  - [ ] 17.8 Open `https://deepak01112002.github.io` in the browser and verify the live site loads correctly with all sections, animations, and the contact form

# Design Document — Portfolio Website Upgrade

## Overview

This document describes the technical design for upgrading Deepak Pandey's React (CRA) portfolio from its current state to a FAANG-level standard. The upgrade adds three new sections (Experience, Education, Certifications), replaces all project data, expands the skills grid, and applies a consistent glassmorphism design system across every section. All work stays within the existing CRA project and the packages already listed in `package.json`.

The page remains a single-page application. All sections live in one scrollable document. Navigation uses anchor links (`/#section-id`) and the existing `react-scroll`-compatible `id` attributes on section wrappers.

---

## Architecture

### Component Tree (after upgrade)

```
App
└── Home                          ← orchestrator, renders all sections in order
    ├── Navbar                    ← fixed header, scroll-aware blur
    ├── Hero (inline in Home)     ← full-viewport landing area
    ├── About                     ← bio + tilt photo
    ├── Skills                    ← categorised skill grid
    ├── Projects                  ← three production project cards
    ├── Experience                ← NEW — vertical timeline
    ├── Education                 ← NEW — two qualification cards
    ├── Certifications            ← NEW — one certification card
    ├── Github                    ← calendar + stats
    ├── Contact                   ← EmailJS form + contact info
    └── Footer                    ← credit line + social links
```

### Data Flow

All section data (experience entries, education cards, certifications, skills, projects) is defined as plain JavaScript arrays/objects **inside each component file**. There is no global state, no Context, and no external data fetching. This keeps each component self-contained and avoids introducing Redux or any new package.

AOS is initialised once in `Home.jsx` via `AOS.init()` (already present). All child components use `data-aos` attributes; they do not call `AOS.init()` themselves.

EmailJS state (`status: 'idle' | 'success' | 'error'`) is managed with `useState` inside `Contact.jsx`.

Navbar scroll state (`scrolled: boolean`) is managed with `useState` + `useEffect` inside `Navbar.jsx`.

---

## File Structure

### New files to create

```
src/Components/Experience/
    Experience.jsx
    Experience.css

src/Components/Education/
    Education.jsx
    Education.css

src/Components/Certifications/
    Certifications.jsx
    Certifications.css
```

### Files to modify

```
src/Components/Home/Home.jsx        — import and render new components; update section order
src/Components/Home/Home.css        — hero layout, profile photo glow animation
src/Components/Navbar/Navbar.jsx    — add Experience/Education links; add scroll effect
src/Components/Navbar/Navbar.css    — scrolled state styles (backdrop-filter)
src/Components/About/About.jsx      — wrap photo in Tilt; update bio text
src/Components/About/About.css      — glassmorphism card on bio panel
src/Components/Skills/Skills.jsx    — replace flat grid with categorised grid
src/Components/Skills/Skills.css    — category headings, glassmorphism cards, hover glow
src/Components/Projects/Projects.jsx — replace 5 old projects with 3 new ones
src/Components/Projects/Projects.css — glassmorphism cards, gradient accent header
src/Components/Github/Github.jsx    — minor: ensure AOS attributes present
src/Components/Contact/Contact.jsx  — add success/error state; update UI
src/Components/Contact/Contact.css  — glassmorphism form panel
src/Components/Footer/Footer.jsx    — add GitHub + LinkedIn icon links
src/Components/Footer/Footer.css    — updated styles
src/index.css                       — global CSS variables, body background
```

---

## Design System

### Colour Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#23283e` | Page background, navbar background |
| `--card-bg` | `rgba(255,255,255,0.05)` | Glassmorphism card background |
| `--accent` | `#40e48f` | Headings underline, borders, icons, glow |
| `--text` | `#bdbddd` | Body text |
| `--text-heading` | `#ffffff` | Section h1, card titles |
| `--border-glass` | `rgba(64,228,143,0.2)` | Glassmorphism card border |
| `--card-bg-solid` | `#2a2f4c` | Fallback card background (no backdrop-filter support) |

These tokens are defined as CSS custom properties on `:root` in `src/index.css` and referenced throughout component CSS files.

### Glassmorphism Card Pattern

Every card component (Skills, Projects, Experience, Education, Certifications) uses this shared CSS pattern:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(64, 228, 143, 0.2);
  border-radius: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(64, 228, 143, 0.6);
  box-shadow: 0 0 20px rgba(64, 228, 143, 0.15);
}
```

This pattern is **not** extracted into a shared CSS file (to avoid introducing CSS modules or a new architecture). Instead, each component's CSS file defines its own `.skills-card`, `.project-card`, `.experience-card`, etc. with the same property values. This matches the existing project convention.

### Typography

- Section headings (`h1`): uppercase, `font-size: 2.5rem`, `color: #ffffff`, with a `2px solid #40e48f` bottom border on a `::after` pseudo-element or an `<hr>` styled with the accent colour.
- Card titles (`h3`): `font-size: 1.3rem`, `color: #40e48f`.
- Body text: `font-size: 1rem`, `color: #bdbddd`, `line-height: 1.7`.
- Category labels in Skills: `font-size: 1.1rem`, `color: #40e48f`, `text-transform: uppercase`, `letter-spacing: 0.1em`.

### Spacing

- Section padding: `padding: 100px 5%` on desktop (≥ 768px).
- Section padding on mobile: `padding: 60px 4%`.
- Card gap in grids: `gap: 20px`.
- Timeline entry vertical gap: `margin-bottom: 40px`.

### Transitions

All interactive elements use `transition: all 0.3s ease` or a more specific property transition of `0.3s`. No transition exceeds `0.3s` for hover states (per Requirement 11.6).

---

## Components and Interfaces

### Navbar

**Props:** none  
**State:**
- `menuOpen: boolean` — controls hamburger menu visibility (renamed from `hameburger` string toggle to a boolean for clarity)
- `scrolled: boolean` — true when `window.scrollY > 50`

**Scroll effect implementation:**
```jsx
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

The `navbar` div receives a conditional class: `className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}`.

```css
.navbar-scrolled {
  background: rgba(35, 40, 62, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
```

**Nav links:** Home, About, Skills, Projects, Experience, Education, Contact — all as `<a href="/#section-id">` anchor links. The Resume button remains a download link.

**Hamburger:** On mobile (≤ 768px), all nav links are hidden behind the hamburger toggle. Clicking any link calls `setMenuOpen(false)`.

---

### Home (Hero section)

The Hero content remains inline in `Home.jsx` (not extracted to a separate component, matching the existing pattern). The layout changes to a two-column flex row on desktop: left column has text content, right column has the profile photo.

**Profile photo glow animation:**
```css
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(64, 228, 143, 0.4); }
  50%       { box-shadow: 0 0 35px rgba(64, 228, 143, 0.8); }
}

.hero-photo {
  border-radius: 50%;
  border: 3px solid #40e48f;
  animation: glow-pulse 2.5s ease-in-out infinite;
  width: 280px;
  height: 280px;
  object-fit: cover;
}
```

**Responsive (< 768px):** flex-direction switches to `column-reverse` so the photo appears above the text. Heading font-size drops to `2rem`.

---

### About

**Props:** none  
**State:** none

The profile photo is wrapped in `<Tilt>` from `react-parallax-tilt` with `tiltMaxAngleX={10}` and `tiltMaxAngleY={10}`. The bio text and interests list are in a sibling div with `data-aos="fade-left"`. The photo div has `data-aos="fade-right"`.

The bio panel uses the glassmorphism card pattern.

---

### Skills

**Props:** none  
**State:** none

**Data structure (defined in Skills.jsx):**
```js
const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Java',       icon: SiJava },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js',     icon: FaReact },
      { name: 'Next.js',      icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux',        icon: SiRedux },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',     icon: IoLogoNodejs },
      { name: 'Express.js',  icon: SiExpress },
      { name: 'NestJS',      icon: SiNestjs },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MongoDB',     icon: SiMongodb },
      { name: 'PostgreSQL',  icon: SiPostgresql },
      { name: 'MySQL',       icon: SiMysql },
      { name: 'Redis',       icon: SiRedis },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS',        icon: FaAws },
      { name: 'Docker',     icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Git',        icon: SiGit },
    ],
  },
];
```

Each category renders a heading and a flex-wrap grid of skill cards. Each card has `data-aos="fade-up"` and `data-aos-delay` staggered by index (`index * 50`ms, capped at 400ms).

---

### Projects

**Props:** none  
**State:** none

**Data structure (defined in Projects.jsx):**
```js
const projects = [
  {
    title: 'Ghanshyam Murti Bhandar',
    description: 'Scalable e-commerce backend handling orders, payments, inventory, logistics, and GST invoicing. Features secure JWT authentication, Razorpay payment integration, shipping automation via Delhivery and Shiprocket, and an admin dashboard built with Next.js.',
    techStack: [SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiRazorpay],
    liveUrl: '#',
    isPrivate: true,
  },
  {
    title: 'DecorERP',
    description: 'Full-scale ERP system with double-entry accounting, multi-currency support, GST-compliant tax engine, BOM-based manufacturing workflows, Excel bulk imports, and real-time financial reports.',
    techStack: [FaReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql],
    liveUrl: '#',
    isPrivate: true,
  },
  {
    title: 'Bill Management System',
    description: 'Production-ready POS system with QR and barcode billing, GST logic, inventory tracking, returns and wastage handling, role-based access control, and analytics dashboards.',
    techStack: [FaReact, SiNodedotjs, SiExpress, SiMongodb],
    liveUrl: '#',
    isPrivate: true,
  },
];
```

Each project card has:
- A gradient accent header bar (`background: linear-gradient(135deg, rgba(64,228,143,0.15), rgba(64,228,143,0.05))`)
- `data-aos="flip-left"` on the card wrapper
- A "See this Live" button (links to `liveUrl`)
- A "View Code" button: if `isPrivate`, rendered as `<button disabled data-tip="Private Repository">` with `ReactTooltip`

The card layout is a vertical flex column (title → description → tech stack → buttons), not the current side-by-side image+text layout. This is a deliberate design decision: the new projects have no screenshots, so the image column is removed. The card width is `min(480px, 100%)` and cards are arranged in a responsive grid (`repeat(auto-fit, minmax(320px, 1fr))`).

---

### Experience (new)

**Props:** none  
**State:** none

**Data structure (defined in Experience.jsx):**
```js
const experiences = [
  {
    role: 'Backend Developer',
    company: 'FirstMeridian Global Services Private Limited',
    duration: 'Nov 2025 – Present',
    bullets: [
      'Building and owning enterprise-grade backend systems for multiple large clients',
      'Working on legacy codebases while designing new modules using NestJS',
      'Refactoring complex business logic to improve scalability and maintainability',
      'Designing secure REST APIs with authentication, authorization, and validation',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'BRT Multi Software Company',
    duration: 'Feb 2025 – Nov 2025',
    bullets: [
      'Developed full stack MERN applications for production clients',
      'Built custom MLM platforms with complex commission and transaction logic',
      'Integrated blockchain and MetaMask for secure crypto-based workflows',
    ],
  },
  {
    role: 'Online Programming Tutor',
    company: 'Trivium Education Services (P) Ltd.',
    duration: 'Jan 2024 – Nov 2025',
    bullets: [
      'Provided real-time debugging and backend development support',
      'Explained complex programming and system design concepts to US clients',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Red & White Multimedia Education',
    duration: 'Sep 2023 – Feb 2025',
    bullets: [
      'Built full stack applications using the MERN stack',
      'Delivered reusable, maintainable, production-ready solutions',
    ],
  },
];
```

**Timeline layout:**

```
  [dot]──────────────────────────────────
  │   Role Title
  │   Company Name          Duration
  │   • bullet
  │   • bullet
  │
  [dot]──────────────────────────────────
  ...
```

The vertical connector line is a `2px solid #40e48f` left border on the timeline container. Each entry has a `16px` circular dot (`border-radius: 50%; background: #40e48f`) positioned absolutely on the left edge. Each entry has `data-aos="fade-right"` with staggered `data-aos-delay`.

---

### Education (new)

**Props:** none  
**State:** none

**Data structure (defined in Education.jsx):**
```js
const educationData = [
  {
    degree: 'Bachelor of Arts (Regular)',
    institution: 'Deen Dayal Upadhyay Gorakhpur University',
    duration: '2019 – 2022',
    icon: FaGraduationCap,
  },
  {
    degree: 'Full Stack Web Development (Full Time)',
    institution: 'Masai School',
    duration: '2022 – 2023',
    icon: FaLaptopCode,
  },
];
```

Cards are displayed in a two-column flex row on desktop, stacked on mobile. Each card has `data-aos="fade-up"`.

---

### Certifications (new)

**Props:** none  
**State:** none

**Data structure (defined in Certifications.jsx):**
```js
const certifications = [
  {
    title: 'Prompt Engineering Certification',
    issuer: 'Masai School',
    icon: FaCertificate,
  },
];
```

Cards are centred. Each card has `data-aos="zoom-in"`.

---

### Contact

**Props:** none  
**State:**
- `status: 'idle' | 'success' | 'error'` — controls notification display

**EmailJS integration:**
```jsx
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm('service_pp1pngp', 'template_x94zquf', form.current, 'wg-_SoCiIcJ6MIlSQ')
    .then(() => {
      setStatus('success');
      form.current.reset();
    })
    .catch(() => {
      setStatus('error');
    });
};
```

**Notification rendering:**
```jsx
{status === 'success' && (
  <div className="contact-notification contact-success">
    Message sent successfully! I'll get back to you soon.
  </div>
)}
{status === 'error' && (
  <div className="contact-notification contact-error">
    Something went wrong. Please try again or email me directly.
  </div>
)}
```

The notification is rendered above the submit button. `status` resets to `'idle'` when the user starts typing again (via `onChange` on any field calling `setStatus('idle')`).

The form and contact-info panels are side-by-side on desktop using `display: flex; gap: 40px`. On mobile (< 768px), `flex-direction: column`.

---

### Footer

**Props:** none  
**State:** none

Updated to include GitHub and LinkedIn icon links alongside the existing credit text. Layout: two rows — top row has social icons, bottom row has credit text.

---

## Data Models

All data is plain JavaScript — no TypeScript interfaces, no PropTypes (matching existing project convention).

### Skill entry
```js
{ name: string, icon: ReactComponent }
```

### Skill category
```js
{ category: string, skills: SkillEntry[] }
```

### Project entry
```js
{
  title: string,
  description: string,
  techStack: ReactComponent[],   // react-icons components
  liveUrl: string,
  isPrivate: boolean,
}
```

### Experience entry
```js
{
  role: string,
  company: string,
  duration: string,
  bullets: string[],
}
```

### Education entry
```js
{
  degree: string,
  institution: string,
  duration: string,
  icon: ReactComponent,
}
```

### Certification entry
```js
{
  title: string,
  issuer: string,
  icon: ReactComponent,
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

PBT applicability assessment: This feature is primarily a UI/content upgrade. Most acceptance criteria are about visual rendering, CSS styling, and content correctness. However, several criteria involve logic that varies meaningfully with input data — specifically the data-driven rendering of cards (skills, projects, education, certifications) and the Contact form's success/error state management. These are suitable for property-based testing using a library such as `fast-check`.

The following properties are identified after prework analysis and redundancy reflection:

---

### Property 1: Hamburger menu closes on any nav link click

*For any* navigation link rendered inside the hamburger menu, clicking that link should result in the menu being closed (menu state set to false/hidden), regardless of which link was clicked.

**Validates: Requirements 2.5**

---

### Property 2: Navbar scroll class applied for any non-zero scroll position

*For any* scroll position greater than 50px, the Navbar element should have the `navbar-scrolled` CSS class applied; for any scroll position of 0px or less, the class should be absent.

**Validates: Requirements 2.6**

---

### Property 3: Every skill in the data array is rendered as a card

*For any* skill object in the `skillCategories` data array, the rendered Skills section should contain a card element displaying that skill's name.

**Validates: Requirements 4.6**

---

### Property 4: Every project card contains all required fields

*For any* project object in the `projects` data array, the rendered project card should contain the project title, description text, at least one tech stack icon, and a "See this Live" button.

**Validates: Requirements 5.2**

---

### Property 5: Private projects render a disabled View Code button

*For any* project object where `isPrivate` is `true`, the rendered "View Code" button should have the `disabled` attribute and a tooltip containing "Private Repository".

**Validates: Requirements 5.8**

---

### Property 6: Every education entry is rendered with all three fields

*For any* education object in the `educationData` array, the rendered Education section should contain a card displaying the institution name, degree/programme title, and duration string.

**Validates: Requirements 7.5**

---

### Property 7: Every certification entry is rendered with title and issuer

*For any* certification object in the `certifications` array, the rendered Certifications section should contain a card displaying the certification title and issuer name.

**Validates: Requirements 8.3**

---

### Property 8: Successful EmailJS submission clears form and shows success notification

*For any* valid form submission (non-empty name, email, message) where the EmailJS call resolves successfully, the form fields should be empty after submission and the success notification element should be visible.

**Validates: Requirements 10.3**

---

### Property 9: Failed EmailJS submission shows error notification without clearing form

*For any* valid form submission where the EmailJS call rejects, the form fields should retain their submitted values and the error notification element should be visible.

**Validates: Requirements 10.4**

---

## Error Handling

### EmailJS failures
- Network errors and EmailJS API errors are caught in the `.catch()` handler.
- The `status` state is set to `'error'`, displaying the error notification.
- Form fields are **not** cleared on error so the user can retry or copy their message.
- No error is thrown to the React error boundary — the failure is handled gracefully in-component.

### Missing images
- Profile photo uses an absolute `ibb.co` URL. If the image fails to load, the `<img>` element will show its `alt` text. No fallback image is implemented (out of scope).

### GitHub stats images
- The `github-readme-stats` and `github-readme-streak-stats` URLs are external services. If they are unavailable, the `<img>` elements will show broken image icons. No fallback is implemented (existing behaviour, out of scope).

### AOS initialisation
- `AOS.init()` is called once in `Home.jsx` before the component tree renders. If AOS fails to initialise (e.g., in a test environment), `data-aos` attributes are simply ignored — no runtime error occurs.

---

## Animation Strategy

AOS is already installed (`aos@2.3.4`) and initialised in `Home.jsx`. The following configuration is used:

```js
AOS.init({
  duration: 700,
  once: true,       // animate only on first scroll into view
  offset: 80,       // trigger 80px before element enters viewport
});
```

`once: true` is important for performance — it prevents re-triggering animations on scroll-up, which can feel jarring.

### Animation assignments by section

| Section | Animation | Notes |
|---|---|---|
| Hero name heading | `data-aos="fade-down"` | Existing `flip-up` replaced with subtler fade |
| About photo | `data-aos="fade-right"` | |
| About bio panel | `data-aos="fade-left"` | |
| Skills category heading | `data-aos="fade-up"` | |
| Skills cards | `data-aos="fade-up"` + staggered delay | `data-aos-delay={index * 50}` |
| Project cards | `data-aos="flip-left"` | Matches existing pattern |
| Experience entries | `data-aos="fade-right"` + staggered delay | |
| Education cards | `data-aos="fade-up"` | |
| Certifications cards | `data-aos="zoom-in"` | |
| GitHub calendar | `data-aos="fade-right"` | Existing |
| GitHub stats | `data-aos="fade-right"` | Existing |
| Contact form | `data-aos="fade-right"` | |
| Contact info | `data-aos="fade-left"` | |

---

## Responsive Breakpoints

Two breakpoints are used, matching the existing project convention:

### 768px (tablet / large mobile)

- Navbar: hamburger menu activates; nav links hidden by default.
- Hero: switches from two-column (photo + text) to single column; heading font-size → `2rem`.
- About: switches from two-column to single column.
- Skills: category grids reduce column count.
- Projects: cards stack to single column.
- Experience: timeline left-padding reduces.
- Education: two-column → single column.
- Contact: side-by-side → stacked.

### 480px (small mobile)

- Skills cards: grid reduces to 2 columns.
- Project cards: description font-size reduces to `0.9rem`.
- Section padding reduces to `40px 4%`.
- Hero heading: `1.8rem`.

### No horizontal overflow rule

All section containers use `width: 100%; overflow-x: hidden` or `max-width: 100%` on their root elements to prevent horizontal scroll on narrow viewports (Requirement 11.9).

---

## EmailJS Integration Design

### Configuration (unchanged from existing)
- Service ID: `service_pp1pngp`
- Template ID: `template_x94zquf`
- Public key: `wg-_SoCiIcJ6MIlSQ`
- Template variables: `user_name`, `user_email`, `message` (field `name` attributes on form inputs)

### State machine

```
idle ──[submit]──► (sending)
                      │
              ┌───────┴───────┐
           resolve          reject
              │                │
           success           error
              │                │
         [user types]    [user types]
              └───────┬───────┘
                    idle
```

The `(sending)` state is not tracked separately — the submit button can optionally be disabled during the async call by checking a `sending` boolean, but this is a minor UX detail left to implementation. The three observable states are `idle`, `success`, and `error`.

### Form reset

`form.current.reset()` is used on success (native DOM reset) rather than manually clearing each field's value. This is simpler and handles all field types correctly.

---

## Testing Strategy

### Unit tests (example-based)

Use the existing `@testing-library/react` setup (`src/setupTests.js` already configures `jest-dom`).

Focus areas:
- Navbar renders all 7 nav links with correct text
- Navbar renders Resume download button
- Contact form renders 3 fields (name, email, message)
- Contact form displays success notification after mocked successful EmailJS call
- Contact form displays error notification after mocked failed EmailJS call
- Experience renders exactly 4 timeline entries
- Education renders exactly 2 cards
- Certifications renders exactly 1 card
- Footer renders GitHub and LinkedIn links
- Projects renders exactly 3 project cards

### Property-based tests

Use `fast-check` for property-based testing. Since `fast-check` is not in `package.json`, these tests are **described here as specifications** for future implementation when the package is added, or can be implemented as parameterised example-based tests using `@testing-library/react` with multiple data inputs.

**Alternative without fast-check:** Each property can be validated as a data-driven test by iterating over the actual data arrays and asserting the property holds for each element. This is not true PBT (no random generation) but validates the same invariants across all real data.

Properties to implement:
- **Property 3**: Iterate over all skills in `skillCategories` and assert each name appears in the rendered output.
- **Property 4**: Iterate over all projects and assert each card contains title, description, and live button.
- **Property 5**: Iterate over projects where `isPrivate === true` and assert the View Code button is disabled.
- **Property 6**: Iterate over all education entries and assert each card contains institution, degree, and duration.
- **Property 7**: Iterate over all certifications and assert each card contains title and issuer.
- **Property 8**: Mock `emailjs.sendForm` to resolve; submit form; assert fields empty and success notification visible.
- **Property 9**: Mock `emailjs.sendForm` to reject; submit form; assert fields retain values and error notification visible.

### Integration / smoke checks

- Build the app (`npm run build`) and verify no compilation errors.
- Run Lighthouse on the production build and verify performance score ≥ 70.
- Manually verify AOS animations trigger on scroll in the browser.
- Manually verify navbar blur effect activates on scroll.
- Manually verify responsive layout at 768px and 480px using browser DevTools.

# Requirements Document

## Introduction

This document defines the requirements for upgrading Deepak Pandey's existing React (CRA) portfolio website to a FAANG-level standard. The existing codebase has a working foundation — Navbar, Hero, About, Skills, Projects, GitHub, Contact, and Footer sections — but requires a complete visual and content overhaul. The upgrade introduces three new sections (Experience, Education, Certifications), replaces outdated project data with three live production projects, expands the skills grid to reflect the current technology stack, and elevates the overall design to match the quality bar of portfolios from engineers at top-tier technology companies. All changes must be implemented within the existing React (CRA) project without introducing new frameworks or replacing installed packages.

---

## Glossary

- **Portfolio_App**: The React (CRA) single-page application being upgraded.
- **Hero_Section**: The full-viewport landing area containing the developer's name, animated role titles, summary, and social links.
- **About_Section**: The section presenting a personal bio, profile photo, and a resume download button.
- **Skills_Section**: The section displaying categorised technology skill cards with icons.
- **Projects_Section**: The section displaying production project cards with descriptions, tech stacks, and action buttons.
- **Experience_Section**: A new section displaying a vertical timeline of professional work history.
- **Education_Section**: A new section displaying academic and training qualifications.
- **Certifications_Section**: A new section displaying earned certifications and awards.
- **GitHub_Section**: The section displaying the GitHub contribution calendar and statistics.
- **Contact_Section**: The section containing the EmailJS-powered contact form and contact details.
- **Navbar**: The fixed top navigation bar with links to all sections and a resume download button.
- **Footer**: The bottom bar crediting the developer and the technology used.
- **AOS**: The Animate On Scroll library already installed (`aos` package) used for scroll-triggered animations.
- **EmailJS**: The third-party email service already configured with service ID `service_pp1pngp`, template ID `template_x94zquf`, and public key `wg-_SoCiIcJ6MIlSQ`.
- **Glassmorphism_Card**: A UI card style using a semi-transparent background, backdrop blur, and a subtle border to create a frosted-glass appearance.
- **Typewriter**: The `typewriter-effect` package already installed, used for animated role-title cycling in the Hero_Section.

---

## Requirements

### Requirement 1: Hero Section — Professional Layout and Animated Introduction

**User Story:** As a recruiter visiting the portfolio, I want to immediately see a polished, animated hero section with the developer's name, current role, and social links, so that I can form a strong first impression within seconds.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the developer's full name "Deepak Pandey" as the primary heading using a font size of at least 3rem on desktop viewports.
2. THE Hero_Section SHALL display an animated role-title sequence using the Typewriter component cycling through: "Full Stack Web Developer", "Backend Engineer", "MERN Stack Developer", and "Generative AI Enthusiast".
3. THE Hero_Section SHALL display the professional summary paragraph from the resume as a subtitle beneath the role titles.
4. THE Hero_Section SHALL display a circular profile photo sourced from `https://i.ibb.co/PMJzmBV/Untitled-design.jpg` with a glowing green border animation.
5. THE Hero_Section SHALL display icon links for GitHub (`https://github.com/deepak01112002`), LinkedIn (`https://www.linkedin.com/in/deepak-pandey-0511a3250/`), Gmail (`deepak8574757609@gmail.com`), and phone (`+917860863692`).
6. THE Hero_Section SHALL display a "Download Resume" call-to-action button that triggers a download of the resume PDF.
7. WHEN the viewport width is less than 768px, THE Hero_Section SHALL stack the photo and text content vertically and reduce the primary heading font size to at least 2rem.
8. THE Hero_Section SHALL occupy 100% of the viewport height on initial load.

---

### Requirement 2: Navbar — Extended Navigation with Smooth Scroll

**User Story:** As a visitor, I want a fixed navigation bar that links to all sections including the new Experience and Education sections, so that I can jump to any part of the page without scrolling manually.

#### Acceptance Criteria

1. THE Navbar SHALL remain fixed at the top of the viewport at all times during scrolling.
2. THE Navbar SHALL contain navigation links for: Home, About, Skills, Projects, Experience, Education, and Contact.
3. THE Navbar SHALL contain a "Resume" button that downloads the resume PDF when clicked.
4. WHEN the viewport width is less than 768px, THE Navbar SHALL collapse all navigation links behind a hamburger menu icon.
5. WHEN the hamburger menu is open and a navigation link is clicked, THE Navbar SHALL close the hamburger menu.
6. WHEN the user scrolls past the top of the page, THE Navbar SHALL apply a semi-transparent background with a backdrop blur effect to remain readable over page content.

---

### Requirement 3: About Section — Bio with Updated Content

**User Story:** As a recruiter, I want to read a concise, up-to-date personal bio alongside the developer's photo, so that I can understand who Deepak is beyond his technical skills.

#### Acceptance Criteria

1. THE About_Section SHALL display the profile photo from `https://i.ibb.co/PMJzmBV/Untitled-design.jpg` with a tilt animation using the `react-parallax-tilt` package.
2. THE About_Section SHALL display an updated bio paragraph reflecting the current professional summary: Full Stack Web Developer with MERN stack expertise, enterprise backend experience, and a growing focus on Generative AI.
3. THE About_Section SHALL display a list of personal interests: Singing, Travelling, and Reading Adventure Stories.
4. THE About_Section SHALL display a "Download Resume" button that triggers a download of the resume PDF.
5. WHEN the About_Section enters the viewport, THE About_Section SHALL animate its content using AOS fade-in animations.

---

### Requirement 4: Skills Section — Categorised and Updated Technology Grid

**User Story:** As a technical recruiter, I want to see Deepak's full current technology stack organised by category, so that I can quickly assess his fit for a role.

#### Acceptance Criteria

1. THE Skills_Section SHALL display skill cards organised into the following four categories: "Languages", "Frontend", "Backend", and "Cloud & DevOps".
2. THE Skills_Section SHALL include the following skills under "Languages": JavaScript, TypeScript, Java.
3. THE Skills_Section SHALL include the following skills under "Frontend": React.js, Next.js, Tailwind CSS, Redux.
4. THE Skills_Section SHALL include the following skills under "Backend": Node.js, Express.js, NestJS, Spring Boot, MongoDB, PostgreSQL, MySQL, Redis.
5. THE Skills_Section SHALL include the following skills under "Cloud & DevOps": AWS, Docker, Kubernetes, Git.
6. THE Skills_Section SHALL display each skill as a Glassmorphism_Card containing a technology icon from `react-icons` and the technology name.
7. WHEN a skill card enters the viewport, THE Skills_Section SHALL animate the card using AOS.
8. WHEN a skill card is hovered, THE Skills_Section SHALL apply a green accent glow effect to the card border.

---

### Requirement 5: Projects Section — Three Live Production Projects

**User Story:** As a hiring manager, I want to see Deepak's most impressive and recent production projects with clear descriptions and technology stacks, so that I can evaluate the complexity and quality of his work.

#### Acceptance Criteria

1. THE Projects_Section SHALL display exactly three project cards: "Ghanshyam Murti Bhandar", "DecorERP", and "Bill Management System".
2. THE Projects_Section SHALL display for each project card: a project title, a description, a technology stack icon row, and a "See this Live" button.
3. THE Projects_Section SHALL display the following description for "Ghanshyam Murti Bhandar": "Scalable e-commerce backend handling orders, payments, inventory, logistics, and GST invoicing. Features secure JWT authentication, Razorpay payment integration, shipping automation via Delhivery and Shiprocket, and an admin dashboard built with Next.js."
4. THE Projects_Section SHALL display the following description for "DecorERP": "Full-scale ERP system with double-entry accounting, multi-currency support, GST-compliant tax engine, BOM-based manufacturing workflows, Excel bulk imports, and real-time financial reports."
5. THE Projects_Section SHALL display the following description for "Bill Management System": "Production-ready POS system with QR and barcode billing, GST logic, inventory tracking, returns and wastage handling, role-based access control, and analytics dashboards."
6. THE Projects_Section SHALL display each project card as a Glassmorphism_Card with a gradient accent header.
7. WHEN a project card enters the viewport, THE Projects_Section SHALL animate the card using AOS flip animation.
8. IF a project's source code is private, THEN THE Projects_Section SHALL display a disabled "View Code" button with a tooltip reading "Private Repository".

---

### Requirement 6: Experience Section — Professional Work History Timeline

**User Story:** As a recruiter, I want to see Deepak's complete work history in a clear timeline format, so that I can understand his career progression and the scope of his professional experience.

#### Acceptance Criteria

1. THE Experience_Section SHALL be a new React component rendered between the Projects_Section and the GitHub_Section in the page layout.
2. THE Experience_Section SHALL display a vertical timeline containing four entries in reverse chronological order.
3. THE Experience_Section SHALL display the following entry as the most recent: Role "Backend Developer", Company "FirstMeridian Global Services Private Limited", Duration "Nov 2025 – Present", with bullet points: "Building and owning enterprise-grade backend systems for multiple large clients", "Working on legacy codebases while designing new modules using NestJS", "Refactoring complex business logic to improve scalability and maintainability", "Designing secure REST APIs with authentication, authorization, and validation".
4. THE Experience_Section SHALL display the following entry as the second: Role "Full Stack Developer", Company "BRT Multi Software Company", Duration "Feb 2025 – Nov 2025", with bullet points: "Developed full stack MERN applications for production clients", "Built custom MLM platforms with complex commission and transaction logic", "Integrated blockchain and MetaMask for secure crypto-based workflows".
5. THE Experience_Section SHALL display the following entry as the third: Role "Online Programming Tutor", Company "Trivium Education Services (P) Ltd.", Duration "Jan 2024 – Nov 2025", with bullet points: "Provided real-time debugging and backend development support", "Explained complex programming and system design concepts to US clients".
6. THE Experience_Section SHALL display the following entry as the fourth: Role "Full Stack Web Developer", Company "Red & White Multimedia Education", Duration "Sep 2023 – Feb 2025", with bullet points: "Built full stack applications using the MERN stack", "Delivered reusable, maintainable, production-ready solutions".
7. WHEN an Experience_Section timeline entry enters the viewport, THE Experience_Section SHALL animate the entry using AOS slide animation.
8. THE Experience_Section SHALL use a green accent colour for the timeline connector line and node dots, consistent with the existing colour scheme (`#40e48f`).

---

### Requirement 7: Education Section — Academic and Training Qualifications

**User Story:** As a recruiter, I want to see Deepak's educational background, so that I can verify his formal qualifications alongside his practical experience.

#### Acceptance Criteria

1. THE Education_Section SHALL be a new React component rendered after the Experience_Section in the page layout.
2. THE Education_Section SHALL display two education cards.
3. THE Education_Section SHALL display the following card: Degree "Bachelor of Arts (Regular)", Institution "Deen Dayal Upadhyay Gorakhpur University", Duration "2019 – 2022".
4. THE Education_Section SHALL display the following card: Programme "Full Stack Web Development (Full Time)", Institution "Masai School", Duration "2022 – 2023".
5. THE Education_Section SHALL display each card as a Glassmorphism_Card with an institution name, degree/programme title, and duration.
6. WHEN an Education_Section card enters the viewport, THE Education_Section SHALL animate the card using AOS fade-up animation.

---

### Requirement 8: Certifications Section — Awards and Certificates

**User Story:** As a recruiter, I want to see Deepak's certifications and awards, so that I can recognise his commitment to continuous learning.

#### Acceptance Criteria

1. THE Certifications_Section SHALL be a new React component rendered after the Education_Section in the page layout.
2. THE Certifications_Section SHALL display one certification card: Title "Prompt Engineering Certification", Issuer "Masai School".
3. THE Certifications_Section SHALL display each certification card as a Glassmorphism_Card containing the certification title, issuer name, and a badge icon.
4. WHEN a Certifications_Section card enters the viewport, THE Certifications_Section SHALL animate the card using AOS zoom-in animation.

---

### Requirement 9: GitHub Section — Polished Contribution Display

**User Story:** As a technical reviewer, I want to see Deepak's GitHub activity and statistics in a clean layout, so that I can assess his coding consistency and open-source engagement.

#### Acceptance Criteria

1. THE GitHub_Section SHALL display the GitHub contribution calendar for username `deepak01112002` using the `react-github-calendar` package.
2. THE GitHub_Section SHALL display the three GitHub statistics images: streak stats, top languages, and general stats, using the existing `github-readme-stats` and `github-readme-streak-stats` URLs.
3. THE GitHub_Section SHALL display the activity summary list: "1100+ Hours Practical Coding", "250+ Hours Data Structures & Algorithms", "100+ Hours Soft Skill Development", "4+ Projects", "10+ Mini Projects", "300+ Git Commits".
4. WHEN the GitHub_Section content enters the viewport, THE GitHub_Section SHALL animate using AOS fade-right animation.

---

### Requirement 10: Contact Section — EmailJS Form with Improved UI

**User Story:** As a recruiter or collaborator, I want to send Deepak a message directly from the portfolio, so that I can reach out without leaving the page.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a contact form with fields: "Name" (text, required), "Email" (email, required), and "Message" (textarea, required).
2. WHEN the contact form is submitted with all required fields filled, THE Contact_Section SHALL send the message using EmailJS with service ID `service_pp1pngp`, template ID `template_x94zquf`, and public key `wg-_SoCiIcJ6MIlSQ`.
3. WHEN the EmailJS submission succeeds, THE Contact_Section SHALL clear all form fields and display a success notification to the user.
4. IF the EmailJS submission fails, THEN THE Contact_Section SHALL display an error notification to the user without clearing the form fields.
5. THE Contact_Section SHALL display contact details: phone number `+917860863692`, email `deepak8574757609@gmail.com`, and location "Gorakhpur, Uttar Pradesh".
6. THE Contact_Section SHALL display icon links to the GitHub profile and LinkedIn profile.
7. THE Contact_Section SHALL display the form and contact details side by side on desktop viewports and stacked vertically on viewports narrower than 768px.

---

### Requirement 11: Overall Design System — FAANG-Level Visual Quality

**User Story:** As a visitor, I want the portfolio to feel polished, modern, and visually consistent throughout, so that it reflects the quality of a senior engineer's work.

#### Acceptance Criteria

1. THE Portfolio_App SHALL use the existing dark navy background colour `#23283e` as the base background for all sections.
2. THE Portfolio_App SHALL use `#40e48f` as the primary accent colour for headings, borders, icons, and interactive highlights throughout all sections.
3. THE Portfolio_App SHALL apply Glassmorphism_Card styling — semi-transparent background (`rgba(255,255,255,0.05)`), `backdrop-filter: blur(10px)`, and a `1px solid rgba(64,228,143,0.2)` border — to all card components across Skills, Projects, Experience, Education, and Certifications sections.
4. THE Portfolio_App SHALL use consistent section padding of at least 80px top and bottom on desktop viewports.
5. THE Portfolio_App SHALL use consistent section heading styles: uppercase text, a green underline accent, and a font size of at least 2rem.
6. WHEN any interactive element (button, card, nav link) is hovered, THE Portfolio_App SHALL apply a smooth CSS transition of 0.3s or less.
7. THE Portfolio_App SHALL use only the packages already listed in `package.json` and SHALL NOT introduce new npm dependencies.
8. THE Portfolio_App SHALL pass a Lighthouse performance score of 70 or above when built and served in production mode.
9. WHEN the page is viewed on a viewport width between 320px and 767px, THE Portfolio_App SHALL render all sections without horizontal overflow.

---

### Requirement 12: Footer — Updated Credit Line

**User Story:** As a visitor reaching the bottom of the page, I want to see a clean footer that credits the developer, so that the page ends professionally.

#### Acceptance Criteria

1. THE Footer SHALL display the text "Designed & Built by Deepak Pandey".
2. THE Footer SHALL display the text "Built with React.js".
3. THE Footer SHALL display icon links to the GitHub profile (`https://github.com/deepak01112002`) and LinkedIn profile (`https://www.linkedin.com/in/deepak-pandey-0511a3250/`).
4. THE Footer SHALL use the existing dark navy background and green accent colour consistent with the overall design system.

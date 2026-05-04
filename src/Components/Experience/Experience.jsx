import React from "react";
import "./Experience.css";

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

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h1>Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-entry"
            data-aos="fade-right"
            data-aos-delay={Math.min(index * 100, 400)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-meta">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

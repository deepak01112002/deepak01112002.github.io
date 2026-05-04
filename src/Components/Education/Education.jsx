import React from "react";
import "./Education.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

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

function Education() {
  return (
    <section id="education" className="education-section">
      <h1>Education</h1>
      <div className="education-grid">
        {educationData.map((edu, index) => {
          const IconComponent = edu.icon;
          return (
            <div
              key={index}
              className="education-card"
              data-aos="fade-up"
            >
              <IconComponent className="edu-icon" />
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-duration">{edu.duration}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;

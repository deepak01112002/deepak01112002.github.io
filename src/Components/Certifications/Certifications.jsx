import React from "react";
import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: 'Prompt Engineering Certification',
    issuer: 'Masai School',
    icon: FaCertificate,
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h1>Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <div
              key={index}
              className="certification-card"
              data-aos="zoom-in"
            >
              <IconComponent className="cert-icon" />
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;

import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiPostgresql } from "react-icons/si";
import ReactTooltip from "react-tooltip";

const projects = [
  {
    title: 'Ghanshyam Murti Bhandar',
    description: 'Scalable e-commerce backend handling orders, payments, inventory, logistics, and GST invoicing. Features secure JWT authentication, Razorpay payment integration, shipping automation via Delhivery and Shiprocket, and an admin dashboard built with Next.js.',
    techStack: [SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs],
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

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card" data-aos="flip-left">
            <div className="project-card-header"></div>
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((Icon, i) => <Icon key={i} />)}
              </div>
              <div className="project-btns">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <button>See this Live</button>
                </a>
                {project.isPrivate ? (
                  <button disabled data-tip="Private Repository">View Code</button>
                ) : (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    <button>View Code</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactTooltip />
    </div>
  );
}

export default Projects;

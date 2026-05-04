import React from "react";
import "./Skills.css";
import {
  SiJavascript,
  SiTypescript,
  SiJava,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiGit,
} from "react-icons/si";
import { FaReact, FaAws, FaDocker } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: SiJava },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: IoLogoNodejs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Git", icon: SiGit },
    ],
  },
];

function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      {skillCategories.map((categoryObj) => (
        <div key={categoryObj.category} className="skills-category">
          <h3 className="skills-category-heading">{categoryObj.category}</h3>
          <div className="skills-grid">
            {categoryObj.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="skills-card"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 50, 400)}
                >
                  <IconComponent className="skills-card-img" />
                  <h6 className="skills-card-name">{skill.name}</h6>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;

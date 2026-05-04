import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { HiHome } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTools, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdContacts } from "react-icons/md";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHamburgToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div id="nav-menu" className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div>
          <a className="nav-head" href="#">
            DEEPAK PANDEY
          </a>
        </div>

        <a onClick={handleHamburgToggle} className="hameburger-open-icon">
          {menuOpen ? (
            <CgClose size="35px" />
          ) : (
            <FiMenu size="35px" />
          )}
        </a>
        <div id="thirdCircle" className={menuOpen ? 'nav-all-opt' : 'hameburger-open-icon-invisible'}>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link home"
            href="#home"
          >
            <span><HiHome /> Home</span>
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link about"
            href="#about"
          >
            <span><BsFillPersonLinesFill /> About</span>
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link skills"
            href="#skills"
          >
            <span><FaTools /> Skills</span>
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link projects"
            href="#projects"
          >
            <span><AiTwotoneSetting /> Projects</span>
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link experience"
            href="#experience"
          >
            <span><FaBriefcase /> Experience</span>
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link education"
            href="#education"
          >
            <span><FaGraduationCap /> Education</span>
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            className="nav-link contact"
            href="#contact"
          >
            <span><MdContacts /> Contact</span>
          </a>
          <button>
            <a
              onClick={() => setMenuOpen(false)}
              className="nav-link resume"
              id="resume-button-1"
              href="https://drive.google.com/uc?export=download&id=1rSs0pXZTFF1BWm5N1O9ZyaRWNnK-vk22"
              target="_blank"
              rel="noreferrer"
              download="Deepak_Pandey_Resume.pdf"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

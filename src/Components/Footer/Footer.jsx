import React from "react";
import "./Footer.css";
import { FaReact, FaGithubAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-credit">
        <p>Designed &amp; Built by <span>Deepak Pandey</span></p>
        <p className="footer-built-with">
          <FaReact className="footer-react-icon" /> Built with React.js
        </p>
      </div>
      <div className="footer-social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/deepak01112002"
          aria-label="GitHub"
        >
          <FaGithubAlt />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/deepak-pandey-0511a3250/"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;

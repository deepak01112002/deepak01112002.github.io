import React from "react";
import "./Footer.css";
import { BsCpuFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-main">
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/deepak-pandey-0511a3250/">
          <span className="footer-svg">
            <BsCpuFill />
          </span>
          <div>Designed & Built by Deepak pandey</div>
        </a>
      </div>
      <div>
        <span className="footer-svg">
          <FaReact />
        </span>
        <div>Built Using ReactJs</div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { ImPhone } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import Github from "../Github/Github";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Certifications from "../Certifications/Certifications";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBg from "particles-bg";
import Footer from "../Footer/Footer";
AOS.init({ duration: 700, once: true, offset: 80 })


function Home() {
  return (
    <div >
      <Navbar />
      <div id="home-main">
      <div id="home" className="home-parent">
        {/* Left column: text content */}
        <div className="hero-left">
          <div data-aos="fade-down">
            <h1 id="user-detail-name">Hi, I'm <span>Deepak Pandey</span></h1>
          </div>

          <div className="typeWritter">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "Backend Engineer",
                  "MERN Stack Developer",
                  "Generative AI Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div id="my-intro">
            <p>
              Passionate Full Stack Web Developer with expertise in the MERN stack and enterprise backend systems. Experienced in building scalable production applications, integrating payment gateways, and designing secure REST APIs. Currently expanding into Generative AI and cloud-native architectures.
            </p>
          </div>

          <div className="contact-icon">
            <div>
              <a target="_blank" rel="noreferrer" href="https://github.com/deepak01112002">
                <VscGithub color="#40e48f" fontSize="30px" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/deepak-pandey-0511a3250/">
                <FiLinkedin color="#40e48f" fontSize="30px" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="mailto:deepak8574757609@gmail.com">
                <SiGmail color="#40e48f" fontSize="30px" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="tel:+917860863692">
                <ImPhone color="#40e48f" fontSize="30px" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=1rSs0pXZTFF1BWm5N1O9ZyaRWNnK-vk22">
                <CgFileDocument color="#40e48f" fontSize="30px" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: profile photo */}
        <div className="hero-right">
          <img
            src="https://i.ibb.co/PMJzmBV/Untitled-design.jpg"
            alt="Deepak Pandey"
            className="hero-photo"
          />
        </div>
      </div>

      {/* <----other Comp-----> */}
      <div>
        <About />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Education />
      </div>

      <div>
        <Certifications />
      </div>

      <div>
        <Github/>
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  </div>
  );
}

export default Home;

{
  /*  */
}

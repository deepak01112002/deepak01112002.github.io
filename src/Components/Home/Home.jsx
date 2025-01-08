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
import { MdOutlineShareLocation } from "react-icons/md";
import Github from "../Github/Github";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBg from "particles-bg";
import Footer from "../Footer/Footer";
AOS.init()


function Home() {
  return (
    <div >
      <Navbar />
      <div id="home-main">
      <div id="home" className="home-parent">
        <div data-aos="flip-up">
          <h1 id="user-detail-name">Hi, I'm <span>Deepak pandey</span></h1>
        </div>

        <div  className="typeWritter">
          <Typewriter
            options={{
              strings: [
                "A Full Stack Web Developer",
                "An eSports Enthusiast",
                "A Traveller",
                "A MERN Stack Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div 
         id="my-intro">
          <p>
          Passionate Full Stack Web Developer proficient in MERN stack with a successful track record of building solo and collaborative projects. Adaptable and quick learner in Generative AI. Offers technical expertise in MERN stack. Strong problem-solving and communication skills.
          </p>
        </div>

        <div className="contact-icon">
          <div>
          <a target="_blank" href="tel:+917860863692">
              <ImPhone color="#35d00e" fontSize="30px" />
          </a>
          </div>
          <div>
          <a target="_blank" href="https://github.com/deepak01112002">
              <VscGithub color="#35d00e" fontSize="30px" />
            </a>
          </div>
          <div>
          <a target="_blank" href="mailto:deepak8574757609@gmail.com">
              <SiGmail color="#35d00e" fontSize="30px" /> 
            </a>
          </div>
          <div>
          <a target="_blank" href="https://www.linkedin.com/in/deepak-pandey-0511a3250/">
              <FiLinkedin color="#35d00e" fontSize="30px" />   
            </a>
          </div>
          <div>
          <a  target="_blank" href="https://drive.google.com/file/d/1rSs0pXZTFF1BWm5N1O9ZyaRWNnK-vk22/view">
              <CgFileDocument color="#35d00e" fontSize="30px" />
            </a>
          </div>
          
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

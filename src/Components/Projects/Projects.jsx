import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function Projects() {
  return (
    <div>
      <div id="projects">
        <h1>Projects</h1>
        <br></br>
        <br></br>
        
        <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://i.ibb.co/Np2kYH3/Screenshot-2025-01-07-134544.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">LifeEvents.in</h3>
              <p className="project-description">
              Welcome to LifeEvents.in, where our founder's vision revolves around transforming celebrations into unforgettable experiences. Recognizing the stress and complexities often associated with planning weddings and events, they envisioned a platform that not only simplifies the process but also ensures every detail—from the grand reception décor to personalized experiences—is executed flawlessly. At LifeEvents.in, we don’t just plan events; we craft cherished memories that last a lifetime.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                href="https://www.lifeevents.in/" target="_blank">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a data-tip="Cannot Reveal code" className="project-github-link"
                  href="#"
                >
                  <button data-tip="Cannot Reveal code">View Code</button>
                </a>
                <ReactTooltip place="bottom" type="info" />
              </div>
            </div>
          </div>
          <br></br>

        <div>
          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://deepak01112002.github.io/assests/images/educat/sephora.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Sephora Replica</h3>
              <p className="project-description">
              At Sephora, the idea was simple yet powerful: make trendy, branded fashion accessible to everyone without breaking the bank. Our founder envisioned a platform where affordability, style, and security come together effortlessly. With a focus on fast deliveries, secure transactions, and a wide range of fashionable choices, Sephora isn’t just a shopping website—it’s your gateway to looking great without overspending.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                 target="_blank"
                href="https://malicious-thrill-8470-nxhk-r21oy0l5e-deepak01112002.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a className="project-github-link"
                  target="_blank"
                  href="https://github.com/deepak01112002/Sephora.com"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <div data-aos="flip-right" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://deepak01112002.github.io/assests/images/Screenshot%202023-12-05%20150550.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Myntra Replica</h3>
              <p className="project-description">
              Clone of Myntra an e-commerce website for shopping with a huge varieties of clothes, footwears and accessories.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                 target="_blank"
                href="https://myntraclone-nine.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a
                target="_blank"
                  className="project-github-link"
                  href="https://github.com/1995Neha18/MyntraClone"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
            <br />
             
          </div>
          <br />
           
          

          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://deepak01112002.github.io/assests/images/educat/lemon.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">VeggieFactsAI (OpenAI)</h3>
              <p className="project-description">
              Welcome to VeggieFactsAI, where my vision was to combine technology and curiosity to make learning about vegetables both fun and informative. I wanted to create a platform that goes beyond just identifying vegetables—it shares interesting facts that spark curiosity and knowledge. Built using HTML, CSS, JavaScript, and OpenAI, this project showcases how technology can make even the simplest things engaging and educational.
              </p>
              <div className="project-tech-stack">
                
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <FaCss3 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                
                <div style={{width : "20px", height : "55px"}}>
                  {/* <img src="https://cdn.worldvectorlogo.com/logos/openai-2.svg" alt="Generative AI"  width={"100%"} height={"100%"} style={{ filter: "hue-rotate(120deg)" }} /> */}
                  <FaBrain />
                </div>
                
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                 target="_blank"
                href="https://64af05a2a084eb1b65004e99--superb-cactus-ac9395.netlify.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a
                target="_blank"
                  className="project-github-link"
                  href="https://github.com/deepak01112002/Vegetable-Recognition-App"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
            <br /><br />
            
             
          </div>
          <br /><br />
          <div data-aos="flip-right" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://deepak01112002.github.io/assests/images/educat/Screenshot%202023-12-05%20151716.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">ABOF E-Commerce Clone</h3>
              <p className="project-description">
              ABOF is a pure-play fashion e-commerce space. It provides your daily needs products.
              </p>
              <div className="project-tech-stack">
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <FaCss3 />
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                 target="_blank"
                href="https://admirable-pavlova-852094.netlify.app/boy">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a
                target="_blank"
                  className="project-github-link"
                  href="https://github.com/prititi/tense-wool-1620"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
            <br />
             
          </div>
          <br />
          
        </div>
      </div>
    </div>
  );
}

export default Projects;

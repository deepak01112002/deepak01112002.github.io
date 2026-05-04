import React from "react";
import "./About.css";
import ParticlesBg from 'particles-bg'
import { FaRegHandPointRight } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';


function About() {
  return (
    <div>
     <ParticlesBg type="square" color="black"  bg={true} />
      <div id="about" className="about section">
        <h1>About me</h1>
        <br></br>
        <br></br>
        <div className="about_me">
          <div data-aos="fade-right" className="home-img-parent">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <img
                className="home-img"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                src="https://i.ibb.co/PMJzmBV/Untitled-design.jpg"
                alt="Deepak Pandey"
              />
            </Tilt>
          </div>
          <div data-aos="fade-left" className="my_introduction">
            <p id="user-detail-intro">
              Hi Everyone, I am <span style={{color:"#40e48f"}}>Deepak Pandey</span> from Gorakhpur, Uttar Pradesh. I am a Full Stack Web Developer with expertise in the MERN stack and enterprise backend systems. I have hands-on experience building scalable production applications, integrating payment gateways, and designing secure REST APIs. I am currently expanding my focus into Generative AI and cloud-native architectures.
            </p>
            <br></br>

            <p>Some of my interests apart form Coding :</p>

            <p>
              {" "}
              <FaRegHandPointRight color="ecdcc1" /> Singing
            </p>
            <p>
              {" "}
              <FaRegHandPointRight color="ecdcc1" /> Travelling
            </p>
            <p>
              {" "}
              <FaRegHandPointRight color="ecdcc1" /> Reading Adventure stories
            </p>
          </div>
        </div>
        <div id="resume-link-2">
          <button>
            <a
              id="resume-button-2"
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
    </div>
  );
}

export default About;

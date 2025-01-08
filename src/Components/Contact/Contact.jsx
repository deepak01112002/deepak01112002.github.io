import React, { useRef } from "react";
import { ImPhone } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineShareLocation } from "react-icons/md";
import "./Contact.css";
import { FaGithubAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import emailjs from '@emailjs/browser';

function Contact() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pp1pngp', 'template_x94zquf', form.current, 'wg-_SoCiIcJ6MIlSQ')
      .then((result) => {
          console.log(result.text);
          form.current[0].value = ""
          form.current[1].value = ""
          form.current[2].value = ""
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div>
      <div id="contact">
        <h1>GET IN TOUCH</h1>
        <div className="contact-me">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="user_name"
                placeholder="Your name.."
                required
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your email.."
                required
              />

              <label for="msg">Write Message</label>
              <textarea
                id="msg"
                style={{ height: "100px" }}
                name="message"
                placeholder="Write something.."
                required
              ></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
          <div className="contact-info">
            <div>
              <h2>Contact info</h2>
            </div>
            <div>
              <div>
                <a target="_blank" href="https://goo.gl/maps/ZUHf3rtQB7EdTPMr6">
                  <span>
                    <MdOutlineShareLocation /> Gorakhpur , Uttar Pradesh
                  </span>
                </a>
              </div>
              <div>
                <a target="_blank" href="tel:+917860863692">
                  <span>
                    <ImPhone /> +917860863692
                  </span>
                </a>
              </div>
              <div>
                <a target="_blank" href="mailto:deepak8574757609@gmail.com">
                  <span>
                    <SiGmail /> deepak8574757609@gmail.com
                  </span>
                </a>
              </div>
              {/* <div>
                <a target="_blank" href="https://www.instagram.com/im_acrobat/">
                  <span>
                    <FaInstagram /> im_acrobat
                  </span>
                </a>
              </div> */}
            </div>
            <div className="contact-github-linkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/deepak-pandey-0511a3250/"
                data-tip="My Linkedin"
              >
                <FiLinkedin />
              </a>

              <a target="_blank" href="https://github.com/deepak01112002" data-tip="My Github">
                <FaGithubAlt />
              </a>

              <ReactTooltip place="bottom" type="info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

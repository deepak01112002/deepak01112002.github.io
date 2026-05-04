import React, { useRef, useState } from "react";
import { ImPhone } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineShareLocation } from "react-icons/md";
import "./Contact.css";
import { FaGithubAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_pp1pngp', 'template_x94zquf', form.current, 'wg-_SoCiIcJ6MIlSQ')
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <div>
      <div id="contact">
        <h1>GET IN TOUCH</h1>
        <div className="contact-me">
          <div className="contact-form-panel" data-aos="fade-right">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="fname"
                name="user_name"
                placeholder="Your name.."
                required
                onChange={() => setStatus('idle')}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your email.."
                required
                onChange={() => setStatus('idle')}
              />

              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                style={{ height: "100px" }}
                name="message"
                placeholder="Write something.."
                required
                onChange={() => setStatus('idle')}
              ></textarea>

              {status === 'success' && (
                <div className="contact-notification contact-success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="contact-notification contact-error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <input type="submit" value="SUBMIT" />
            </form>
          </div>

          <div className="contact-info" data-aos="fade-left">
            <h2>Contact info</h2>
            <div className="contact-info-item">
              <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/ZUHf3rtQB7EdTPMr6">
                <MdOutlineShareLocation /> Gorakhpur, Uttar Pradesh
              </a>
            </div>
            <div className="contact-info-item">
              <a target="_blank" rel="noreferrer" href="tel:+917860863692">
                <ImPhone /> +917860863692
              </a>
            </div>
            <div className="contact-info-item">
              <a target="_blank" rel="noreferrer" href="mailto:deepak8574757609@gmail.com">
                <SiGmail /> deepak8574757609@gmail.com
              </a>
            </div>
            <div className="contact-github-linkedin">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/deepak-pandey-0511a3250/"
                data-tip="My LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/deepak01112002"
                data-tip="My GitHub"
              >
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

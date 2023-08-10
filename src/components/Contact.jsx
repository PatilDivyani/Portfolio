import React from "react";
import INFO from "../data/Info";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-details">
        <h1 style={{ textAlign: 'center' }} className="contact-heading">Contact Me</h1>
        <div className="contact-social">
          <a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">
            {/* linkedin */}
            <BsLinkedin />
          </a>
          <a href={INFO.socials.github} target="_blank" rel="noopener noreferrer">
            {/* github */}
            <BsGithub />
          </a>
          <a href={INFO.socials.twitter} target="_blank" rel="noopener noreferrer">
            {/* twitter */}
            <BsTwitter />
          </a>
          <a href={INFO.socials.facebook} target="_blank" rel="noopener noreferrer">
            {/* facebook */}
            <BsFacebook />
          </a>
          <a href={INFO.socials.instagram} target="_blank" rel="noopener noreferrer">
            {/* instagram */}
            <BsInstagram />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;

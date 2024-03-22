import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { contact, images, colors } from "../Constants"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import IconButton from "../Items/IconButton";
import Icons from "../Items/Icons";

const Contact = () => {
  return (
    <Container fluid className="contact">
      <img className="contact-image" src={images.contact} alt="contact"></img>
      <div>
        <h1>
          LET'S <strong className="main-name">CONNECT!</strong>
        </h1>
        <h4>FIND ME ON</h4>
        <div className="contact-row">
          <Icons />
          <IconButton
            onClick={() => window.open(contact.resume, "_blank")}
            background="white"
            text="My Resume"
          />
        </div>
        <h5>
          <a href="mailto:allisontlngo@gmail.com" className="text-decoration-none">
            <strong className="main-name">allisontlngo@gmail.com</strong>
          </a>
        </h5>
      </div>
    </Container>
  );
}

export default Contact;

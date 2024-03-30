import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import { contact, images } from "../Constants"
import IconButton from "../Items/IconButton";
import Icons from "../Items/Icons";

const Contact = () => {
  return (
    <Container fluid className="contact">
      <Col lg={6} className="contact-image-col">
        <div className="image-container">
          <Image className="contact-image" src={images.contact} alt="contact" fluid></Image>
        </div>
      </Col>
      <Col className="contact-text-col">
        <div>
          <h1>
            LET'S <strong className="main-name">CONNECT!</strong>
          </h1>
          <h4>FIND ME ON</h4>
          <div className="contact-row">
            <Icons />
            <IconButton
              className="ms-3"
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
      </Col>
    </Container>
  );
}

export default Contact;

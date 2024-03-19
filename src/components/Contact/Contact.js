import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { contact } from "../Constants"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import contact_art from "../../../src/assets/contact_art.png";
import Resume from "../Resume/Resume";
import IconButton from "../IconButton";

const Contact = () => {
  return (
    <div className="contact d-flex gap-5">
      <Col className="d-flex justify-content-end" style={{ paddingTop: "50px" }}>
        <img className="contact-image" src={contact_art} alt="contact"></img>
      </Col>
      <Col className="d-flex align-items-center justify-content-start">
        <div>
          <h1 className="sub-header">
            LET'S <strong className="main-name">CONNECT!</strong>
          </h1>
          <h4 className="sub-header">FIND ME ON</h4>
          <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
            <IconContext.Provider
              value={{ size: "30px", className: "react-icons", color: "#343131" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="social-icon" style={{ padding: 7 }}>
                  <a
                    href="https://github.com/ngoallison"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="social-icon" style={{ padding: 7 }}>
                  <a
                    href="https://www.linkedin.com/in/allisontlngo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="px-2">
                  <IconButton
                    onClick={() => window.open(contact.resume, "_blank")}
                    background="white"
                    text="My Resume"
                  />
                </div>
              </div>
            </IconContext.Provider>
          </Row>
          <h5>
            <a
              href="mailto:allisontlngo@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <strong className="main-name">allisontlngo@gmail.com</strong>
            </a>
          </h5>
        </div>
      </Col>
    </div>
  );
}

export default Contact;

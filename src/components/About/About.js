import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../../../src/assets/school.png";
function About() {
  return (
    <div className="about-page">
      <Container className="about-content">
        <Container fluid style={{ padding: 80 }}>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="about-image"
                style={{ width: 400, height: 400 }}
                src={image}
                alt="about"
              />
            </Col>
            <Col>
              <Row>
                <h1 className="main-name">About Me</h1>
              </Row>
              <Row className="about-text">
                <p>
                  I’m a recent UCSD graduate with a passion for building
                  applications with a focus on front-end development with
                  JavaScript, ReactJS, Angular, Nodejs, Flutter, and more to
                  come as I continue to learn!
                </p>
              </Row>
              <Row className="about-text">
                <p>
                  I have aspirations to become a full-stack web developer by
                  continually expanding my skills every opportunity that I get.
                  I am committed to always learning and sharing that passion
                  through software that benefits my community.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default About;

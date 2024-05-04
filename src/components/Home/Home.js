import React from "react";
import "../../../src/style.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedinIn, FaRegFile } from "react-icons/fa";
import { contact, images, colors } from "../Constants"
import { Fade } from "react-awesome-reveal";
import IconButton from "../Items/IconButton";

function Home() {
  return (
    <Fade triggerOnce="true" duration="500">
      <Container className="home-content">
        <Row>
          <Col xs={12} sm={12} md={6} className="mt-5">
            <div>
              <h3>Hey there, <b className="main-name">I'm Allison!</b></h3>
              <h1 className="main-name mt-5">Software Engineer</h1>
              <h5>Based in Orange County, CA</h5>
              <h5 className="description-text mt-5">I am a software engineer focusing on full-stack development projects, with background in building web and mobile applications using Javascript, React, Node.js, SQL, Swift, and the list continues. </h5>
              <h5 className="description-text mt-3">I'm always eager to grow my skill set, explore new technologies and programming languages, and tackle new problems. I'd love to chat, so let's connect!</h5>
              <Row>
                <div className="home-buttons">
                  <IconButton
                    onClick={() => window.open(contact.resume, "_blank")}
                    background={colors.tan}
                    color="black"
                    iconColor="black"
                    icon={<FaRegFile />}
                    text="View Resume"
                  />
                  <IconButton
                    onClick={() => window.open(contact.linkedin, "_blank")}
                    background={colors.black}
                    color="white"
                    iconColor="white"
                    icon={<FaLinkedinIn />}
                    text="Let's Connect!"
                  />
                </div>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Image className="home-image pt-4" src={images.art} alt="home" fluid />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Home;

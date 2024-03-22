import React from "react";
import "../../../src/style.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedinIn, FaRegFile } from "react-icons/fa";
import { contact, images, colors } from "../Constants"
import { Fade } from "react-awesome-reveal";
import IconButton from "../IconButton";

function Home() {
  return (
    <Fade triggerOnce="true" duration="500">
      <Container className="home-content">
        <Row>
          <Col>
            <div>
              <h3>Hey there, <b className="main-name">I'm Allison!</b></h3>
              <h1 className="main-name mt-5">Software Engineer</h1>
              <h4>Based in Orange County, CA</h4>
              <h5 className="description-text mt-5">I'm a recent computer science graduate from UC San Diego with a focus on frontend engineering and further aspirations to move into the full-stack developer space. I'd love to chat, so let's connect!</h5>
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
          <Col>
            <Image className="home-image" src={images.art} alt="home" fluid />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Home;

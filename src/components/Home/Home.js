import React from "react";
import "../../../src/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaRegFile } from "react-icons/fa";
import { contact, images } from "../Constants"
import { Fade } from "react-awesome-reveal";
import IconButton from "../IconButton";

function Home() {
  return (
    <div className="home">
      {/* <Container fluid className="home">
      </Container> */}
      <Fade triggerOnce="true" duration="500">

        <Container className="home-content" style={{ display: "flex", alignItems: "center" }}>
          <Row style={{ width: "100%" }}>
            <Col className="d-flex gap-3" gap={3}>
              <div>
                <h3 className="sub-header">Hey there, <b className="main-name">I'm Allison!</b></h3>
                <h1 className="main-name mt-5">Software Engineer</h1>
                <h4>Based in Orange County, CA</h4>
                <h5 className="about-text mt-5" style={{ color: "gray" }}>I'm a recent computer science graduate from UC San Diego with a focus on frontend engineering and further aspirations to move into the full-stack developer space. I'd love to chat, so let's connect!</h5>
                <Row>
                  <div className="mt-5" style={{ display: "flex", gap: "30px" }}>
                    <IconButton
                      onClick={() => window.open(contact.resume, "_blank")}
                      background="#ffe9de"
                      color="black"
                      iconColor="black"
                      icon={<FaRegFile />}
                      text="View Resume"
                    />

                    <IconButton
                      onClick={() => window.open(contact.linkedin, "_blank")}
                      background="#434343"
                      color="white"
                      iconColor="white"
                      icon={<FaLinkedinIn />}
                      text="Let's Connect!"
                    />
                  </div>
                </Row>
              </div>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img className="home-image" src={images.art} alt="home" />
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

export default Home;

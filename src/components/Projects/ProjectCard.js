import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useCollapse } from "react-collapsed";
import ProjectDesc from "./ProjectDesc";
import { FaGithub } from "react-icons/fa";
import IconButton from "../IconButton";
import { styled } from "styled-components";

const StyledCard = styled.div`
  @media (max-width: 1200px) {
    padding-bottom: 35px;
  }
`;
const StyledSection = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: grid;
  }
`;

function ProjectCard(props) {
  const config = {
    duration: 500,
    easing: "cubic-bezier(.6,.74,.55,1.04)",
  };

  const [check, setCheck] = useState(false);

  const handleToggle = () => {
    setCheck((current) => !current);
  };

  const { getCollapseProps, getToggleProps } = useCollapse(config);

  return (
    <div
      className="project-card"
      style={{
        width: "100%",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <StyledSection>
        <Container style={{ paddingTop: 60, paddingBottom: 60 }}>
          <Row>
            <Col md={6}>
              <img src={props.image} alt="home" className="pb-3 image-fluid project-card-image" style={{ width: "100%" }} />
            </Col>
            <Col md={6} style={{ paddingLeft: 30 }}>
              <Row style={{ paddingBottom: 10 }}>
                <h1 className="main-name">{props.title}</h1>
              </Row>
              <div>
                <Row>
                  <p>{props.text1}</p>
                  <p>{props.text2}</p>
                </Row>
                <Row>
                  <div style={{ display: "flex", paddingTop: 20 }}>
                    {props.items?.map((item) => (
                      <p className="learn-tag">{item}</p>
                    ))}
                  </div>
                </Row>
              </div>
              <Row
                className="h-25"
                style={{ display: "flex", alignItems: "end" }}
              >
                <div class="col-5">
                  <IconButton
                    onClick={() => window.open(props.github, "_blank")}
                    iconColor="black"
                    icon={<FaGithub />}
                    text="GitHub"
                  />
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <div {...getCollapseProps()}>
              <ProjectDesc
                intro={props.intro}
                body={props.body}
                items={props.items}
                github={props.github}
              />
            </div>
          </Row>
        </Container>
      </StyledSection>
    </div>
  );
}

export default ProjectCard;

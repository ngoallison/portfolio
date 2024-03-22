import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { styled } from "styled-components";
import IconButton from "../Items/IconButton";

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

function ProjectCardR(props) {
  return (
    <StyledSection>
      <Container className="project-card">
        <Row className="project-row">
          <Col className="project-description-right">
            <h1 className="main-name">{props.title}</h1>
            <div className="my-4">
              <p>{props.text1}</p>
              <p>{props.text2}</p>
            </div>
            <div className="project-skills my-3">
              {props.items?.map((item) => (
                <p className="learn-tag">{item}</p>
              ))}
            </div>
            <IconButton
              onClick={() => window.open(props.github, "_blank")}
              icon={<FaGithub />}
              text="GitHub"
            />
          </Col>
          <Col>
            <Image src={props.image} alt="project" fluid />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
}

export default ProjectCardR;

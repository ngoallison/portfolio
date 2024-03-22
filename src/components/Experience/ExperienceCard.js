import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { skills } from "../Constants";
import { styled } from "styled-components";
import SkillsCircle from "../Items/SkillsCircle";

const StyledSection = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: grid;
  }
`;

function ExperienceCard(props) {
  return (
    <StyledSection>
      <Row className="experience-row">
        <Col>
          <Container className="experience-card">
            <Row>
              <Col sm={2} className="experience-image">
                <Image className="experience-icon" src={props.image} alt="icon" fluid />
              </Col>
              <Col sm={10}>
                <div className="experience-text">
                  <h5 className="bold-text">{props.title}</h5>
                  <h6>{props.time}</h6>
                </div>
                <div className="experience-text">
                  <h5>{props.company}</h5>
                  <h6><i>{props.location}</i></h6>
                </div>
                <div>
                  <p className="description-text">{props.description}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={5} className="experience-skills">
          {props.items?.map((item) => {

            const objects = skills.items.find((objects) => objects.name === item);
            return (
              <SkillsCircle
                skill={objects}
                small={true}
              />
            );
          })}
        </Col>
      </Row>
    </StyledSection>
  );

}

export default ExperienceCard;

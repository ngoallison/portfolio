import { React, useState, useRef, useEffect } from "react";
import { languages, frameworks, tools } from "../Constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CSSTransition } from 'react-transition-group';
import { Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";

import IconButton from "../IconButton";
import SkillCard from "./SkillCard";


const Skills = () => {


  const langs = () => <SkillCard group={languages} />
  const frames = () => <SkillCard group={frameworks} />
  const tool = () => <SkillCard group={tools} />
  const all = () => <SkillCard group={languages.concat(frameworks, tools)} />

  const [skills, setSkills] = useState(all);

  const buttonInfo = [
    { name: "All", group: all },
    { name: "Languages and Databases", group: langs },
    { name: "Frameworks", group: frames },
    { name: "Other Tools", group: tool },
  ];

  return (
    <div style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <Row>
          <Col>
            <h1>
              <span>PROFESSIONAL</span>
              <span class="main-name"> SKILLSET</span>
            </h1>
            <p>...with more to come!</p>
          </Col>
          <Col >

            <div className="d-flex gap-3 justify-content-end">
              {buttonInfo.map((button, index) => (
                <IconButton
                  onClick={() => setSkills(button.group)}
                  text={button.name}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center" >
          <Fade>
            {skills}
          </Fade>
        </Row>
      </Container>

    </div >
  );
}

export default Skills;


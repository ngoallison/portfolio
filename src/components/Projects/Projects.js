import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProjectCard from "./ProjectCard";
import ProjectCardR from "./ProjectCardR";
import { projects } from "../Constants";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <Container className="content">
      <div className="section-header">
        <h1>
          PERSONAL
          <h1 className="main-name"> PROJECTS</h1>
        </h1>
        <hr className="section-bar" />
      </div>
      {projects?.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <>
              <Fade direction="left" triggerOnce="true">
                <ProjectCard
                  key={index}
                  title={item.title}
                  text1={item.text1}
                  text2={item.text2}
                  image={item.image}
                  intro={item.intro}
                  body={item.body}
                  items={item.items}
                  github={item.github}
                />
              </Fade>
              <hr />
            </>
          );
        } else {
          return (
            <>
              <Fade direction="right" triggerOnce="true">
                <ProjectCardR
                  key={index}
                  title={item.title}
                  text1={item.text1}
                  text2={item.text2}
                  image={item.image}
                  image2={item.image2}
                  intro={item.intro}
                  body={item.body}
                  items={item.items}
                  github={item.github}
                />
              </Fade>
              <hr />
            </>
          );
        }
      })}
    </Container>
  );
}
export default Projects;
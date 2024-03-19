import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCollapse } from "react-collapsed";
import { FaGithub } from "react-icons/fa";
import ProjectDesc from "./ProjectDesc";
import { styled } from "styled-components";
import IconButton from "../IconButton";

function ProjectCardR(props) {
  const config = {
    duration: 500,
    easing: "cubic-bezier(.6,.74,.55,1.04)",
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  return (
    <div
      className="project-card-r"
      style={{
        width: "100%",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Container style={{ paddingTop: 60, paddingBottom: 60 }}>
        <Row>
          <Col md={6}>
            <Row className="h-25" style={{ paddingBottom: 20 }}>
              <h1 className="main-name">{props.title}</h1>
            </Row>
            <div style={{ height: "50%" }}>
              <Row>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
              </Row>
              <Row>
                <div
                  style={{
                    display: "flex",
                    paddingBottom: 20,
                    justifyContent: "start",
                  }}
                >
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
              <div class="col-0">
                <IconButton
                  onClick={() => window.open(props.github, "_blank")}
                  iconColor="black"
                  icon={<FaGithub />}
                  text="GitHub"
                />
              </div>
            </Row>
          </Col>

          <Col md={6}>
            <img src={props.image} alt="home" className="pt-3 image-fluid project-card-image" style={{ width: "100%" }} />
          </Col>
        </Row>
        {/* <Row>
          <div {...getCollapseProps()}>
            <ProjectDesc
              intro={props.intro}
              body={props.body}
              items={props.items}
              github={props.github}
            />
          </div>
        </Row> */}
      </Container>
    </div>
  );
}

export default ProjectCardR;
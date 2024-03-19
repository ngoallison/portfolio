import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProjectCard from "./ProjectCard";
import ProjectCardR from "./ProjectCardR";
import image from "../../../src/assets/school.png";
import image2 from "../../../src/assets/home.png";
import gradescope from "../../../src/assets/gradescope.jpg";
import { projects } from "../Constants";
import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <div className="projects">
      <Container>
        <Row>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1>
              <span>PERSONAL</span>
              <span className="main-name"> PROJECTS</span>
            </h1>
            <hr
              style={{
                height: 1,
                background: "gray",
                width: "100%",
                opacity: 1,
              }}
            />
          </div>
        </Row>
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
                <hr style={{ height: 5 }}></hr>
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
                <hr style={{ height: 5 }}></hr>
              </>
            );
          }
        })}
      </Container>
    </div>
  );
}
export default Projects;

// <ProjectCard
//           title="Bevvie"
//           text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse placerat tincidunt mollis. Nullam fringilla lobortis
//                 lectus in semper."
//           text2="Donec sed nunc tempus, scelerisque ipsum tincidunt, sollicitudin
//                 sapien. Sed lacus ex, luctus nec tortor at, placerat tincidunt
//                 nisl. Donec varius eget quam vitae malesuada."
//           image={image2}
//         />
//         <hr
//           style={{
//             height: 1,
//             background: "white",
//             width: "100%",
//           }}
//         ></hr>
//         <ProjectCardR
//           title="Gradescope Scheduler"
//           text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse placerat tincidunt mollis. Nullam fringilla lobortis
//                 lectus in semper."
//           text2="Donec sed nunc tempus, scelerisque ipsum tincidunt, sollicitudin
//                 sapien. Sed lacus ex, luctus nec tortor at, placerat tincidunt
//                 nisl. Donec varius eget quam vitae malesuada."
//           image={gradescope}
//         />
//         <hr
//           style={{
//             height: 1,
//             background: "white",
//             width: "100%",
//           }}
//         ></hr>
//         <ProjectCard
//           title="Bullet Journal"
//           text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse placerat tincidunt mollis. Nullam fringilla lobortis
//                 lectus in semper."
//           text2="Donec sed nunc tempus, scelerisque ipsum tincidunt, sollicitudin
//                 sapien. Sed lacus ex, luctus nec tortor at, placerat tincidunt
//                 nisl. Donec varius eget quam vitae malesuada."
//           image={image2}
//         />

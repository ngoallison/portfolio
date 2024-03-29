import { React, useState, useEffect } from "react";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import ProjectCard from "./ProjectCard";
import ProjectCardR from "./ProjectCardR";
import { Fade } from "react-awesome-reveal";

function Projects() {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_PROJECTS_API);
        const sortedItems = response.data.sort((a, b) => a.id - b.id);
        setProjects(sortedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="content">
      <div className="section-header">
        <h1>
          PERSONAL
          <h1 className="main-name"> PROJECTS</h1>
        </h1>
        <hr className="section-bar" />
      </div>
      <div>
        {projects ? (
          <>
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
            })}</>) : (<p className="text-center">Loading...</p>)}
      </div>
    </Container>
  );
}
export default Projects;
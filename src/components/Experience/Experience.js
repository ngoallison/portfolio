import React from "react";
import { Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { styled } from "styled-components";
import { experiences } from "../Constants";

import ExperienceCard from "./ExperienceCard";
import ExperienceCardSmall from "./ExperienceCardSmall";

const StyledExperience = styled.div`
  display: flex;

    @media (max-width: 1200px) {
      display: block;
    }
  }
`;


const StyledSize = styled.div`
    min-width: 33%;  

    @media (max-width: 1200px) {
      padding-bottom: 20px;
    }
  }
`;

function Experience() {
  return (
    <Container className="content">
      <div className="section-header">
        <h1>
          WORK<h1 className="main-name"> EXPERIENCE</h1>
        </h1>
        <hr className="section-bar" />
        <h1>TOOLS
          <h1 className="main-name text-end" > USED</h1>
        </h1>

      </div>
      {experiences?.map((item) => {
        return (
          <StyledSize>
            <Fade direction="up" triggerOnce="true">
              <ExperienceCard
                time={item.time}
                image={item.image}
                company={item.company}
                location={item.location}
                title={item.title}
                description={item.description}
                items={item.items}
              />
            </Fade>
          </StyledSize>
        );
      })}
    </Container>
  );
}

export default Experience;

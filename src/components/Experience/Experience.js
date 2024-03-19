import React from "react";
import { Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import ExperienceCard from "./ExperienceCard";

import { styled } from "styled-components";
import { experiences } from "../Constants";
import Carousel from "react-bootstrap/Carousel";
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
    <div className="experience-page" >

      <Container style={{ paddingTop: 80 }}>
        <Row>
          <div className="d-flex align-items-center justify-content-betwen pb-5">
            <h1 className="section-header">
              WORK<h1 className="section-header main-name"> EXPERIENCE</h1>
            </h1>
            <hr
              style={{
                height: 1,
                background: "gray",
                marginLeft: "50px",
                marginRight: "50px",
                width: "100%",
                opacity: 1,
              }}
            ></hr>
            <h1>TOOLS
              <h1 className="main-name" style={{ textAlign: "right" }}> USED</h1>
            </h1>

          </div>
        </Row>
        <div>

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
        </div>
      </Container>
    </div>
  );
}

export default Experience;

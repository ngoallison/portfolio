import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { languages, tools } from "../Constants";
import { frameworks } from "../Constants";
import { styled } from "styled-components";


const StyledSection = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: grid;
  }
`;

function ExperienceCard(props) {
  return (
    // <div
    //   className="project-card"
    //   style={{
    //     width: "100%",
    //     paddingTop: 30,
    //     paddingBottom: 30,
    //   }}
    // >
    //   <StyledSection>

    //     <Container style={{ paddingTop: 60, paddingBottom: 60 }}>

    //       <Row className="d-flex align-items-center" >

    //         <Col sm={7}>
    //           <div className="experience-card">
    //             <Row>
    //               <Col className="d-flex align-items-center">
    //                 <img className="home-image" src={props.image} alt="home" style={{ height: "10vh", width: "10vh" }} />
    //               </Col>
    //               <Col sm={10} className="pe-4">
    //                 <div className="d-flex justify-content-between align-items-center">
    //                   <h5 style={{ fontFamily: "WSBold" }}>{props.title}</h5>
    //                   <h6>{props.time}</h6>
    //                 </div>
    //                 <div className="d-flex justify-content-between align-items-center">
    //                   <h5>{props.company}</h5>
    //                   <h6><i>{props.location}</i></h6>
    //                 </div>
    //                 <div>
    //                   <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //         </Col>
    //         <Col className="d-flex align-items-center justify-content-center">
    //           <div
    //             style={{
    //               display: "flex",
    //               flexWrap: "wrap",
    //               justifyContent: "end",
    //             }}
    //           >
    //             {props.items?.map((item) => {

    //               const obj1 = languages.find((obj1) => obj1.name === item);
    //               const obj2 = frameworks.find((obj2) => obj2.name === item);
    //               const obj3 = tools.find((obj3) => obj3.name === item);

    //               const obj = obj1 ? obj1 : obj2 ? obj2 : obj3;

    //               return (
    //                 <OverlayTrigger
    //                   title="foo"
    //                   placement="bottom"
    //                   overlay={
    //                     <Tooltip>
    //                       <strong>{item}</strong>
    //                     </Tooltip>
    //                   }
    //                 >
    //                   <div className="skill-circle">
    //                     <span>
    //                       <img
    //                         className="skill-images"
    //                         src={obj.img}
    //                         style={{
    //                           height: 70,
    //                           padding: 15,
    //                         }}
    //                         alt="pic"
    //                       ></img>
    //                     </span>
    //                   </div>
    //                 </OverlayTrigger>
    //               );
    //             })}
    //           </div>

    //         </Col>
    //       </Row>
    //     </Container>
    //   </StyledSection>
    // </div>

    <div
      className="project-card"
      style={{
        width: "100%",
      }}
    >
      <StyledSection>
        <Container>
          <Row className="d-flex align-items-center" >
            <Col md={7}>
              <div className="experience-card">
                <Row >
                  <Col sm={2} className="d-flex align-items-center justify-content-center">
                    <img className="home-image" src={props.image} alt="home" style={{ height: "10vh", width: "10vh", padding: "5px" }} />
                  </Col>
                  <Col sm={10}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 style={{ fontFamily: "WSBold" }}>{props.title}</h5>
                      <h6 style={{ textAlign: "right" }}>{props.time}</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>{props.company}</h5>
                      <h6><i>{props.location}</i></h6>
                    </div>
                    <div>
                      <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={5} style={{ paddingLeft: 30 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "end",
                }}
              >
                {props.items?.map((item) => {

                  const obj1 = languages.find((obj1) => obj1.name === item);
                  const obj2 = frameworks.find((obj2) => obj2.name === item);
                  const obj3 = tools.find((obj3) => obj3.name === item);

                  const obj = obj1 ? obj1 : obj2 ? obj2 : obj3;

                  return (
                    <OverlayTrigger
                      title="foo"
                      placement="bottom"
                      overlay={
                        <Tooltip>
                          <strong>{item}</strong>
                        </Tooltip>
                      }
                    >
                      <div className="skill-circle">
                        <span>
                          <img
                            className="skill-images"
                            src={obj.img}
                            style={{
                              height: 70,
                              padding: 15,
                            }}
                            alt="pic"
                          ></img>
                        </span>
                      </div>
                    </OverlayTrigger>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </div>
  );

}

export default ExperienceCard;

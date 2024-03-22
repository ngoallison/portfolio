import React from "react";
function ExperienceCardSmall(props) {
  return (

    <div
      className="project-card"
      style={{
        border: "1px solid lightgray",
        borderRadius: "15px",
        padding: "20px"
      }}
    >
      <div>
        <img className="home-image" src={props.image} alt="home" style={{ width: "30%", height: "30%", margin: "10px" }} />

        <div className="d-flex justify-content-between align-items-center">
          <h5 style={{ fontFamily: "WSBold" }}>{props.title}</h5>
          <h6 style={{ textAlign: "right" }}>{props.time}</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h5>{props.company}</h5>
          <h6><i>{props.location}</i></h6>
        </div>

        {/* <Col md={5} style={{ paddingLeft: 30 }}>
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
            </Col> */}
      </div>
    </div >
  );

}

export default ExperienceCardSmall;

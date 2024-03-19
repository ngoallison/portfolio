import { React, useState } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { languages } from "../Constants";
import { frameworks } from "../Constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <Card
        className="d-flex justify-content-center"
        style={{
          paddingTop: "50px",
          width: "80%",
          backgroundColor: "rgba(255,255,255,0.2)",
          borderColor: "white",
          borderRadius: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start" /* Add this*/,
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            gap: "20px"
          }}
        >
          {props.group?.map((item) => {
            return (
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    <strong>{item.name}</strong>
                  </Tooltip>
                }
              >
                <div className={"skill-circle"} style={{ width: "120px", height: "120px", borderRadius: "60px" }}>
                  <span>
                    <img
                      className="skill-images"
                      src={item.img}
                      style={{
                        height: 90,
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
      </Card>
    </div>
  );
}

export default SkillCard;

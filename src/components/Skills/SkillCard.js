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
    <Card className="skill-card">
      <div>
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
                      padding: 0,
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
  );
}

export default SkillCard;

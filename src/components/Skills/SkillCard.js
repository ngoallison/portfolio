import { React, useState } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

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
                <img
                  className="skill-images"
                  src={item.img}
                  alt="pic"
                ></img>
              </div>
            </OverlayTrigger>
          );

        })}

      </div>
    </Card>
  );
}

export default SkillCard;

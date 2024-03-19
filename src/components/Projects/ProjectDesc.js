import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function ProjectDesc(props) {
  return (
    <div style={{ paddingTop: 50 }}>
      <h5 className="main-name">Summary</h5>
      <p>{props.intro}</p>
      <p>{props.body}</p>
      <div style={{ display: "flex" }}>
        {props.items?.map((item) => (
          <p className="learn-tag">{item}</p>
        ))}
      </div>
      <button
        onlick="window.location.href='https://github.com/ngoallison';"
        className="white-button"
        type="button"
        style={{ display: "flex", alignItems: "center" }}
      >
        <IconContext.Provider
          value={{ size: "30px", className: "react-icons", color: "black" }}
        >
          <FaGithub />
        </IconContext.Provider>
        <div style={{ paddingLeft: 10 }}>Github</div>
      </button>
    </div>
  );
}

export default ProjectDesc;

import React from "react";
import { colors } from "../Constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Icons() {
  return (
    <div className="icons-row">
      <IconContext.Provider value={{ size: "30px", className: "react-icons", color: colors.black }}>
        <div className="social-icon">
          <a
            href="https://github.com/ngoallison"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/allisontlngo/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Icons;

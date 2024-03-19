import React from "react";
import Row from "react-bootstrap/Row";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Icons() {
  return (
    <div style={{ background: "transparent", paddingLeft: 20 }}>
      <Row>
        <IconContext.Provider
          value={{ size: "30px", className: "react-icons", color: "black" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="social-icon" style={{ paddingRight: 20 }}>
              <a
                href="https://github.com/ngoallison"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="social-icon" style={{ paddingRight: 20 }}>
              <a
                href="https://www.linkedin.com/in/allisontlngo/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div style={{ paddingRight: 20 }}>
              <a
                href="https://drive.google.com/file/d/1qfJCCc85iZqHksp55yCJTBwuPCYGQNZs/view?usp=sharing"
                download="resume"
                target="_blank"
                rel="noreferrer"
              >
                {/* <button
                  style={{
                    background: "transparent",
                    color: "black",
                    fontFamily: "Light",
                    border: "none",
                  }}
                >
                  Resume
                </button> */}
              </a>
            </div>
          </div>
        </IconContext.Provider>
      </Row>
    </div>
  );
}

export default Icons;

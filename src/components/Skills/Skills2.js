import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import "../../skills.css";
import { skills as data } from "../Constants"
import Filter from './Filter';
import { languages, frameworks, tools } from "../Constants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import { AnimatePresence, motion } from "framer-motion"

import IconButton from "../IconButton";
import SkillCard from "./SkillCard";

const Skills2 = () => {


    const [displayData, setDisplayData] = useState(data.items);
    const [active, setActive] = useState("all");

    const handleCategoryClick = (category) => {
        if (category === active) return;
        setActive(category);

        if (category === "all") {
            setDisplayData(data.items);
            return;
        }

        const filteredData = data.items.filter(
            (item) => item.category.toLowerCase() === category
        );
        setDisplayData(filteredData);
    };

    return (
        <div style={{ paddingTop: "80px", paddingBottom: "80px" }}>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <span>PROFESSIONAL</span>
                            <span class="main-name"> SKILLSET</span>
                        </h1>
                        <p>...with more to come!</p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Filter active={active} handleClick={handleCategoryClick} />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center pt-5 gap-3">
                    <AnimatePresence>
                        {displayData.map((data, i) => (
                            <motion.div
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                exit={{ transform: "scale(0)" }}
                                style={{ width: "auto" }}
                            >
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip>
                                            <strong>{data.name}</strong>
                                        </Tooltip>
                                    }
                                >
                                    <div className={"skill-circle"} style={{ width: "120px", height: "120px", borderRadius: "60px" }}>
                                        <span>
                                            <img
                                                className="skill-images"
                                                src={data.img}
                                                style={{
                                                    height: 90,
                                                    padding: 15,
                                                }}
                                                alt="pic"
                                            ></img>
                                        </span>
                                    </div>
                                </OverlayTrigger>
                            </motion.div>

                        ))}
                    </AnimatePresence>
                </Row>
            </Container>

        </div >
    );
};

export default Skills2;

import React, { useState } from 'react';
import "../../skills.css";
import { skills } from "../Constants"
import Filter from './Filter';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SkillsCircle from '../Items/SkillsCircle';
import { AnimatePresence, motion } from "framer-motion"

const Skills = () => {

    const [displaySkills, setDisplaySkills] = useState(skills.items);
    const [active, setActive] = useState("all");

    const handleCategoryClick = (category) => {

        if (category === active) return;
        setActive(category);

        if (category === "all") {
            setDisplaySkills(skills.items);
            return;
        }

        const filteredData = skills.items.filter(
            (item) => item.category.toLowerCase() === category
        );

        setDisplaySkills(filteredData);

    };

    return (
        <Container className="content">
            <Row>
                <Col sm={12} lg={5}>
                    <h1>
                        PROFESSIONAL<span className="main-name"> SKILLSET</span>
                    </h1>
                    <p>...with more to come!</p>
                </Col>
                <Col sm={12} lg={7} className="skills-filter">
                    <div>
                        <Filter active={active} handleClick={handleCategoryClick} />
                    </div>
                </Col>
            </Row>
            <Row className="skills-card my-5">
                <AnimatePresence>
                    {displaySkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            exit={{ transform: "scale(0)" }}
                            style={{ width: "auto" }}
                        >
                            <SkillsCircle
                                skill={skill}
                            />
                        </motion.div>

                    ))}
                </AnimatePresence>
            </Row>
        </Container>
    );
};

export default Skills;

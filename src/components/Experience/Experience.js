import { React, useState, useEffect } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import ExperienceCard from "./ExperienceCard";


function Experience() {

  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_EXPERIENCE_API);
        const sortedItems = response.data.sort((a, b) => a.id - b.id);
        setExperience(sortedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container className="content">
      <div className="section-header">
        <h1>
          WORK<h1 className="main-name"> EXPERIENCE</h1>
        </h1>
        <hr className="section-bar" />
        <h1>TOOLS
          <h1 className="main-name text-end" > USED</h1>
        </h1>

      </div>
      <div>
        {experience ? (
          <>
            {experience?.map((item) => {
              return (
                <Fade direction="up" triggerOnce="true">
                  <ExperienceCard
                    time={item.time}
                    image={item.image}
                    company={item.company}
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    items={item.items}
                  />
                </Fade>
              );
            })}</>) :
          (<p className="text-center">Loading...</p>)}
      </div>
    </Container>
  );
}

export default Experience;

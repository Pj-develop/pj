import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  MoreButton,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("web app");
  const [visibleCount, setVisibleCount] = useState(3);
  
  // Get the latest 5 projects for featured section
  const featuredProjects = [...projects].slice(-6).reverse();
  const filteredProjects = projects.filter(
    (item) => (item.category || "").toLowerCase() === toggle.toLowerCase()
  );
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const canShowMore = filteredProjects.length > visibleCount;
  const canShowLess = visibleCount > 3;

  const handleToggleChange = (value) => {
    setToggle(value);
    setVisibleCount(3);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Featured Projects</Title>
        <Desc>
          My most recent work - showcasing the latest technologies and solutions.
        </Desc>
        <CardContainer>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={`featured-${project.id}-${index}`}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>

        <Title style={{ marginTop: '80px' }}>All Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to mobile applications.
          Here are some of my projects organized by category.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton 
            active={toggle === "web app"} 
            value="web app" 
            onClick={() => handleToggleChange("web app")}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton 
            active={toggle === "CLI app"} 
            value="CLI app" 
            onClick={() => handleToggleChange("CLI app")}
          >
            IOS / Android APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton 
            active={toggle === "machine learning"} 
            value="machine learning" 
            onClick={() => handleToggleChange("machine learning")}
          >
            MACHINE LEARNING & AI
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {visibleProjects.map((project, index) => (
              <ProjectCard
                key={`filtered-${project.id}-${index}`}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
        {(canShowMore || canShowLess) && (
          <MoreButton
            onClick={() =>
              canShowMore
                ? setVisibleCount((count) => count + 3)
                : setVisibleCount(3)
            }
          >
            {canShowMore ? "Show More" : "Show Less"}
          </MoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
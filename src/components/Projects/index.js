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
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  
  // Get the latest 5 projects for featured section
  const featuredProjects = [...projects].slice(-6).reverse();

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
            active={toggle === "all"} 
            value="all" 
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton 
            active={toggle === "web app"} 
            value="web app" 
            onClick={() => setToggle("web app")}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton 
            active={toggle === "CLI app"} 
            value="CLI app" 
            onClick={() => setToggle("CLI app")}
          >
            IOS / Android APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton 
            active={toggle === "machine learning"} 
            value="machine learning" 
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING & AI
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" 
            ? projects.map((project, index) => (
                <ProjectCard
                  key={`all-${project.id}-${index}`}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project, index) => (
                  <ProjectCard
                    key={`filtered-${project.id}-${index}`}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))
          }
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
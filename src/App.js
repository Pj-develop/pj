import { ThemeProvider } from "styled-components";
import { Suspense, lazy, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import styled from "styled-components";
import Achievements from "./components/Achievements/Achievements.jsx";
import Certifications from "./components/Certification/Certification.jsx";

const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const savedMode = window.localStorage.getItem("portfolio-theme");
    return savedMode ? savedMode === "dark" : true;
  });
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body as="main" id="main-content">
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Achievements /> 
        
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Certifications />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          
          <Footer />
          {openModal.state && (
            <Suspense fallback={null}>
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            </Suspense>
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

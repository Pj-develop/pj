import React from 'react'
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ThemeToggle,
  MobileThemeToggle,
} from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Bio } from '../../data/constants';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeToggle
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </ThemeToggle>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMenu}>About</MobileLink>
            <MobileLink href='#skills' onClick={toggleMenu}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={toggleMenu}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={toggleMenu}>Projects</MobileLink>
            <MobileLink href='#education' onClick={toggleMenu}>Education</MobileLink>
            <MobileThemeToggle
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </MobileThemeToggle>
            <GitHubButton 
              style={{
                padding: '10px 16px',
                width: 'max-content'
              }}
              href={Bio.github} 
              target="_blank"
              rel="noopener noreferrer">
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
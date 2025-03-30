import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import _default from '../../themes/default';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = _default;
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <Nav>
      <NavbarContainer>
        {/* Fixed nested anchor issue by using NavLogo properly */}
        <NavLogo to="/" style={{ 
            display: "flex", 
            alignItems: "center", 
            color: "white", 
            marginBottom: '20px', 
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </NavLogo>
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
            <GitHubButton 
              style={{
                padding: '10px 16px',
                background: theme.primary || theme.colors.primary1,
                color: 'white',
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
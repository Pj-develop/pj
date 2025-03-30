import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountTreeIcon from "@mui/icons-material/AccountTree"; // For Linktree
import VisibilityIcon from "@mui/icons-material/Visibility"; // For visitor count
import { Bio } from "../../data/constants";
import { useEffect, useState } from "react";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, rgba(35, 35, 35, 1) 100%);
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Divider = styled.div`
  width: 60%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.primary},
    transparent
  );
  margin: 8px 0;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const ViewerCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 1rem;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  
  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

function Footer() {
  const [viewCount, setViewCount] = useState(100);
  
  // Increment view count on page load
  useEffect(() => {
    // Get stored count or start from 100
    const storedCount = parseInt(localStorage.getItem('portfolioViewCount') || '100');
    
    // Increment by 1 for this visit
    const newCount = storedCount + 1;
    
    // Store back to localStorage
    localStorage.setItem('portfolioViewCount', newCount.toString());
    
    // Update state
    setViewCount(newCount);
  }, []);

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Priyanshu Jha</Logo>
        <Divider />
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon 
            href={Bio.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.insta} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.linktree} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Linktree"
          >
            <AccountTreeIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        
        <ViewerCount>
          <VisibilityIcon fontSize="small" />
          <span>{viewCount.toLocaleString()} portfolio views</span>
        </ViewerCount>
        
        <Copyright>&copy; {currentYear} Priyanshu Jha. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
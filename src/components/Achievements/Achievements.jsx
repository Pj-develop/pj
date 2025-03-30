import React from 'react';
import styled from 'styled-components';
import { achievements } from '../../data/constants';
import { Fade } from 'react-awesome-reveal';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import CodeIcon from '@mui/icons-material/Code';

const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0;
  background: ${({ theme }) => theme.card_light + '20'};
`;

const AchievementsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;
  padding: 10px 30px;
  @media (max-width: 960px) {
    padding: 10px 10px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AchievementCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 28px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 100%;
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 0;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const AchievementHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 220px;
  height: 140px;
  border-radius: 10px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const AchievementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const AchievementInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AchievementTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AchievementIssuer = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AchievementDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
  
  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
  }
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 12px;
  white-space: pre-line;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Achievements = () => {
  return (
    <AchievementsContainer id="achievements">
      <AchievementsWrapper>
        <Fade direction="up" triggerOnce>
          <Title>Honors & Awards</Title>
          <Subtitle>Recognitions that highlight my innovative problem-solving and technical expertise</Subtitle>
        </Fade>
        
        {achievements.map((achievement, index) => (
          <Fade direction="up" key={achievement.id} triggerOnce>
            <AchievementCard>
              <AchievementHeader>
                {achievement.image && (
                  <ImageContainer>
                    <AchievementImage src={achievement.image} alt={achievement.title} />
                  </ImageContainer>
                )}
                
                <AchievementInfo>
                  <AchievementTitle>
                    <EmojiEventsIcon /> {achievement.title}
                  </AchievementTitle>
                  <AchievementIssuer>Issued by {achievement.issuer}</AchievementIssuer>
                  <AchievementDate>{achievement.date}</AchievementDate>
                  
                  <ProjectInfo>
                    {achievement.projectName && (
                      <ProjectItem>
                        <CodeIcon />
                        Project: {achievement.projectName}
                      </ProjectItem>
                    )}
                    
                    {achievement.teamName && (
                      <ProjectItem>
                        <GroupIcon />
                        Team: {achievement.teamName}
                      </ProjectItem>
                    )}
                  </ProjectInfo>
                </AchievementInfo>
              </AchievementHeader>
              
              <Description>{achievement.description}</Description>
            </AchievementCard>
          </Fade>
        ))}
      </AchievementsWrapper>
    </AchievementsContainer>
  );
};

export default Achievements;
import React from 'react';
import { certifications } from '../../data/constants';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const CertificationsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 100%;
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }
`;

const CertTop = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const CertLogo = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
  border-radius: 4px;
  margin-right: 4px;
`;

const CertTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertIssuer = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CertDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CredentialInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
`;

const CredentialId = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "aa"};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ViewCredential = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary + "33"};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Certifications = () => {
  return (
    <CertificationsContainer id="certifications">
      <CertificationsWrapper>
        <Fade direction="up" triggerOnce>
          <Title>Certifications</Title>
          <Subtitle>Professional credentials that validate my skills and expertise</Subtitle>
        </Fade>
        
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <Fade direction="up" delay={index * 100} triggerOnce key={cert.id}>
              <CertificationCard 
                onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, "_blank")}
              >
                <CertTop>
                  {cert.logo && <CertLogo src={cert.logo} alt={cert.issuer} />}
                  <div>
                    <CertTitle>{cert.title}</CertTitle>
                    <CertIssuer>Issued by {cert.issuer}</CertIssuer>
                    <CertDate>{cert.date}</CertDate>
                  </div>
                </CertTop>
                
                {cert.credentialId && (
                  <CredentialInfo>
                    <CredentialId>Credential ID: {cert.credentialId}</CredentialId>
                    {cert.credentialUrl && (
                      <ViewCredential 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Show credential →
                      </ViewCredential>
                    )}
                  </CredentialInfo>
                )}
                
                {cert.skills && cert.skills.length > 0 && (
                  <SkillTags>
                    {cert.skills.map((skill, i) => (
                      <Tag key={i}>{skill}</Tag>
                    ))}
                  </SkillTags>
                )}
              </CertificationCard>
            </Fade>
          ))}
        </CertificationsGrid>
      </CertificationsWrapper>
    </CertificationsContainer>
  );
};

export default Certifications;
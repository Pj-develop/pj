import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 10px 22px rgba(0,0,0,0.12);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 16px 28px rgba(0,0,0,0.2);
        filter: brightness(1.03);
    }
    &:hover ${Button} {
        display: block;
    }
    @media only screen and (max-width: 768px){
      width: 100%;
      max-width: 360px;
      height: auto;
      min-height: 460px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 8px 18px rgba(0,0,0,0.12);
    object-fit: cover;
`
const Thumb = styled.div`
    position: relative;
    width: 100%;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(120deg, ${({ theme }) => theme.bgLight}, ${({ theme }) => theme.card_light});
    box-shadow: 0 8px 18px rgba(0,0,0,0.12);
`
const DefaultThumb = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 14px;
    background: ${({ theme }) =>
      theme.isDark ? theme.black + "66" : theme.white + "b8"};
    backdrop-filter: blur(8px);
`
const ThumbTitle = styled.div`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => (theme.isDark ? theme.white : theme.text_primary)};
    font-weight: 700;
    font-size: 16px;
    padding: 10px 12px;
    border-radius: 10px;
    background: ${({ theme }) =>
      theme.isDark ? theme.black + "55" : theme.white + "dd"};
    border: 1px solid ${({ theme }) => theme.primary + "55"};
    text-transform: capitalize;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project, setOpenModal}) => {
    const imgSrc = project.image;
    const forceFallbackIds = new Set([201, 203, 204, 205, 206]);
    const isPlaceholderImage =
      typeof imgSrc === "string" &&
      imgSrc.includes("i.ibb.co/Sw4DdHNW/logo.png");
    const hasValidImage =
      Boolean(imgSrc) && !forceFallbackIds.has(project.id) && !isPlaceholderImage;

    const [imageFailed, setImageFailed] = React.useState(false);

    React.useEffect(() => {
      setImageFailed(false);
    }, [imgSrc, project.id]);

    const showImage = hasValidImage && !imageFailed;
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            {showImage ? (
              <Image
                src={imgSrc}
                onError={() => setImageFailed(true)}
                loading="lazy"
              />
            ) : (
              <Thumb>
                <DefaultThumb>
                  <ThumbTitle>{project.title}</ThumbTitle>
                </DefaultThumb>
              </Thumb>
            )}
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img}/>
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards
import bioData from "../content/bio.json";
import skillsData from "../content/skills.json";
import experiencesData from "../content/experiences.json";
import educationData from "../content/education.json";
import projectsData from "../content/projects.json";
import certificationsData from "../content/certifications.json";
import achievementsData from "../content/achievements.json";

const defaultContent = {
  Bio: bioData,
  skills: skillsData.items,
  experiences: experiencesData.items,
  education: educationData.items,
  projects: projectsData.items,
  certifications: certificationsData.items,
  achievements: achievementsData.items,
};

const getOverrides = () => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem("portfolio-content-overrides");
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
};

const overrides = getOverrides();

export const Bio = { ...defaultContent.Bio, ...(overrides.Bio || {}) };
export const skills = overrides.skills || defaultContent.skills;
export const experiences = overrides.experiences || defaultContent.experiences;
export const education = overrides.education || defaultContent.education;
export const projects = overrides.projects || defaultContent.projects;
export const certifications =
  overrides.certifications || defaultContent.certifications;
export const achievements = overrides.achievements || defaultContent.achievements;

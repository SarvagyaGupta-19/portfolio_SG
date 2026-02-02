export interface SocialConfig {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    codolio?: string;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    link: string;
    logo: string;
}

export interface Project {
    name: string;
    description: string;
    link: string;
    skills: string[];
    image: string;
}

export interface ExperienceConfig {
    company: string;
    title: string;
    dateRange: string;
    bullets: string[];
    githubLink?: string;
}

export interface EducationConfig {
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    accentColor: string;
    social: SocialConfig;
    resumeLink?: string;
    aboutMe: string;
    skillCategories: SkillCategory[];
    skills: string[]; // For backward compatibility
    certifications: Certification[];
    projects: Project[];
    experience: ExperienceConfig[];
    education: EducationConfig[];
}

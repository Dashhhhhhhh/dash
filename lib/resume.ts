import { promises as fs } from 'fs';
import path from 'path';

// Type definitions for resume data structure
export interface ResumeBasics {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  links: Array<{
    label: string;
    url: string;
  }>;
}

export interface ResumeEducation {
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  details: string[];
}

export interface ResumeExperience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  url: string;
  bullets: string[];
}

export interface ResumeSkills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  other: string[];
}

export interface ResumeAward {
  title: string;
  issuer: string;
  date: string;
  notes: string;
}

export interface ResumeData {
  basics: ResumeBasics;
  education: ResumeEducation[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  awards: ResumeAward[];
}

// Validation schemas
const validateBasics = (basics: any): basics is ResumeBasics => {
  return (
    typeof basics === 'object' &&
    typeof basics.name === 'string' &&
    typeof basics.headline === 'string' &&
    typeof basics.location === 'string' &&
    typeof basics.email === 'string' &&
    typeof basics.phone === 'string' &&
    typeof basics.website === 'string' &&
    Array.isArray(basics.links) &&
    basics.links.every((link: any) =>
      typeof link === 'object' &&
      typeof link.label === 'string' &&
      typeof link.url === 'string'
    )
  );
};

const validateEducation = (education: any): education is ResumeEducation[] => {
  return (
    Array.isArray(education) &&
    education.every((edu: any) =>
      typeof edu === 'object' &&
      typeof edu.school === 'string' &&
      typeof edu.degree === 'string' &&
      typeof edu.field === 'string' &&
      typeof edu.start === 'string' &&
      typeof edu.end === 'string' &&
      Array.isArray(edu.details) &&
      edu.details.every((detail: any) => typeof detail === 'string')
    )
  );
};

const validateExperience = (experience: any): experience is ResumeExperience[] => {
  return (
    Array.isArray(experience) &&
    experience.every((exp: any) =>
      typeof exp === 'object' &&
      typeof exp.company === 'string' &&
      typeof exp.role === 'string' &&
      typeof exp.location === 'string' &&
      typeof exp.start === 'string' &&
      typeof exp.end === 'string' &&
      Array.isArray(exp.bullets) &&
      exp.bullets.every((bullet: any) => typeof bullet === 'string')
    )
  );
};

const validateProjects = (projects: any): projects is ResumeProject[] => {
  return (
    Array.isArray(projects) &&
    projects.every((project: any) =>
      typeof project === 'object' &&
      typeof project.name === 'string' &&
      typeof project.url === 'string' &&
      Array.isArray(project.bullets) &&
      project.bullets.every((bullet: any) => typeof bullet === 'string')
    )
  );
};

const validateSkills = (skills: any): skills is ResumeSkills => {
  return (
    typeof skills === 'object' &&
    Array.isArray(skills.languages) &&
    Array.isArray(skills.frameworks) &&
    Array.isArray(skills.tools) &&
    Array.isArray(skills.other) &&
    skills.languages.every((lang: any) => typeof lang === 'string') &&
    skills.frameworks.every((fw: any) => typeof fw === 'string') &&
    skills.tools.every((tool: any) => typeof tool === 'string') &&
    skills.other.every((other: any) => typeof other === 'string')
  );
};

const validateAwards = (awards: any): awards is ResumeAward[] => {
  return (
    Array.isArray(awards) &&
    awards.every((award: any) =>
      typeof award === 'object' &&
      typeof award.title === 'string' &&
      typeof award.issuer === 'string' &&
      typeof award.date === 'string' &&
      typeof award.notes === 'string'
    )
  );
};

// Main validation function
const validateResumeData = (data: any): data is ResumeData => {
  try {
    return (
      typeof data === 'object' &&
      validateBasics(data.basics) &&
      validateEducation(data.education) &&
      validateExperience(data.experience) &&
      validateProjects(data.projects) &&
      validateSkills(data.skills) &&
      validateAwards(data.awards)
    );
  } catch (error) {
    console.error('Resume validation failed:', error);
    return false;
  }
};

// Resume utility class
class ResumeLoader {
  private static instance: ResumeLoader;
  private data: ResumeData | null = null;
  private isLoaded = false;

  private constructor() {}

  static getInstance(): ResumeLoader {
    if (!ResumeLoader.instance) {
      ResumeLoader.instance = new ResumeLoader();
    }
    return ResumeLoader.instance;
  }

  async load(): Promise<ResumeData> {
    if (this.isLoaded && this.data) {
      return this.data;
    }

    try {
      const filePath = path.join(process.cwd(), 'data', 'resume.json');
      const fileContents = await fs.readFile(filePath, 'utf8');
      const parsedData = JSON.parse(fileContents);

      if (!validateResumeData(parsedData)) {
        throw new Error('Invalid resume data structure');
      }

      // Sort sections in stable order
      const sortedData: ResumeData = {
        basics: parsedData.basics,
        education: this.sortEducation(parsedData.education),
        experience: this.sortExperience(parsedData.experience),
        projects: this.sortProjects(parsedData.projects),
        skills: parsedData.skills,
        awards: this.sortAwards(parsedData.awards),
      };

      this.data = sortedData;
      this.isLoaded = true;
      return sortedData;
    } catch (error) {
      console.error('Failed to load resume data:', error);
      throw new Error(`Resume data loading failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private sortEducation(education: ResumeEducation[]): ResumeEducation[] {
    return education.sort((a, b) => {
      // Sort by start date (most recent first)
      return new Date(b.start).getTime() - new Date(a.start).getTime();
    });
  }

  private sortExperience(experience: ResumeExperience[]): ResumeExperience[] {
    return experience.sort((a, b) => {
      // Sort by start date (most recent first)
      return new Date(b.start).getTime() - new Date(a.start).getTime();
    });
  }

  private sortProjects(projects: ResumeProject[]): ResumeProject[] {
    return projects.sort((a, b) => {
      // Sort alphabetically by name
      return a.name.localeCompare(b.name);
    });
  }

  private sortAwards(awards: ResumeAward[]): ResumeAward[] {
    return awards.sort((a, b) => {
      // Sort by date (most recent first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  // Typed getters for individual sections
  async getBasics(): Promise<ResumeBasics> {
    const data = await this.load();
    return data.basics;
  }

  async getEducation(): Promise<ResumeEducation[]> {
    const data = await this.load();
    return data.education;
  }

  async getExperience(): Promise<ResumeExperience[]> {
    const data = await this.load();
    return data.experience;
  }

  async getProjects(): Promise<ResumeProject[]> {
    const data = await this.load();
    return data.projects;
  }

  async getSkills(): Promise<ResumeSkills> {
    const data = await this.load();
    return data.skills;
  }

  async getAwards(): Promise<ResumeAward[]> {
    const data = await this.load();
    return data.awards;
  }

  // Convenience methods for handling empty/null data
  async getNonEmptyEducation(): Promise<ResumeEducation[]> {
    const education = await this.getEducation();
    return education.filter(edu => edu.school && edu.degree);
  }

  async getNonEmptyExperience(): Promise<ResumeExperience[]> {
    const experience = await this.getExperience();
    return experience.filter(exp => exp.company && exp.role);
  }

  async getNonEmptyProjects(): Promise<ResumeProject[]> {
    const projects = await this.getProjects();
    return projects.filter(project => project.name);
  }

  async getNonEmptyAwards(): Promise<ResumeAward[]> {
    const awards = await this.getAwards();
    return awards.filter(award => award.title && award.issuer);
  }

  // Utility methods
  async hasEducation(): Promise<boolean> {
    const education = await this.getNonEmptyEducation();
    return education.length > 0;
  }

  async hasExperience(): Promise<boolean> {
    const experience = await this.getNonEmptyExperience();
    return experience.length > 0;
  }

  async hasProjects(): Promise<boolean> {
    const projects = await this.getNonEmptyProjects();
    return projects.length > 0;
  }

  async hasAwards(): Promise<boolean> {
    const awards = await this.getNonEmptyAwards();
    return awards.length > 0;
  }
}

// Export singleton instance
export const resumeLoader = ResumeLoader.getInstance();

// Export convenience functions
export const loadResumeData = () => resumeLoader.load();
export const getResumeBasics = () => resumeLoader.getBasics();
export const getResumeEducation = () => resumeLoader.getEducation();
export const getResumeExperience = () => resumeLoader.getExperience();
export const getResumeProjects = () => resumeLoader.getProjects();
export const getResumeSkills = () => resumeLoader.getSkills();
export const getResumeAwards = () => resumeLoader.getAwards();

// Export filtered versions
export const getNonEmptyEducation = () => resumeLoader.getNonEmptyEducation();
export const getNonEmptyExperience = () => resumeLoader.getNonEmptyExperience();
export const getNonEmptyProjects = () => resumeLoader.getNonEmptyProjects();
export const getNonEmptyAwards = () => resumeLoader.getNonEmptyAwards();

// Export utility functions
export const hasEducation = () => resumeLoader.hasEducation();
export const hasExperience = () => resumeLoader.hasExperience();
export const hasProjects = () => resumeLoader.hasProjects();
export const hasAwards = () => resumeLoader.hasAwards();

// Types are already exported above with interface declarations

export interface PersonalInfo {
  full_name: string;
  title: string;
  bio: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  role: string;
  description: string;
  responsibilities: string[];
}

export interface Skills {
  frontend: string[];
  backend: string[];
  databases: string[];
}

export interface PortfolioData {
  personal_information: PersonalInfo;
  education: Education[];
  experience: Experience[];
  services: string[];
  projects: Project[];
  skills: Skills;
  certifications: string[];
  professional_highlights: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

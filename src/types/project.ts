import { Job } from "./job";

export interface ContentBlock {
  sys: {
    id: string;
  };
  fields: {
    internalName: string;
    content: string;
    title?: string;
    image?: string;
  };
};

export interface Project {
  id: string;
  title: string;
  image: string;
  languages: string[];
  description: string;
  duration: string;
  type: ProjectType;
  teamSize: string;
  logo: string;
  slug: string;
  screenshots?: string[];
  screens?: string[];
  technologies?: string[];
  url?: string;
  isC2a?: boolean;
  job?: Job;
  contentBlocks?: ContentBlock[];
}

export type ProjectType = 'Enterprise software' | 'Android / iOS Application' | 'Web Application';

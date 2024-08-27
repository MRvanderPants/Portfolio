import { ContentBlock } from './contentBlock';
import { Job } from './job';

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
  displayInHeader: boolean;
}

export type ProjectType = 'Enterprise software' | 'Android / iOS Application' | 'Web Application';

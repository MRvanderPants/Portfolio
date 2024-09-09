import { Job } from './job';
import { Project } from './project';
import { Technology } from './technology';

export type DisciplineType = 'webdev' | 'softwaredev' | 'gamedev';

export type Discipline = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  slug: DisciplineType;
  cases?: Project[];
  jobs?: Job[];
  technologies?: Technology[];
  image: string;
}

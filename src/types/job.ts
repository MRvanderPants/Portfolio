import { ContentBlock } from './contentBlock';

export type Job = {
  id: string;
  slug: string;
  title: string;
  noDetails: boolean;
  role: string;
  skills: string[];
  date_start: string;
  date_end: string;
  clients: string[];
  description: string;
  url?: string;
  contentBlocks?: ContentBlock[];
}

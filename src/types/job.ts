import { ContentBlock } from './contentBlock';

export type Job = {
  id: string;
  slug: string;
  role: string;
  skills: string[];
  date_start: string;
  date_end: string;
  clients: string[];
  description: string;
  url?: string;
  contentBlocks?: ContentBlock[];
}

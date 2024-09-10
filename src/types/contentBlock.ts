import { Job } from "./job";
import { Project } from "./project";

export interface ContentBlock {
  sys: {
    id: string;
  };
  fields: {
    internalName: string;
    order: number;
    content: string;
    title?: string;
    image?: string;
    images?: string[];
    case?: Project;
    job?: Job;
  };
};

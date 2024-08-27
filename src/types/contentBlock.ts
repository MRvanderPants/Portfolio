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
  };
};

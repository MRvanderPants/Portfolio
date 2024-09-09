export type Technology = {
  id: string;
  title: string;
  description: string;
  fromDate: string;
  abbreviation: string;
  knowledgeRating: number;
  category: TechnologyCategory,
};

export type TechnologyCategory = 'basics' | 'frameworks' | 'other';
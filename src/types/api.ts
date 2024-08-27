export interface APIEntry {
  fields: any,
  metadata: {
    tags: any[],
  },
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        id: string;
        linkType: string;
        type: string;
      }
    };
    createdAt: string;
  },
}

export type APIIncludes = {
  Asset: APIEntry[],
  Entry: APIEntry[]
};

export interface APIEntryResponse {
  items: APIEntry[];
  limit: number;
  skip: number;
  sys: {
    type: string;
  }
  total: number;
  includes: APIIncludes;
}

export type APIEntryLink = {
  sys: {
    id: string;
    linkType: 'Entry' | 'Asset';
    type: string;
  };
};

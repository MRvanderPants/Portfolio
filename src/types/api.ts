export interface APIEntry {
  fields: any,
  metadata: {
    tags: any[],
  },
  sys: {
    id: string;
    type: string;
    createdAt: string;
  },
}

export interface APIEntryResponse {
  items: APIEntry[];
  limit: number;
  skip: number;
  sys: {
    type: string;
  }
  total: number;
  includes?: {
    Asset: any[],
    Entry: any[]
  }
}

export type IDURL = {
  id: string;
  url: string;
}

export type Job = {
  id: string;
  role: string;
  skills: string[];
  date_start: string;
  date_end: string;
  clients: string[];
  description: string;
  url?: string;
}

export function responseToJob(id: string, fields: any): Job {
  return {
    id,
    role: fields.role,
    skills: fields.skills,
    date_start: fields.dateStart,
    date_end: fields.dateEnd,
    clients: fields.clients,
    description: fields.description,
    url: fields.url ?? null,
  };
}

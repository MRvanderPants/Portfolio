import { Injectable } from '@angular/core';
import { Discipline, Job, Project } from 'src/types';
import { APIEntry, APIEntryLink, APIIncludes } from 'src/types/api';

@Injectable()
export class ContentfulService {

  public getApiEntriesFromIncludes(links: APIEntryLink[], includes: APIIncludes): APIEntry[] {
    return links.map(({sys}) => includes[sys.linkType].find(include => include.sys.id === sys.id)!);
  }

  public getApiEntryFromIncludes(link: APIEntryLink, includes: APIIncludes): APIEntry {
    return includes[link.sys.linkType].find(include => include.sys.id === link.sys.id)!;
  }

  public apiEntryLinkToProject(apiEntry: APIEntryLink, includes: APIIncludes): Project {
    const {fields, sys} = this.getApiEntryFromIncludes(apiEntry, includes);
    return this.generateProject(fields, sys, includes);
  }

  public apiEntryToProject(apiEntry: APIEntry, includes: APIIncludes): Project {
    const {fields, sys} = apiEntry;
    return this.generateProject(fields, sys, includes);
  }

  public apiEntryLinkToJob(apiEntry: APIEntryLink, includes: APIIncludes): Job {
    const {fields, sys} = this.getApiEntryFromIncludes(apiEntry, includes);
    return this.generateJob(fields, sys, includes);
  }

  public apiEntryToJob(apiEntry: APIEntry, includes: APIIncludes): Job {
    const {fields, sys} = apiEntry;
    return this.generateJob(fields, sys, includes);
  }

  public apiEntryLinkToDiscipline(apiEntry: APIEntryLink, includes: APIIncludes): Discipline {
    const {fields, sys} = this.getApiEntryFromIncludes(apiEntry, includes);
    return this.generateDiscipline(fields, sys, includes);
  }

  public apiEntryToDiscipline(apiEntry: APIEntry, includes: APIIncludes): Discipline {
    const {fields, sys} = apiEntry;
    return this.generateDiscipline(fields, sys, includes);
  }

  public getAssetUrl(assets: APIEntry[] | undefined, id: string): string {
    return assets?.find(a => a.sys.id === id)?.fields.file.url ?? '';
  }

  private generateJob(fields: any, sys: APIEntry['sys'], includes: APIIncludes): Job {
    return {
      id: sys.id,
      slug: fields.slug,
      role: fields.role,
      skills: fields.skills,
      date_start: fields.dateStart,
      date_end: fields.dateEnd,
      clients: fields.clients,
      description: fields.description,
      url: fields.url ?? null,
      contentBlocks: this.getApiEntriesFromIncludes(fields.contentBlocks || [], includes),
    };
  }

  private generateProject(fields: any, sys: APIEntry['sys'], includes: APIIncludes): Project {
    return {
      id: sys.id,
      title: fields.title,
      image: this.getAssetUrl(includes.Asset, fields.image.sys.id),
      languages: fields.languages,
      description: fields.description,
      duration: fields.duration,
      type: fields.type,
      teamSize: fields.teamSize,
      logo: this.getAssetUrl(includes.Asset, fields.icon.sys.id),
      screenshots: [this.getAssetUrl(includes.Asset, fields.screenshot.sys.id)],
      screens: fields.screens?.map((a: any) => this.getAssetUrl(includes.Asset, a.sys.id)) ?? null,
      technologies: fields.technologies,
      url: fields.url ?? null,
      isC2a: fields.isC2a,
      job: fields.job ? this.apiEntryLinkToJob(fields.job, includes) : undefined,
      slug: fields.slug,
      contentBlocks: this.getApiEntriesFromIncludes(fields.contentBlocks || [], includes),
      displayInHeader: fields.displayInHeader,
    };
  }

  private generateDiscipline(fields: any, sys: APIEntry['sys'], includes: APIIncludes): Discipline {
    const casesLinks: APIEntryLink[] = fields.cases || [];
    const cases = casesLinks.map(entry => this.apiEntryLinkToProject(entry, includes));
    const jobLinks: APIEntryLink[] = fields.jobs || [];
    const jobs = jobLinks.map(entry => this.apiEntryLinkToJob(entry, includes));
    return {
      id: sys.id,
      slug: fields.slug,
      title: fields.title,
      shortDescription: fields.shortDescription,
      description: fields.description,
      image: this.getAssetUrl(includes.Asset, fields.image.sys.id),
      cases,
      jobs,
    };
  }
}

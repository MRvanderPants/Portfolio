import { Injectable } from '@angular/core';
import { Discipline, Job, Project } from 'src/types';
import { APIEntry, APIEntryLink, APIIncludes } from 'src/types/api';
import { Technology } from 'src/types/technology';

@Injectable()
export class ContentfulService {

  public getApiEntriesFromIncludes(links: APIEntryLink[], includes: APIIncludes): APIEntry[] {
    return links
      .map((link) => this.parseInnerIncludes(link, includes))
      .filter(entry => entry != null) as APIEntry[];
  }

  public getApiEntryFromIncludes(link: APIEntryLink, includes: APIIncludes): APIEntry {
    return this.parseInnerIncludes(link, includes)!;
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

  public apiEntryLinkToTechnology(apiEntry: APIEntryLink, includes: APIIncludes): Technology {
    const {fields, sys} = this.getApiEntryFromIncludes(apiEntry, includes);
    return this.generateTechnology(fields, sys);
  }

  public apiEntryToTechnology(apiEntry: APIEntry): Technology {
    const {fields, sys} = apiEntry;
    return this.generateTechnology(fields, sys);
  }

  public getAssetUrl(assets: APIEntry[] | undefined, id: string): string {
    return assets?.find(a => a.sys.id === id)?.fields.file.url ?? '';
  }

  private generateJob(fields: any, sys: APIEntry['sys'], includes: APIIncludes): Job {
    return {
      id: sys.id,
      slug: fields.slug,
      title: fields.title,
      noDetails: fields.noDetails,
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
    const image = typeof fields.image === 'string'
      ? fields.image
      : this.getAssetUrl(includes.Asset, fields.image.sys.id);
    return {
      id: sys.id,
      title: fields.title,
      image: image,
      languages: fields.languages,
      description: fields.description,
      duration: fields.duration,
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
    const techLinks: APIEntryLink[] = fields.technologies || [];
    const technologies = techLinks.map(entry => this.apiEntryLinkToTechnology(entry, includes));
    return {
      id: sys.id,
      slug: fields.slug,
      title: fields.title,
      shortDescription: fields.shortDescription,
      description: fields.description,
      image: this.getAssetUrl(includes.Asset, fields.image.sys.id),
      cases,
      jobs,
      technologies,
    };
  }

  private generateTechnology(fields: any, sys: APIEntry['sys']): Technology {
    return {
      id: sys.id,
      title: fields.title,
      description: fields.description,
      fromDate: fields.fromDate,
      abbreviation: fields.abbreviation,
      knowledgeRating: fields.knowledgeRating,
      category: fields.category,
    };
  }


  private parseInnerIncludes(link: APIEntryLink, includes: APIIncludes): APIEntry | null {
    const entry = includes[link.sys.linkType].find(include => include.sys.id === link.sys.id);
    if (!entry) {
      return null;
    }

    const image = entry.fields.image;
    if (image && !image.fields && typeof image !== 'string') {
      const data: APIEntryLink = image;
      entry.fields.image = includes[data.sys.linkType].find(include => include.sys.id === data.sys.id)!.fields.file.url;
    }
    
    const images = entry.fields.images;
    if (images) {
      entry.fields.images = images.map((e: APIEntryLink) => 
        includes[e.sys.linkType].find(include => include.sys.id === e.sys.id)!.fields.file.url);
    }

    const project = entry.fields.case;
    if (project && !project.fields && typeof project !== 'string') {
      const data: APIEntryLink = project;
      entry.fields.case = this.apiEntryLinkToProject(data, includes);
    }

    return entry;
  }
}

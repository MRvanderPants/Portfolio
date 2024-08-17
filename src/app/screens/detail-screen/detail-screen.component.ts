import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIEntryResponse, Project, responseToJob } from 'src/types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { IDURL } from 'src/types/api';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.scss']
})
export class DetailScreenComponent implements OnInit {
  public project: Project | null = null;
  public projects: Project[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '-1'; // TODO replace id with readable text
    setTimeout(() => {
      window.scroll({top: 0, behavior: 'smooth'})
    }, 50);
    this.fetchProjects(id);
  }

  public otherProjects() {
    return this.projects.filter(proj => proj.id != this.project?.id);
  }

  private fetchProjects(id: string) {
    this.httpClient.get(`${environment.apiUrl}/spaces/${environment.apiSpaceId}/environments/master/entries?access_token=${environment.apiKey}&content_type=${'case'}&include=10`).subscribe((response) => {
      const {items, includes} = response as APIEntryResponse;

      const assets = includes?.Asset.map(a => {
        return {
          id: a.sys.id,
          url: a.fields.file.url
        } as IDURL;
      });

      const getAssetUrlById = (id: string): string => {
        return assets?.find(a => a.id === id)?.url ?? '';
      };
      
      const contentBlocks = includes?.Entry.filter(a => a.sys.contentType.sys.id === 'contentBlock');
      contentBlocks?.forEach(a => {
        a.fields.image = getAssetUrlById(a.fields.image.sys.id);
      });
      console.log(contentBlocks);
      
      const linkedJobs = includes?.Entry.map(({sys, fields}) => {
        return responseToJob(sys.id, fields);
      });

      const getJobById = (id: string) => {
        return linkedJobs?.find(a => a.id === id);
      }

      const parsedProjects: Project[] = [];
      items.forEach(({fields, sys}) => {

        // Make sure to sort the content blocks based on the CF order
        if (fields.contentBlocks) {
          const contentIds = fields.contentBlocks.map((a: any) => a.sys.id);
          contentBlocks?.sort((a, b) => contentIds.indexOf(a.sys.id) - contentIds.indexOf(b.sys.id));
        }

        const project: Project = {
          id: sys.id,
          title: fields.title,
          image: getAssetUrlById(fields.image.sys.id),
          languages: fields.languages,
          description: fields.description,
          duration: fields.duration,
          type: fields.type,
          teamSize: fields.teamSize,
          logo: getAssetUrlById(fields.icon.sys.id),
          screenshots: [getAssetUrlById(fields.screenshot.sys.id)],
          screens: fields.screens?.map((a: any) => getAssetUrlById(a.sys.id)) ?? null,
          technologies: fields.technologies,
          url: fields.url ?? null,
          isC2a: fields.isC2a,
          job: fields.job ? getJobById(fields.job.sys.id) : undefined,
          slug: fields.slug,
          contentBlocks: contentBlocks,
        };
        
        if (project.slug === id) {
          console.log(project.contentBlocks);
          this.project = project;
        } else {
          parsedProjects.push(project);
        }
      });
      this.projects = parsedProjects;
    });
  }
}

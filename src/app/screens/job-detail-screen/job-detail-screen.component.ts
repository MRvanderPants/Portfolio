import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIEntryResponse, Job, Project, responseToJob } from 'src/types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { IDURL } from 'src/types/api';

@Component({
  selector: 'app-job-detail-screen',
  templateUrl: './job-detail-screen.component.html',
  styleUrls: ['./job-detail-screen.component.scss']
})
export class JobDetailScreenComponent implements OnInit {
  public job!: Job;
  public otherJobs: Job[] = [];
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
    this.fetchJob(id).then(() => {
      this.fetchProjects();
    });
  }

  public allJobs() {
    const allJobs = this.job ? [this.job, ...this.otherJobs] : [...this.otherJobs];
    const parsedJobs: Job[] = [];
    allJobs.forEach(job => {
      if (job.date_end != '???') {
        parsedJobs.push(job);
      }
    });
    parsedJobs.sort((a, b) => parseInt(b.date_start, 10) - parseInt(a.date_start, 10));
    return [...parsedJobs];
  }

  private fetchJob(id: string) {
    return new Promise<void> ((resolve) => {
      this.httpClient.get(`${environment.apiUrl}/spaces/${environment.apiSpaceId}/environments/master/entries/?access_token=${environment.apiKey}&content_type=${'job'}`).subscribe((response) => {
        const {items} = response as APIEntryResponse;
        items.forEach(({sys, fields}) => {
          const job = responseToJob(sys.id, fields);
          if (job.slug === id) {
            this.job = job;
          } else {
            this.otherJobs.push(job);
          }
        });
        resolve();
      });
    });
  }

  private fetchProjects() {
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
      
      const linkedJobs = includes?.Entry.map(({sys, fields}) => {
        return responseToJob(sys.id, fields);
      });

      const getJobById = (id: string) => {
        return linkedJobs?.find(a => a.id === id);
      }

      const highlitProjects: Project[] = [];
      items.forEach(({fields, sys}) => {
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
        };

        if (project.job?.id == this.job.id) {
          highlitProjects.push(project);
        }
      });
      this.projects = highlitProjects;
    });
  }
}

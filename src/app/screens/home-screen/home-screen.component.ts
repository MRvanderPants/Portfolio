import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environment/environment';
import { APIEntryResponse, Job, responseToJob, Project } from 'src/types';
import { IDURL } from 'src/types/api';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('tech', {read: ElementRef})techWrapper?: ElementRef;
  public showButton = true;
  public yearsOfExp = 0;
  public jobTags: string[] = [];
  public jobs: Job[] = [];
  public projects: Project[] = [];

  constructor (private readonly httpClient: HttpClient) {}

  public ngOnInit() {
    this.yearsOfExp = this.yearsOfExperience();
    window.addEventListener('scroll', _ => {
      this.showButton = document.documentElement.scrollTop < 500;
    });
  
    this.fetchJobs();
    this.fetchProjects();
  }

  public moveToDescription() {
    const top = this.techWrapper?.nativeElement.offsetTop ?? 0;
    window.scroll({top, behavior: 'smooth'});
  }

  public yearsOfExperience() {
    const year = new Date().getFullYear();
    return year - 2013;
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
      const parsedProjects: Project[] = [];
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
          content: fields.content.split('\n'),
          logo: getAssetUrlById(fields.icon.sys.id),
          screenshots: [getAssetUrlById(fields.screenshot.sys.id)],
          screens: fields.screens?.map((a: any) => getAssetUrlById(a.sys.id)) ?? null,
          technologies: fields.technologies,
          url: fields.url ?? null,
          isC2a: fields.isC2a,
          job: fields.job ? getJobById(fields.job.id) : undefined,
        };

        if (project.isC2a) {
          highlitProjects.push(project);
        } else {
          parsedProjects.push(project);
        }
      });
      this.projects = [...highlitProjects, ...parsedProjects];
    });
  }

  private fetchJobs() {
    this.httpClient.get(`${environment.apiUrl}/spaces/${environment.apiSpaceId}/environments/master/entries?access_token=${environment.apiKey}&content_type=${'job'}`).subscribe((response) => {
      const data = response as APIEntryResponse;
      const highlitJobs: Job[] = [];
      const parsedJobs: Job[] = [];
      data.items.forEach(({sys, fields}) => {
        const job: Job = responseToJob(sys.id, fields);
        if (job.date_end === '???') {
          highlitJobs.push(job);
        } else {
          parsedJobs.push(job);
        }
      });
      parsedJobs.sort((a, b) => parseInt(b.date_start, 10) - parseInt(a.date_start, 10));
      this.jobs = [...highlitJobs, ...parsedJobs];

      this.jobTags = [
        ...new Set(this.jobs.flatMap(job => {
          return job.skills
        }).sort())
      ];
    });
  }
}

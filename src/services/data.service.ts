import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIEntryResponse, Discipline, Job, Project } from 'src/types';
import { environment } from 'src/environment/environment';
import { ContentfulService } from './contentful.service';

@Injectable()
export class DataService {

  constructor(
    private httpClient: HttpClient,
    private contentfulService: ContentfulService,
  ) { }


  /**
   * Fetches all gender objects from the JSON file
   * @returns { Promise <any> }
   */
  public sendMail (formData: any): Promise <any> {
    return new Promise ((resolve) => {
      this.httpClient.get(
        environment.emailApi + `?email=${formData.email}&message=${formData.message}&name=${formData.name}&subject=${formData.subject}&check1=${formData.check1}&check2=${formData.check2}`
      )
      .subscribe(
        data => resolve(data),
        error => resolve(error.error.text)
      );
    });
  }

  public async getProjects(): Promise <Project[]> {
    return new Promise((resolve) => {
      this.httpClient.get(`${environment.apiUrl}/spaces/${environment.apiSpaceId}/environments/master/entries?access_token=${environment.apiKey}&content_type=${'case'}&include=10`).subscribe((response) => {
        const {items, includes} = response as APIEntryResponse;
        const highlitProjects: Project[] = [];
        const parsedProjects: Project[] = [];
        items.forEach((item) => {
          const project = this.contentfulService.apiEntryToProject(item, includes);
          if (project.isC2a) {
            highlitProjects.push(project);
          } else {
            parsedProjects.push(project);
          }
        });
        resolve([...highlitProjects, ...parsedProjects]);
      });
    });
  }

  public getJobs(): Promise<Job[]> {
    return new Promise((resolve) => {
      this.httpClient.get(`${environment.apiUrl}/spaces/${environment.apiSpaceId}/environments/master/entries?access_token=${environment.apiKey}&content_type=${'job'}`).subscribe((response) => {
        const {items, includes} = response as APIEntryResponse;
        const highlitJobs: Job[] = [];
        const parsedJobs: Job[] = [];
        items.forEach((item) => {
          const job = this.contentfulService.apiEntryToJob(item, includes);
          if (job.date_end === '???') {
            highlitJobs.push(job);
          } else {
            parsedJobs.push(job);
          }
        });
        parsedJobs.sort((a, b) => parseInt(b.date_start, 10) - parseInt(a.date_start, 10));
        resolve([...highlitJobs, ...parsedJobs]);
      });
    });
  }

  public getDisciplines(): Promise<Discipline[]> {
    return new Promise((resolve) => {
      this.httpClient.get(`${environment.apiUrl}/spaces/${environment.apiSpaceId}/environments/master/entries?access_token=${environment.apiKey}&content_type=${'discipline'}`).subscribe((response) => {
        const {items, includes} = response as APIEntryResponse;
        const disciplines = items.map((item) => this.contentfulService.apiEntryToDiscipline(item, includes));
        resolve(disciplines);
      });
    });
  }
}

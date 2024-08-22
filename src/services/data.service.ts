import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIEntryResponse, Job, Project, responseToJob } from 'src/types';
import { environment } from 'src/environment/environment';
import { IDURL } from 'src/types/api';

@Injectable()
export class DataService {

  private emailAPI = 'https://www.mrvanderpants.com/email.php';

  constructor(private httpClient: HttpClient) { }


  /**
   * Fetches all gender objects from the JSON file
   * @returns { Promise <any> }
   */
  public sendMail (formData: any): Promise <any> {
    return new Promise ((resolve) => {
      this.httpClient.get(
        this.emailAPI + `?email=${formData.email}&message=${formData.message}&name=${formData.name}&subject=${formData.subject}&check1=${formData.check1}&check2=${formData.check2}`
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
            logo: getAssetUrlById(fields.icon.sys.id),
            screenshots: [getAssetUrlById(fields.screenshot.sys.id)],
            screens: fields.screens?.map((a: any) => getAssetUrlById(a.sys.id)) ?? null,
            technologies: fields.technologies,
            url: fields.url ?? null,
            isC2a: fields.isC2a,
            job: fields.job ? getJobById(fields.job.sys.id) : undefined,
            slug: fields.slug,
            displayInHeader: fields.displayInHeader,
          };
  
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
        resolve([...highlitJobs, ...parsedJobs]);
      });
    });
  }
}

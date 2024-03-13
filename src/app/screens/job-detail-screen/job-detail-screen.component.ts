import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly httpClient: HttpClient,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '-1'; // TODO replace id with readable text
    setTimeout(() => {
      window.scroll({top: 0, behavior: 'smooth'})
    }, 50);
    this.fetchJob(id);
  }

  public goBack() {
    this.location.back();
  }

  public allJobs() {
    const allJobs = [this.job, ...this.otherJobs];
    const highlitJobs: Job[] = [];
    const parsedJobs: Job[] = [];
    allJobs.forEach(job => {
      if (job.date_end === '???') {
        highlitJobs.push(job);
      } else {
        parsedJobs.push(job);
      }
    });
    parsedJobs.sort((a, b) => parseInt(b.date_start, 10) - parseInt(a.date_start, 10));
    return [...highlitJobs, ...parsedJobs];
  }

  private fetchJob(id: string) {
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
    });
  }
}

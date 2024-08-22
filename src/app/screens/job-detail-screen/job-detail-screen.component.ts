import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, Project } from 'src/types';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-job-detail-screen',
  templateUrl: './job-detail-screen.component.html',
  styleUrls: ['./job-detail-screen.component.scss']
})
export class JobDetailScreenComponent implements OnInit {
  public job!: Job;
  public otherJobs: Job[] = [];
  public projects: Project[] = [];
  public projectImages: string[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService,
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '-1'; // TODO replace id with readable text
    setTimeout(() => {
      window.scroll({top: 0, behavior: 'smooth'})
    }, 50);
    await this.fetchJob(id);
    this.fetchProjects(id);
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

  private async fetchProjects(id: string) {
    const projects = await this.dataService.getProjects();
    this.projects = projects.filter(p => p.job?.slug === id);
    this.projectImages = this.projects.flatMap(project => project.screens || []);
  }

  private async fetchJob(id: string) {
    const jobs = await this.dataService.getJobs();
    jobs.forEach((job) => {
      if (job.slug === id) {
        this.job = job;
      } else {
        this.otherJobs.push(job);
      }
    });
  }
}

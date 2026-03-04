import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, Project } from 'src/types';
import { DataService } from 'src/services/data.service';
import { BackToTopComponent } from '../../components/back-to-top/back-to-top.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TimelineResumeItemComponent } from '../../components/timeline-resume-item/timeline-resume-item.component';
import { TimelineProjectsItemComponent } from '../../components/timeline-projects-item/timeline-projects-item.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { CfContentBlockComponent } from '../../components/cf-content-block/cf-content-block.component';
import { ContentBlockComponent } from '../../components/content-block/content-block.component';
import { JobHeaderComponent } from '../../components/job-header/job-header.component';
import { NgIf, NgFor } from '@angular/common';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { BackgroundWrapperComponent } from '../../components/background-wrapper/background-wrapper.component';

@Component({
    selector: 'app-job-detail-screen',
    templateUrl: './job-detail-screen.component.html',
    styleUrls: ['./job-detail-screen.component.scss'],
    standalone: true,
    imports: [BackgroundWrapperComponent, BackButtonComponent, NgIf, JobHeaderComponent, ContentBlockComponent, NgFor, CfContentBlockComponent, TimelineComponent, TimelineProjectsItemComponent, TimelineResumeItemComponent, FooterComponent, BackToTopComponent]
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

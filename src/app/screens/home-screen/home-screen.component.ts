import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Job, Project } from 'src/types';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('tech', {read: ElementRef})techWrapper?: ElementRef;
  public showButton = true;
  public jobTags: string[] = [];
  public jobs: Job[] = [];
  public projects: Project[] = [];
  public gridProjects: Project[] = [];

  constructor (private readonly dataService: DataService) {}

  public ngOnInit() {
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

  private async fetchProjects() {
    this.projects = await this.dataService.getProjects();
    this.gridProjects = this.projects.filter(a => a.displayInHeader);
  }

  private async fetchJobs() {
    this.jobs = await this.dataService.getJobs();
    this.jobTags = [
      ...new Set(this.jobs.flatMap(job => {
        return job.skills
      }).sort())
    ];
  }
}

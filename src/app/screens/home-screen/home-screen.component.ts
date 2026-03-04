import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Discipline, Job, Project } from 'src/types';
import { BackToTopComponent } from '../../components/back-to-top/back-to-top.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TimelineResumeItemComponent } from '../../components/timeline-resume-item/timeline-resume-item.component';
import { NgFor } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { JumpInBoxComponent } from '../../components/jump-in-box/jump-in-box.component';
import { WorkPanelComponent } from '../../components/work-panel/work-panel.component';
import { ContentBlockComponent } from '../../components/content-block/content-block.component';
import { MoveDownComponent } from '../../components/move-down/move-down.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
    selector: 'app-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.scss'],
    standalone: true,
    imports: [HeaderComponent, MoveDownComponent, ContentBlockComponent, WorkPanelComponent, JumpInBoxComponent, TimelineComponent, NgFor, TimelineResumeItemComponent, FooterComponent, BackToTopComponent]
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('tech', {read: ElementRef})techWrapper?: ElementRef;
  public jobTags: string[] = [];
  public jobs: Job[] = [];
  public projects: Project[] = [];
  public disciplines: Discipline[] = [];
  public gridProjects: Project[] = [];

  constructor (private readonly dataService: DataService) {}

  public ngOnInit() {
    Promise.all([
      this.fetchJobs(),
      this.fetchProjects(),
      this.fetchDisciplines(),
    ]);
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

  private async fetchDisciplines() {
    this.disciplines = await this.dataService.getDisciplines();
  }
}

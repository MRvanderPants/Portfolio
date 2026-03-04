import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/types';
import { DataService } from 'src/services/data.service';
import { BackToTopComponent } from '../../components/back-to-top/back-to-top.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TimelineProjectsItemComponent } from '../../components/timeline-projects-item/timeline-projects-item.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';
import { CfContentBlockComponent } from '../../components/cf-content-block/cf-content-block.component';
import { ContentBlockComponent } from '../../components/content-block/content-block.component';
import { DetailHeaderComponent } from '../../components/detail-header/detail-header.component';
import { NgIf, NgFor } from '@angular/common';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { BackgroundWrapperComponent } from '../../components/background-wrapper/background-wrapper.component';

@Component({
    selector: 'app-detail-screen',
    templateUrl: './detail-screen.component.html',
    styleUrls: ['./detail-screen.component.scss'],
    standalone: true,
    imports: [BackgroundWrapperComponent, BackButtonComponent, NgIf, DetailHeaderComponent, ContentBlockComponent, NgFor, CfContentBlockComponent, JobDetailsComponent, TimelineComponent, TimelineProjectsItemComponent, FooterComponent, BackToTopComponent]
})
export class DetailScreenComponent implements OnInit {
  public project: Project | null = null;
  public projects: Project[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService,
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

  private async fetchProjects(id: string) {
    this.projects = await this.dataService.getProjects();
    this.project = this.projects.find(project => project.slug === id)!;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { Discipline, Project } from 'src/types';
import { TechnologyCategory } from 'src/types/technology';
import { BackToTopComponent } from '../../components/back-to-top/back-to-top.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TimelineResumeItemComponent } from '../../components/timeline-resume-item/timeline-resume-item.component';
import { KnowledgeMatrixWrapperComponent } from '../../components/knowledge-matrix-wrapper/knowledge-matrix-wrapper.component';
import { TimelineProjectsItemComponent } from '../../components/timeline-projects-item/timeline-projects-item.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ContentBlockComponent } from '../../components/content-block/content-block.component';
import { DetailHeaderComponent } from '../../components/detail-header/detail-header.component';
import { NgIf, NgFor } from '@angular/common';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { BackgroundWrapperComponent } from '../../components/background-wrapper/background-wrapper.component';

@Component({
    selector: 'app-discipline-screen',
    templateUrl: './discipline-screen.component.html',
    styleUrls: ['./discipline-screen.component.scss'],
    standalone: true,
    imports: [BackgroundWrapperComponent, BackButtonComponent, NgIf, DetailHeaderComponent, ContentBlockComponent, TimelineComponent, NgFor, TimelineProjectsItemComponent, KnowledgeMatrixWrapperComponent, TimelineResumeItemComponent, FooterComponent, BackToTopComponent]
})
export class DisciplineScreenComponent implements OnInit {

  public disciplineAsProject?: Project;

  public disciplines: Discipline[] = [];
  public discipline: Discipline | null = null;

  constructor (
    private readonly router: Router,
    private readonly dataService: DataService,
  ) {}

  public ngOnInit(): void {
    const id = this.router.url.split('/')[2];
    const ids = ['webdev', 'softwaredev', 'gamedev'];
    if (!ids.includes(id)) {
      this.router.navigate(['/error']);
    }

    this.fetchDisciplines(id);
  }

  private async fetchDisciplines(id: string) {
    this.disciplines = await this.dataService.getDisciplines();
    this.discipline = this.disciplines.find(discipline => discipline.slug === id)!;

    this.disciplineAsProject = {
      id: '-1',
      title: this.discipline.title,
      image: '',
      languages: [],
      description: this.discipline.description,
      duration: '',
      teamSize: '',
      logo: this.discipline.image,
      slug: '',
      displayInHeader: false,
    };
  }
}

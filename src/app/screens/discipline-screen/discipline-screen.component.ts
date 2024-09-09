import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { Discipline, Project } from 'src/types';
import { TechnologyCategory } from 'src/types/technology';

@Component({
  selector: 'app-discipline-screen',
  templateUrl: './discipline-screen.component.html',
  styleUrls: ['./discipline-screen.component.scss']
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/types';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.scss']
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
    const projects = await this.dataService.getProjects();
    this.projects = projects;
  }
}

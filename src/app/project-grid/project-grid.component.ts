import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project, projects } from 'src/assets/projects';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent {
  public projects: Project[] = projects;

  constructor(public readonly router: Router) {}

  public goToPage(id: number) {
    this.router.navigate([`/details`, {id}]);
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/types';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent {
  @Input() public projects: Project[] = [];

  constructor(public readonly router: Router) {}

  public goToPage(id: string) {
    this.router.navigate([`/details/${id}`]);
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/types';
import { PrefixIconPipe } from '../pipes/prefix-icon.pipe';
import { NgFor, NgStyle } from '@angular/common';

@Component({
    selector: 'app-project-grid',
    templateUrl: './project-grid.component.html',
    styleUrls: ['./project-grid.component.scss'],
    standalone: true,
    imports: [NgFor, NgStyle, PrefixIconPipe]
})
export class ProjectGridComponent {
  @Input() public projects: Project[] = [];

  constructor(public readonly router: Router) {}

  public goToPage(id: string) {
    this.router.navigate([`/details/${id}`]);
  }
}

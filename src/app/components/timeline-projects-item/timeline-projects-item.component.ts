import { Component, Input } from '@angular/core';
import { Project } from 'src/types';
import { TagListComponent } from '../tag-list/tag-list.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-timeline-projects-item',
    templateUrl: './timeline-projects-item.component.html',
    styleUrls: ['./timeline-projects-item.component.scss'],
    standalone: true,
    imports: [NgIf, TagListComponent]
})
export class TimelineProjectsItemComponent {
  @Input() public project!: Project;
  @Input() public current!: Project;
}

import { Component, Input } from '@angular/core';
import { Project } from 'src/types';

@Component({
  selector: 'app-timeline-projects-item',
  templateUrl: './timeline-projects-item.component.html',
  styleUrls: ['./timeline-projects-item.component.scss']
})
export class TimelineProjectsItemComponent {
  @Input() public project!: Project;
  @Input() public current!: Project;
}

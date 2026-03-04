import { Component, Input } from '@angular/core';
import { Job } from 'src/types/job';
import { TagListComponent } from '../tag-list/tag-list.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-timeline-resume-item',
    templateUrl: './timeline-resume-item.component.html',
    styleUrls: ['./timeline-resume-item.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, TagListComponent]
})
export class TimelineResumeItemComponent {
  @Input() public job!: Job;
  @Input() public highlit: boolean = false;
  @Input() public showDescriptions: boolean = true;

  public getYearForJob(job: Job): string {
    return job.date_end ? job.date_end : new Date().getFullYear().toString();
  }
}

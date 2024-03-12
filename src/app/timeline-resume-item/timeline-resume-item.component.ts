import { Component, Input } from '@angular/core';
import { Job } from 'src/types/job';

@Component({
  selector: 'app-timeline-resume-item',
  templateUrl: './timeline-resume-item.component.html',
  styleUrls: ['./timeline-resume-item.component.scss']
})
export class TimelineResumeItemComponent {
  @Input() public job!: Job;

  public getYearForJob(job: Job): string {
    return job.date_end ? job.date_end : new Date().getFullYear().toString();
  }
}

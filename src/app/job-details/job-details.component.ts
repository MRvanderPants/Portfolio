import { Component, Input } from '@angular/core';
import { Job } from 'src/types';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  @Input() public job!: Job;
}

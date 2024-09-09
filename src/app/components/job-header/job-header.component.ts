import { Component, Input } from '@angular/core';
import { Job } from 'src/types';

@Component({
  selector: 'app-job-header',
  templateUrl: './job-header.component.html',
  styleUrls: ['./job-header.component.scss']
})
export class JobHeaderComponent {
  @Input() public job!: Job;
  @Input() public projectImages: string[] = [];
}

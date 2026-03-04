import { Component, Input } from '@angular/core';
import { Job } from 'src/types';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf]
})
export class JobDetailsComponent {
  @Input() public title: string = '';
  @Input() public showCta: boolean = false;
  @Input() public job!: Job;
}

import { Component, Input } from '@angular/core';
import { Job } from 'src/types';
import { JobCarrouselComponent } from '../job-carrousel/job-carrousel.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-job-header',
    templateUrl: './job-header.component.html',
    styleUrls: ['./job-header.component.scss'],
    standalone: true,
    imports: [NgIf, JobCarrouselComponent]
})
export class JobHeaderComponent {
  @Input() public job!: Job;
  @Input() public projectImages: string[] = [];
}

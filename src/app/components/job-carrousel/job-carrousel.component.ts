import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-job-carrousel',
    templateUrl: './job-carrousel.component.html',
    styleUrls: ['./job-carrousel.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class JobCarrouselComponent {
  @Input() public images: string[] = [];
}

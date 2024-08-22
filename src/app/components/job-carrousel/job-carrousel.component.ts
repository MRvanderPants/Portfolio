import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-carrousel',
  templateUrl: './job-carrousel.component.html',
  styleUrls: ['./job-carrousel.component.scss']
})
export class JobCarrouselComponent {
  @Input() public images: string[] = [];
}

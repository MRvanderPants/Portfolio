import { Component, Input } from '@angular/core';
import { Job } from 'src/assets/jobs';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent {
  @Input() public job: Job = null as unknown as Job;
  @Input() public index: number = 0;
  @Input() public open: boolean = false;
}

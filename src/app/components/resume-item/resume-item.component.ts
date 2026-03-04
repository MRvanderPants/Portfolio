import { Component, Input } from '@angular/core';
import { Job } from 'src/types';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-resume-item',
    templateUrl: './resume-item.component.html',
    styleUrls: ['./resume-item.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class ResumeItemComponent {
  @Input() public job: Job = null as unknown as Job;
  @Input() public index: number = 0;
  @Input() public open: boolean = false;
}

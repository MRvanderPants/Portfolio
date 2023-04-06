import { Component } from '@angular/core';
import { jobs } from 'src/assets/jobs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public jobs = jobs;
}

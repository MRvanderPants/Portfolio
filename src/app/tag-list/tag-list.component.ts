import { Component } from '@angular/core';
import { jobs } from 'src/assets/jobs';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  public tags = new Set(jobs.flatMap(job => {
    return job.skills
  }).sort());
}

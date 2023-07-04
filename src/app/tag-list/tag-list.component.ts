import { Component, Input } from '@angular/core';
import { jobs } from 'src/assets/jobs';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input() public tags: string[] = [];
  @Input() public variant: 'large' | 'default' = 'default';
}

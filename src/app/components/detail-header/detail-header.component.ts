import { Component, Input } from '@angular/core';
import { Project } from 'src/types';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent {
  @Input() public project?: Project;
  @Input() public showTags: boolean = true;
}

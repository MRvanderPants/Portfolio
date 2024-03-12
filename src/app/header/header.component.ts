import { Component, Input } from '@angular/core';
import { Project } from 'src/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public projects: Project[] = [];
}

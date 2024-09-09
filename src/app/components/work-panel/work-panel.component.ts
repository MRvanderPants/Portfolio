import { Component, Input } from '@angular/core';
import { Discipline } from 'src/types';

@Component({
  selector: 'app-work-panel',
  templateUrl: './work-panel.component.html',
  styleUrls: ['./work-panel.component.scss']
})
export class WorkPanelComponent {
  @Input() public disciplines: Discipline[] = [];

  public yearsOfExperience() {
    const year = new Date().getFullYear();
    return year - 2013;
  }
}

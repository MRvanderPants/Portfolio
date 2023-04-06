import { Component } from '@angular/core';

@Component({
  selector: 'app-work-panel',
  templateUrl: './work-panel.component.html',
  styleUrls: ['./work-panel.component.scss']
})
export class WorkPanelComponent {
  public yearsOfExperience() {
    const year = new Date().getFullYear();
    return year - 2013;
  }
}

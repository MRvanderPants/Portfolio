import { Component, Input } from '@angular/core';
import { Discipline } from 'src/types';
import { JumpInBoxComponent } from '../jump-in-box/jump-in-box.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-work-panel',
    templateUrl: './work-panel.component.html',
    styleUrls: ['./work-panel.component.scss'],
    standalone: true,
    imports: [NgFor, JumpInBoxComponent]
})
export class WorkPanelComponent {
  @Input() public disciplines: Discipline[] = [];

  public yearsOfExperience() {
    const year = new Date().getFullYear();
    return year - 2013;
  }
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-background-wrapper',
    templateUrl: './background-wrapper.component.html',
    styleUrls: ['./background-wrapper.component.scss'],
    standalone: true
})
export class BackgroundWrapperComponent {
  @Input() public showLogo: boolean = false;
}

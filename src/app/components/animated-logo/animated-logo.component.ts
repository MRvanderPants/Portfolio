import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-logo',
  templateUrl: './animated-logo.component.html',
  styleUrls: ['./animated-logo.component.scss']
})
export class AnimatedLogoComponent {
  @Input() public logo: string = '';
}

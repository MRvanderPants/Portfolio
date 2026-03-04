import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-animated-logo',
    templateUrl: './animated-logo.component.html',
    styleUrls: ['./animated-logo.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class AnimatedLogoComponent {
  @Input() public logo: string = '';
}

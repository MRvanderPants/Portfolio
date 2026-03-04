import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-wave',
    templateUrl: './wave.component.html',
    styleUrls: ['./wave.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class WaveComponent {
  @Input() public hasTag: boolean = false;
}

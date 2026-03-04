import { Component, Input } from '@angular/core';
import { ContentBlock } from 'src/types';
import { WaveComponent } from '../wave/wave.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-cf-content-block',
    templateUrl: './cf-content-block.component.html',
    styleUrls: ['./cf-content-block.component.scss'],
    standalone: true,
    imports: [NgIf, WaveComponent, NgFor]
})
export class CfContentBlockComponent {
  @Input() public hasWave: boolean = false;
  @Input() public hasTag: boolean = false;
  @Input() public contentBlock!: ContentBlock;
}

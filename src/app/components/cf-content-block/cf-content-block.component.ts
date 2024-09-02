import { Component, Input } from '@angular/core';
import { ContentBlock } from 'src/types';

@Component({
  selector: 'app-cf-content-block',
  templateUrl: './cf-content-block.component.html',
  styleUrls: ['./cf-content-block.component.scss']
})
export class CfContentBlockComponent {
  @Input() public hasWave: boolean = false;
  @Input() public hasTag: boolean = false;
  @Input() public contentBlock!: ContentBlock;
}

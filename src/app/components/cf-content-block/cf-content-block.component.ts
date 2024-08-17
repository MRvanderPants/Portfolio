import { Component, Input } from '@angular/core';
import { ContentBlock } from 'src/types';

@Component({
  selector: 'app-cf-content-block',
  templateUrl: './cf-content-block.component.html',
  styleUrls: ['./cf-content-block.component.scss']
})
export class CfContentBlockComponent {
  @Input() public contentBlock!: ContentBlock;
}

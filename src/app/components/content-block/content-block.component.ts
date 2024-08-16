import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent {
  @Input() public blockTitle: string = '';
  @Input() public theme: 'default' | 'blue' | 'dark' = 'default';
  @Input() public rounded: boolean = false;
  @Input() public extraHigh: boolean = false;
}

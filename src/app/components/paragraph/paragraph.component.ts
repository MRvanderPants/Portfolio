import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class ParagraphComponent {
  @Input() public intro: string = '';
  @Input() public content: string = '';
  @Input() public classNames: string = '';
}

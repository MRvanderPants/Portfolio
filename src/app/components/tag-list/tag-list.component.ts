import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class TagListComponent {
  @Input() public tags: string[] = [];
  @Input() public variant: 'large' | 'default' = 'default';
}

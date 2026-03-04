import { Component, Input } from '@angular/core';
import { Project } from 'src/types';
import { NgIf, NgFor } from '@angular/common';
import { AnimatedLogoComponent } from '../animated-logo/animated-logo.component';
import { ContentBlockComponent } from '../content-block/content-block.component';

@Component({
    selector: 'app-detail-header',
    templateUrl: './detail-header.component.html',
    styleUrls: ['./detail-header.component.scss'],
    standalone: true,
    imports: [ContentBlockComponent, AnimatedLogoComponent, NgIf, NgFor]
})
export class DetailHeaderComponent {
  @Input() public project?: Project;
  @Input() public showTags: boolean = true;
  @Input() public neutralDescription: boolean = false;
}

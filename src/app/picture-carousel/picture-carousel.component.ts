import { Component, Input } from '@angular/core';
import { Project } from '../../assets/projects';

@Component({
  selector: 'app-picture-carousel',
  templateUrl: './picture-carousel.component.html',
  styleUrls: ['./picture-carousel.component.scss']
})
export class PictureCarouselComponent {
  @Input() public project: Project | null = null;

  public targetImageUrl: string = '';
  public targetPanelOpen = false;

  public imageStyles() {
    if (window.screen.width < 640) {
      return '';
    }
    const count = this.project?.screens?.length ?? 0;
    const percentage = 100 / count;
    return `width: calc(${percentage}% - 1rem)`;
  }

  public openImage(url: string) {
    this.targetImageUrl = url;
    this.targetPanelOpen = true;
  }

  public closeModal() {
    this.targetImageUrl = '';
    this.targetPanelOpen = false;
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/types';

@Component({
  selector: 'app-grid-background-item',
  templateUrl: './grid-background-item.component.html',
  styleUrls: [
    './grid-background-item.component.scss',
    './grid-background-side.component.scss'
  ]
})
export class GridBackgroundItemComponent {
  @Input() public item!: Project;
  @Input() public index: number = 0;
  @Input() public itemHeight: number = 0;
  @Input() public itemWidth: number = 0;
  @Input() public numberOfRows: number = 0;

  constructor(public readonly router: Router){}

  public goToPage(item: Project) {
    if (item.isC2a) {
      this.scrollToElement(item.url ?? '#footer')
      return;
    }
    this.router.navigate([`/details`, item.slug]);
  }

  public calculateWidth(): number {
    const el = document.querySelector('.iso-wrapper')!;
    return (el.clientWidth / this.numberOfRows) - 20;
  }

  public calculateMarginTop(index: number): number {
    return index % 2 === 0 ? -(this.itemHeight / 2) : 0;
  }

  public calculateSideLeft(index: number): string {
    const width = this.calculateWidth();
    if (!this.displayCardRight(index)) {
      return `${width + 16}px`
    }
    return `-${width + 16}px`;
  }

  private scrollToElement(url: string) {
    const element = document.querySelector(url)! as HTMLElement;
    const top = element.offsetTop ?? 0;
    window.scroll({top, behavior: 'smooth'});
  }

  private displayCardRight(index: number): boolean {
    const colIndex = index % this.numberOfRows;
    return colIndex >= Math.floor(this.numberOfRows / 2);
  }
}

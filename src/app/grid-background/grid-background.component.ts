import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Project, projects } from 'src/assets/projects';

@Component({
  selector: 'app-grid-background',
  templateUrl: './grid-background.component.html',
  styleUrls: ['./grid-background.component.scss']
})
export class GridBackgroundComponent implements OnInit {
  @ViewChild('wrapper', {read: ElementRef})wrapper?: ElementRef;

  public itemHeight: number = 0;
  public itemWidth: number = 0;
  public itemMarginTop: number = 0;
  public containerMargin: number = 50;
  public columns: Project[][] = [];
  public numberOfRows = 4;

  constructor(public readonly router: Router){}

  public ngOnInit() {
    this.itemHeight = this.calculateHeight();
    this.itemWidth = this.calculateWidth();

    const itemList = this.compileProjects();
    this.columns = this.createColums(itemList);
    const background = document.querySelector('#grid-background')!;
    let wrapperHeight = background.clientHeight;

    window.addEventListener('resize', () => {
      this.itemHeight = this.calculateHeight();
      this.itemWidth = this.calculateWidth();
      wrapperHeight = background.clientHeight;
    });

    // background.addEventListener('mousemove', (event: any) => {
    //   const percentage = (event.y / wrapperHeight) * 100;
    //   this.containerMargin = percentage;
    // });
  }

  public calculateWidth(): number {
    const el = document.querySelector('.iso-wrapper')!;
    return (el.clientWidth / this.numberOfRows) - 20;
  }

  public calculateHeight(): number {
    return (this.calculateWidth() * 16) / 8.1;
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

  public goToPage(id: number) {
    this.router.navigate([`/details`, {id}]);
  }

  private compileProjects(): Project[] {
    const newProjects: Project[] = [];
    projects.forEach(project => {
      project.screenshots?.forEach(screen => {
        const newProject = Object.assign({}, project);
        newProject.screenshots = [screen];
        newProjects.push(newProject);
      });
    });
    return newProjects;
  }

  private displayCardRight(index: number): boolean {
    const colIndex = index % this.numberOfRows;
    return colIndex >= Math.floor(this.numberOfRows / 2);
  }

  private createColums(items: Project[]) {
    const rows: Project[][] = [];
    rows.push([]);
    let rowCount = 0;
    let count = 0;
    items.forEach((item) => {
      rows[rowCount].push(item);
      count++;
      if (count == this.numberOfRows) {
        rowCount++;
        count = 0;
        rows.push([]);
      }
    });
    return rows; 
  }
}

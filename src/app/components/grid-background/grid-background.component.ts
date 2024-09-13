import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/types';

@Component({
  selector: 'app-grid-background',
  templateUrl: './grid-background.component.html',
  styleUrls: ['./grid-background.component.scss']
})
export class GridBackgroundComponent implements OnChanges {
  @ViewChild('wrapper', {read: ElementRef})wrapper?: ElementRef;
  @Input() public projects: Project[] = [];

  public itemHeight: number = 0;
  public itemWidth: number = 0;
  public itemMarginTop: number = 0;
  public containerMargin: number = 50;
  public columns: Project[][] = [];
  public numberOfRows = 4;

  constructor(public readonly router: Router){}

  public ngOnChanges() {
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
  }

  public calculateWidth(): number {
    const el = document.querySelector('.iso-wrapper')!;
    return (el.clientWidth / this.numberOfRows) - 20;
  }

  public calculateHeight(): number {
    return (this.calculateWidth() * 16) / 8.1;
  }

  private compileProjects(): Project[] {
    const newProjects: Project[] = [];
    this.projects.forEach(project => {
      project.screenshots?.forEach(screen => {
        const newProject = Object.assign({}, project);
        newProject.screenshots = [screen];
        newProjects.push(newProject);
      });
    });
    const c2aProject: Project = {
      id: '-1',
      title: 'This could be your project',
      image: '../../assets/gfx/empty_screenshot.png',
      languages: [],
      duration: '',
      teamSize: '',
      url: '#footer',
      description: 'Feel free to get in touch with me if you think I would be a good fit for your project or team.',
      logo: '../../assets/gfx/empty-logo.png',
      screenshots: ['../../assets/gfx/empty_screenshot.png'],
      isC2a: true,
      slug: '/', // TODO add page here
      displayInHeader: true,
    };
    return [c2aProject, ...newProjects];
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

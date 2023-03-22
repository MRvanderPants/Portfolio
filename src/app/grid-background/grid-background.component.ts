import { Component, OnInit } from '@angular/core';
import { Project, projects } from 'src/assets/projects';

@Component({
  selector: 'app-grid-background',
  templateUrl: './grid-background.component.html',
  styleUrls: ['./grid-background.component.scss']
})
export class GridBackgroundComponent implements OnInit {
  public items: string[] = [];
  public itemHeight: number = 0;
  public itemWidth: number = 0;
  public itemMarginTop: number = 0;
  public containerMargin: number = 50;

  public ngOnInit() {
    this.itemHeight = this.calculateHeight();
    this.itemWidth = this.calculateWidth();

    const itemList = projects.flatMap(p => p.screenshots ?? []);
    this.items = this.shuffle(itemList);
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
    return (document.body.clientWidth / 4) - 20;
  }

  public calculateHeight(): number {
    return (this.calculateWidth() * 16) / 8.7;
  }

  public calculateMarginTop(): number {
    const height = this.calculateHeight();
    return height * 0.5;
  }

  public shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}

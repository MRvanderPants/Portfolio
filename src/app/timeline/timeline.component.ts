import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { Job } from 'src/types';

export interface TimelineItem {
  titles: string[];
  description: string;
  tags: string[];
  url?: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {

  @Input() public jobs: Job[] = [];
  @Input() public hasTimeline = true;

  public slides: number[] = [];
  public activeSlide = 0;

  public ngOnChanges() {
    setTimeout(() => {
      const children = document.querySelectorAll('.timeline .item')!;
      const slideCount = Math.ceil(children.length / 3);
      this.slides = new Array(slideCount);
    });
  }

  public getYearForJob(job: Job): string {
    return job.date_end ? job.date_end : new Date().getFullYear().toString();
  }

  public activateSlide(index: number) {
    this.activeSlide = index;

    const parent = document.querySelector('.timeline > .wrapper')!;
    const children = document.querySelectorAll('.timeline .item')!;
    const target = children[index * 3] as HTMLElement;

    const scrollDistance = target.offsetLeft - parent.scrollLeft - (window.screen.width * 0.1);
    parent.scrollTo({
      left: parent.scrollLeft + scrollDistance,
      behavior: 'smooth'
    });
  }
}

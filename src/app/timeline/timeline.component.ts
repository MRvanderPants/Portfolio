import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class TimelineComponent implements OnInit, OnChanges {
  @Input() public id: string = '';
  @Input() public jobs: Job[] = [];
  @Input() public hasTimeline = true;
  @Input() public scrollToHighlit: boolean = false;

  public slides: number[] = [];
  public activeSlide = 0;

  public ngOnInit(): void {
    setTimeout(() => {
      if (this.scrollToHighlit) {
        const children = document.querySelectorAll(`#${this.id} > .timeline .item`)!;
        for (let i = 0; i < children.length; i++) {
          if (children[i].classList.contains('active')) {
            const targetIndex = Math.ceil(i / 3);
            const slideIndex = Math.ceil(targetIndex / 3) - 1;
            this.activateSlide(slideIndex);
            return;
          }
        }
      }
    }, 1000);
  }

  public ngOnChanges() {
    setTimeout(() => {
      const children = document.querySelectorAll(`#${this.id} > .timeline .item`)!;
      const slideCount = Math.ceil(children.length / 3);
      this.slides = new Array(slideCount);
    });
  }

  public getYearForJob(job: Job): string {
    return job.date_end ? job.date_end : new Date().getFullYear().toString();
  }

  public activateSlide(index: number) {
    this.activeSlide = index;
    
    const parent = document.querySelector(`#${this.id} .timeline-wrapper`)!;
    const children = document.querySelectorAll(`#${this.id} > .timeline .item`)!;
    let target = children[index * 3] as HTMLElement;
    if (!target) {
      target = children[children.length - 1] as HTMLElement;
    }
    
    const scrollDistance = target.offsetLeft - parent.scrollLeft - (window.screen.width * 0.1);
    parent.scrollTo({
      left: parent.scrollLeft + scrollDistance,
      behavior: 'smooth'
    });
  }
}

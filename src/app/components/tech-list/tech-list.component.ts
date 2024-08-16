import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent {
  @Input() public tags: string[] = [];

  public ngOnInit() {
    window.addEventListener('scroll', _ => {
      const elements = document.querySelectorAll('.taggable');
      const colWidth = 6;
      elements.forEach((el) => {
        const e = (el as HTMLElement);
        if (e.style.transitionDelay === '') {
          const parent = el.parentNode!;
          const index = Array.prototype.indexOf.call(parent.children, el);
          const x = index % colWidth;
          const y = Math.round(index / colWidth);
          e.style.transitionDelay = ((x + y) * 0.1) + 's';
        }

        if (e.getBoundingClientRect().y < (window.innerHeight / 2) + 200) {
          el.classList.remove('outside');
        } else {
          el.classList.add('outside');
        }
      });
    });
  }
}

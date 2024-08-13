import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-fill-box',
  templateUrl: './background-fill-box.component.html',
  styleUrls: ['./background-fill-box.component.scss']
})
export class BackgroundFillBoxComponent implements OnInit {
  @Input() public className: string = '';

  public ngOnInit() {
    window.addEventListener('scroll', _ => {
      const elements = document.querySelectorAll(`.${this.className}`);
      elements.forEach((el) => {
        const e = (el as HTMLElement).getBoundingClientRect().y;
        if (e < window.innerHeight / 2) {
          el.classList.remove('outside');
        } else {
          el.classList.add('outside');
        }
      });
    });
  }
}

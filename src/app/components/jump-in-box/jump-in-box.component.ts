import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jump-in-box',
  templateUrl: './jump-in-box.component.html',
  styleUrls: ['./jump-in-box.component.scss']
})
export class JumpInBoxComponent implements OnInit {
  @Input() public className: string = '';
  @Input() public direction: 'left' | 'right' = 'left';

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

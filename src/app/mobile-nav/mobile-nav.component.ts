import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  public targetId: string = '';
  public headerHidden = false;

  constructor(private router: Router) {}

  public ngOnInit() {
    this.updateId();
    window.addEventListener('scroll', () => {
      this.updateId();
      if (['', '/'].includes(window.location.pathname)) {
        this.headerHidden = document.documentElement.scrollTop > 1200;
      } else {
        this.headerHidden = false;
      }
    })
  }

  public findInView() {
    const elements = document.querySelectorAll('[id]') as NodeListOf<HTMLElement>;
    const found = [];
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const topX = element.offsetTop;
      const bottomX = element.offsetTop + element.offsetHeight;
      if (window.scrollY + 300 > topX && window.scrollY < bottomX) {
        found.push(element.id);
      }
    }
    return found;
  }

  public updateId(url?: string) {
    const ids = this.findInView();
    this.targetId = ids[ids.length - 1] ?? 'top';

    if (url) {
      if (!window.location.href.includes('/details') && !window.location.href.includes('/recipe')) {
        this.scrollToElement(url);
      } else {
        this.router.navigateByUrl(`/${url}`);
        setTimeout(() => {
          this.scrollToElement(url);
        }, 500);
      }
    }
  }

  private scrollToElement(url: string) {
    const element = document.querySelector(url)! as HTMLElement;
    const top = element.offsetTop ?? 0;
    window.scroll({top, behavior: 'smooth'});
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public projects: Project[] = [];
  @ViewChild('header') header: ElementRef | undefined; 

  public ngOnInit() {
    const body = document.querySelector('body');
    this.handleScroll(body);
    window.addEventListener('scroll', _ => {
      this.handleScroll(body);
    });
  }

  private handleScroll(body: HTMLBodyElement | null) {
    if (this.header && body && window.location.pathname === '/') {
      const minY = 800;
      const maxH = this.header.nativeElement.clientHeight - 200;
      // 15 26 37
      const scrollDist = window.scrollY - minY;
      const scrollperc = Math.max(0, scrollDist / (maxH - minY));
      const r = Math.max(15, 255 - (255 * scrollperc));
      const g = Math.max(26, 255 - (255 * scrollperc));
      const b = Math.max(37, 255 - (255 * scrollperc));
      // this.header.nativeElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
}

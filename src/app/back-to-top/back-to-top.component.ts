import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  public showButton = false;

  public ngOnInit() {
    window.addEventListener('scroll', _ => {
      this.showButton = document.documentElement.scrollTop > 400;
    });
  }

  public scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

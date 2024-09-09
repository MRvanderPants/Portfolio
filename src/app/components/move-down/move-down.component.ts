import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-move-down',
  templateUrl: './move-down.component.html',
  styleUrls: ['./move-down.component.scss']
})
export class MoveDownComponent implements OnInit {
  public showButton = true;
  public ngOnInit() {
    window.addEventListener('scroll', _ => {
      this.showButton = document.documentElement.scrollTop < 500;
    });
  }
}

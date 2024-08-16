import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss']
})
export class ErrorScreenComponent implements OnInit {
  public counter = 0;
  public showCounter = false;

  constructor () {}

  public ngOnInit(): void {
    const reportButton = document.getElementById('report')!;
    reportButton.addEventListener('mouseenter', () => {
      this.counter++;
      if (reportButton.classList.contains('right')) {
        reportButton.classList.remove('right');
      } else {
        reportButton.classList.add('right');
      }
    });
  }

  public handleClick() {
    console.log('click')
    this.showCounter = true;
  }
}

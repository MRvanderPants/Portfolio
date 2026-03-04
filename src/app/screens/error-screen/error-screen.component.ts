import { Component, OnInit } from '@angular/core';
import { BackToTopComponent } from '../../components/back-to-top/back-to-top.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgIf } from '@angular/common';
import { ContentBlockComponent } from '../../components/content-block/content-block.component';
import { BackgroundWrapperComponent } from '../../components/background-wrapper/background-wrapper.component';

@Component({
    selector: 'app-error-screen',
    templateUrl: './error-screen.component.html',
    styleUrls: ['./error-screen.component.scss'],
    standalone: true,
    imports: [BackgroundWrapperComponent, ContentBlockComponent, NgIf, FooterComponent, BackToTopComponent]
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  constructor(
    private readonly router: Router,
  ) {}

  public goBack() {
    this.router.navigate(['/']);
  }
}

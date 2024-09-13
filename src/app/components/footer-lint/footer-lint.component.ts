import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-lint',
  templateUrl: './footer-lint.component.html',
  styleUrls: ['./footer-lint.component.scss']
})
export class FooterLintComponent {
  public year = new Date().getFullYear();
}

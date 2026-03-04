import { Component, Input } from '@angular/core';
import { FooterLintComponent } from '../footer-lint/footer-lint.component';
import { FooterColofonComponent } from '../footer-colofon/footer-colofon.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [ContactFormComponent, FooterColofonComponent, FooterLintComponent]
})
export class FooterComponent {
  @Input() public theme: 'blue' | 'default' = 'default';
}

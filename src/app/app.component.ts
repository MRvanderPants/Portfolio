import { Component } from '@angular/core';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, MobileNavComponent]
})
export class AppComponent {
  title = 'Portfolio';
}

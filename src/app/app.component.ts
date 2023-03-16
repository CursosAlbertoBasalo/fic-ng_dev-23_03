import { Component } from '@angular/core';

// templateUrl: './app.component.html',
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>Main content</main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>Learnuing Angular 17</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    h1 {
      color: red;
    }
    header {
      background-color: brown;
    }
  `,
})
export class HeaderComponent {}

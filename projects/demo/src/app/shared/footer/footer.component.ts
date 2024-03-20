import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-footer',
  standalone: true,
  imports: [DatePipe],
  template: `
    <footer>
      <address>{{ brand }}</address>
      <p>{{ toDay | date: 'fullDate' }}</p>
    </footer>
  `,
  styles: `
    footer {
      display: flex;
      background-color: brown;
      justify-content: center;
    }
  `,
})
export class FooterComponent {
  @Input() brand: string = 'Daniele Quintiliani';
  toDay = new Date();
}

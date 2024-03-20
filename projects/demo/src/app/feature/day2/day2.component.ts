import { Component } from '@angular/core';

@Component({
  selector: 'isdi-day2',
  standalone: true,
  imports: [],
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.css',
})
export default class Day2Component {
  button(event: Event, value: number) {
    event.preventDefault();
    this.counter += value;
  }

  counter = 0;
}

import { Component } from '@angular/core';

import { SampleNgComponent } from '../sample-ng/sample-ng.component';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [SampleNgComponent, HomeComponent, NgOptimizedImage, FormsModule],
  template: `
    <div>
      <h2>home works!</h2>
      <p>Hola desde home</p>
      <p>app component</p>
    </div>
    <div>
      <label for="text">
        <input type="text" name="" id="text" [(ngModel)]="user" />
      </label>
    </div>
    <p>hola {{ user }}</p>
    <img [ngSrc]="avatar" [height]="size" [width]="size" alt="" />
    <p>cumpleano {{ age }}</p>
    <button (click)="age = age * 2">click me</button>´
    <button (click)="addsomeyear($event, 5)">cumple 5</button>
    <button (click)="addsomeyear($event, 1)">cumple 1</button>
  `,
  styles: ``,
})
export default class HomeComponent {
  pages: string[] = ['home', 'Sample', 'day2'];
  currentPage: string = 'home';

  user = 'pepe';
  avatar = 'https://placehold.co/100';
  size = 100;
  age = 20;

  addsomeyear(event: Event, value: number) {
    event.preventDefault();
    this.age += value;
  }
}

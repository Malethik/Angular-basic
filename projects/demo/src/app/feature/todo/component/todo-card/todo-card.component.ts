import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../../core/model/task';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'isdi-todo-card',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>
      <li>
        <input
          type="checkbox"
          name=""
          id=""
          [(ngModel)]="item.isDone"
          (change)="sendUpdate()"
        />
        <span>{{ item.title }}</span>
        <span>{{ item.owner }}</span>
        <button type="button" (click)="sendDelete()">🗑</button>
        <button type="button">✏</button>
      </li>
    </p>
  `,
  styles: ``,
})
export class TodoCardComponent {
  @Input({ required: true }) item!: Task;
  @Output() deleteEvent = new EventEmitter<Task['id']>();
  @Output() updateEvent = new EventEmitter<Task['id']>();
  sendDelete() {
    this.deleteEvent.emit(this.item.id);
  }
  sendUpdate() {
    this.deleteEvent.emit(this.item.id);
  }
}

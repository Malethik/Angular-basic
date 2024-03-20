import { Component } from '@angular/core';
import { Task } from '../../../../core/model/task';
import { tasks } from '../../../../core/data';
import { FormsModule } from '@angular/forms';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'isdi-todo-list',
  standalone: true,
  imports: [TodoCardComponent],
  template: `
    <p>todo-list works!</p>
    <ul>
      @for (item of tasks; track item.id) {
        <isdi-todo-card [item]="item" (deleteEvent)="onDelete($event)" />
      }
    </ul>
  `,
  styles: ``,
})
export class TodoListComponent {
  tasks: Task[] = [];

  onLoad() {
    tasks().then((tasks) => {
      this.tasks = tasks;
    });
  }

  onDelete(id: Task['id']) {
    this.tasks = this.tasks.filter((tasks) => tasks.id != tasks.id);
  }
  onUpdate(task = Task) {
    this.tasks = this.tasks.map((t)=>);
  }
}

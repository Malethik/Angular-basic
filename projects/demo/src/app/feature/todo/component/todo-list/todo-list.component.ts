import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Task } from '../../../../core/model/task';
import { getTasks } from '../../../../core/data';

import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'isdi-todo-list',
  standalone: true,
  template: `
    <p>todo-list works!</p>
    <details>
      <summary>Añadir tarea</summary>
      <isdi-todo-add (addEvent)="onAdd($event)" />
    </details>
    <ul>
      @for (item of tasks; track item.id) {
        <isdi-todo-card
          [item]="item"
          (deleteEvent)="onDelete($event)"
          (updateEvent)="onUpdate($event)"
        />
      }
    </ul>
  `,
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
  imports: [TodoCardComponent, TodoAddComponent],
  providers: [StorageService, { provide: 'STORE_NAME', useValue: 'tasks' }],
})
export class TodoListComponent {
  tasks: Task[] = [];
  @ViewChild('details', { static: true }) details!: ElementRef;
  public storage = inject(StorageService<Task>);
  constructor() {
    this.onLoad();
  }

  onLoad() {
    this.tasks = this.storage.getStorage();
    if (this.tasks.length === 0) {
      getTasks().then((tasks) => {
        this.tasks = tasks;
        this.storage.setStorage(this.tasks);
        console.log(this.tasks);
      });
    }
  }

  onUpdate(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    console.log(this.tasks);
    this.storage.setStorage(this.tasks);
  }

  onDelete(id: Task['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.storage.setStorage(this.tasks);
  }
  onAdd(task: Task) {
    console.log(this.details);

    this.tasks = [...this.tasks, task];
    this.storage.setStorage(this.tasks);
  }
}

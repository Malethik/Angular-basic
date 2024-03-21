import { Component } from '@angular/core';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoAddComponent } from './component/todo-add/todo-add.component';

@Component({
  selector: 'isdi-todo',
  standalone: true,
  template: ` <p>TodoComponent</p>
    <isdi-todo-list />`,
  styles: ``,
  imports: [TodoListComponent, TodoAddComponent],
})
export default class TodoComponent {
  constructor() {}
}

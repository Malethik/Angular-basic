import { Component } from '@angular/core';
import { TodoListComponent } from './component/todo-list/todo-list.component';

@Component({
  selector: 'isdi-todo',
  standalone: true,
  imports: [TodoListComponent],
  template: ` <p>todo works!</p>
    <isdi-todo-list></isdi-todo-list>`,
  styles: ``,
})
export default class TodoComponent {}

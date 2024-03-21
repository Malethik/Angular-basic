import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../../../core/model/task';

@Component({
  selector: 'isdi-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Nueva tarea" formControlName="title" />
      <input
        type="text"
        placeholder="Nombre del rappresentante"
        formControlName="owner"
      />
      <button type="submit" [disabled]="form.invalid">ADD</button>
    </form>
  `,
  styles: ``,
})
export class TodoAddComponent {
  @Output() addEvent: EventEmitter<Task> = new EventEmitter<Task>();
  private fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    owner: ['', [Validators.required]],
  });

  onSubmit() {
    const newTask: Task = {
      ...this.form.value,
      id: crypto.randomUUID(),
      isDone: false,
    };
    this.addEvent.emit(newTask);
    this.form.reset();
    console.log(newTask);
  }
}

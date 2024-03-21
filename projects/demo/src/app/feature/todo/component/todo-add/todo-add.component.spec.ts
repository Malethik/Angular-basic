import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { StorageService } from '../../../../core/services/storage.service';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;
  jasmine.createSpyObj(StorageService, [
    {
      getStorage: [],
      setStorage: undefined,
    },
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAddComponent],
      providers: [
        {
          provide: 'STORE_NAME',
          useValue: 'test',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

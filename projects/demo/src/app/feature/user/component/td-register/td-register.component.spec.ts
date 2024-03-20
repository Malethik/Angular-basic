import { ComponentFixture, TestBed } from '@angular/core/testing';

import TdRegisterComponent from './td-register.component';
import { By } from '@angular/platform-browser';

describe('TdRegisterComponent', () => {
  let component: TdRegisterComponent;
  let fixture: ComponentFixture<TdRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.onSubmit(new Event('submit'));
    expect(component).toBeTruthy();
  });
  it('should who submit when click submit button', () => {
    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.ngForm.value.name).toBe('');
  });
});

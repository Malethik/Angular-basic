import { ComponentFixture, TestBed } from '@angular/core/testing';

import Day2Component from './day2.component';
import { By } from '@angular/platform-browser';

describe('Day2Component', () => {
  let component: Day2Component;
  let fixture: ComponentFixture<Day2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should click on button -1 to be response to button click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    buttons[0].triggerEventHandler('click', null);
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.textcontect).toBe('-1');
  });
  it('should click button +1 to be response to button click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].triggerEventHandler('click', null);
    buttons[1].nativeElement.click();
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.textcontect).toBe('1');
  });
});

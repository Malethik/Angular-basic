import { ComponentFixture, TestBed } from '@angular/core/testing';

import HomeComponent from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should change value on display', () => {});
  it('should click on button -1 to be response to button click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    fixture.detectChanges();
    buttons[0].triggerEventHandler('click', null);
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.textcontect).toBe('-1');
  });
  it('should click button +1 to be response to button click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[2].triggerEventHandler('click', null);
    buttons[2].nativeElement.click();
    fixture.detectChanges();
    const p2 = fixture.debugElement.queryAll(By.css('p'))[1];
    expect(p2.nativeElement).toBe('27');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, Route } from '@angular/router';
import { routes } from './app.routes';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  let componet: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([] as Route[])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    componet = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(componet).toBeTruthy();
  });

  it(`should have the 'demo' title`, () => {
    expect(componet.title).toContain('Angular');
  });
  it("should have the 'propreti value...", () => {
    expect(componet.title).toContain('Angular');
    expect(componet.brand).toContain('Daniele');
    expect(componet.menuOptions.length).toEqual(routes.length - 2);
  });

  it('should render ...', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular');
  });

  it('should render ...', () => {
    const debugElementH1 = fixture.debugElement.query(By.css('h1'));

    expect(debugElementH1.nativeElement.textContent).toContain('Angular');
  });
});

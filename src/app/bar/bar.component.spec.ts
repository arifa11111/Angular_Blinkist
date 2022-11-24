import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('svg-icon should render in bar',()=>{
    const fixture = TestBed.createComponent(BarComponent);
    const compiled = fixture.nativeElement as HTMLElement
    const app = compiled.querySelector('svg-icon');
    expect(app).toBeTruthy()
  })
});

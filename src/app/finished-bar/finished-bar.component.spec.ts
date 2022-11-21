import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedBarComponent } from './finished-bar.component';

describe('FinishedBarComponent', () => {
  let component: FinishedBarComponent;
  let fixture: ComponentFixture<FinishedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

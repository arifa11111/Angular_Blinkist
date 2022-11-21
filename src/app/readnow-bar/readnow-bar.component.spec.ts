import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadnowBarComponent } from './readnow-bar.component';

describe('ReadnowBarComponent', () => {
  let component: ReadnowBarComponent;
  let fixture: ComponentFixture<ReadnowBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadnowBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadnowBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

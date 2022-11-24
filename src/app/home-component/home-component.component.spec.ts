import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from '../book-list/book-list.component';
import { BookComponent } from '../book/book.component';

import { HomeComponentComponent } from './home-component.component';

describe('HomeComponentComponent', () => {
  let component: HomeComponentComponent;
  let fixture: ComponentFixture<HomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentComponent ,BookListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('input tag in home-component',()=>{
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('input')?.type).toContain('text')
  })
  it('render book-list',()=>{
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('app-book-list')).toBeDefined()

  })
});

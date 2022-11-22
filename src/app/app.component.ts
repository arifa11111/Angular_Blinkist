import { Component } from '@angular/core';
import { AppConstants } from './app.constants';
import { BookService } from './book-list/book-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blinkist_Angular';
  constructor(
    public constants: AppConstants,
    private bookService: BookService
  ) {
    this.bookService.fetchBooks();
  }
}

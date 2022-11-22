import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import { BookService } from './book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(
    public constants: AppConstants,
    private bookService: BookService
  ) {
    this.bookService.fetchBooks();
  }

  ngOnInit(): void {}
}

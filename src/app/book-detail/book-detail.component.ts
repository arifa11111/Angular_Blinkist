import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { Book } from '../book/book.model';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  constructor(
    public constants: AppConstants,
    private bookService: BookDataService,
    private router: Router
  ) {
  }

  tab: number = 1;

  onClick(index: number) {
    this.tab = index;
  }

  onRead(book: Book) {
    this.bookService.updateBooks(book).subscribe();
    this.router.navigate(['/library']);
  }

  onFinish(book: Book) {
    this.bookService.updateFinish(book);
  }

  ngOnInit(): void {}
}

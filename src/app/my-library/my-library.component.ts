import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConstants } from '../app.constants';
import { Book } from '../book/book.model';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css'],
})
export class MyLibraryComponent implements OnInit{

  heading: string = 'My Library';

  constructor(private bookService: BookDataService,public constants:AppConstants) {
  }


  tab: number = 1;
  currentlyReading : Book[] = [];
  finished : Book[] = [];

  onClick(index: number) {
    this.tab = index;
  }

  getCurrentReadBooks() {
    this.bookService.fetchBooks().subscribe(books => {
      return books
      .filter(item => item.status == 'reading')
      .map(book => {
        this.currentlyReading.push(book)
      })
    });
  }

  getFinishedBooks(){
    this.bookService.fetchBooks().subscribe(books => {
      return books.filter(item => item.status == 'finished')
      .map(book => {
        this.finished.push(book)
      })
    });
  }

  ngOnInit(): void {
    this.getCurrentReadBooks();
    this.getFinishedBooks();
  }

}

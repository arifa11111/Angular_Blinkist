import { Component, DoCheck, OnInit } from '@angular/core';
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
    console.log(this.currentlyReading);

  }

  getFinishedBooks(){
    this.bookService.fetchBooks().subscribe(books => {
      return books.filter(item => item.status == 'finished')
      .map(book => {
        console.log(book.status)
        this.finished.push(book)
      })
    });
  }

  onBtnClick(book : Book){
      book.isread = !book.isread;
      this.bookService.updateBooks(book).subscribe(books => {
        console.log(books);
      })
  }

  ngOnInit(): void {
    this.getCurrentReadBooks();
    this.getFinishedBooks();
  }

}

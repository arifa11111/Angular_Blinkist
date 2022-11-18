import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public booklist:Book[]=[]

  constructor(private http: HttpClient) {
    this.http
      .get<Book[]>('https://blinkist-angular-default-rtdb.firebaseio.com/Data.json')
      .pipe(
        map(books => {
          return books.map(book => {
            return {
              ...book,
            };
          });
        })
      )
      .subscribe(books => {
        return books.map(book=>{
          this.booklist.push(book)
        })
      });
   }

  ngOnInit(): void {
  }

}

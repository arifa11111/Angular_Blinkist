import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { map } from 'rxjs/internal/operators/map';
import { AppConstants } from '../app.constants';


@Injectable({
  providedIn: 'root',
})

export class BookService{

  public booklist:Book[]=[]

  constructor(private http: HttpClient,public constants:AppConstants){}

  fetchBooks() {
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
          this.constants.bookList.push(book)
        })
      });
      console.log(this.constants.bookList)

   }
}

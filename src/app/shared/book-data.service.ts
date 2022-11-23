import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { map } from 'rxjs/internal/operators/map';
import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient, private constant : AppConstants) {}

  fetchBooks() {
    return this.http
      .get<Book[]>(
        'https://blinkist-angular-default-rtdb.firebaseio.com/Data.json'
      )
      .pipe(
        map((books) => {
          return books.map((book) => {
            return {
              ...book,
            };
          });
        })
      );
  }

  updateBooks(book : Book){
    const id = Number(book.id) - 1;
    const idx = this.constant.bookList.findIndex((obj => obj.id == book.id));
    this.constant.bookList[idx].isread = book.isread;
    return this.http.put(`https://blinkist-angular-default-rtdb.firebaseio.com/Data/${id}.json`, book);
  }
}

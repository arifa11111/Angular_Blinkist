import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(public constants:AppConstants) {
    console.log(constants.bookList)
   }

  tab: number = 1;

  onClick(arg0: number) {
    this.tab=arg0;
    }

    finish() {
      console.log("finished")
    }
    readNow() {
      console.log("readNow")
    }

  ngOnInit(): void {
  }

}

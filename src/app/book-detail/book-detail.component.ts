import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(public constants:AppConstants) {}

  tab: number = 1;

  onClick(index: number) {
    this.tab=index;
  }

  ngOnInit(): void {
  }

}

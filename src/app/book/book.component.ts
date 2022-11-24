import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:Book | undefined;
  @Input() index:number |undefined;
  @Input()
  btnText: string='';

  constructor(public constants:AppConstants) {}

  addToLibrary(id:number|undefined) {
      if(id!==undefined){
      this.constants.id=id-1;
      }
    }

  ngOnInit(): void {
  }

}

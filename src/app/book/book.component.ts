import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @ViewChild('piece') bookgrid: ElementRef | undefined;

  constructor( private router: Router,public constants:AppConstants) {}


  addToLibrary(id:number|undefined) {
    console.log(id)
      if(id!==undefined){
      this.constants.id=id-1;
        console.log(this.constants.bookList[id])
      }
    }



  ngOnInit(): void {
  }

}

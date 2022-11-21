import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  constructor(public constants:AppConstants) { }

  links = ['Synopsis', 'Who is it for?', 'About the author'];
  activeLink = this.links[0];


    finish() {
      console.log("finished")
    }
    readNow() {
      console.log("readNow")
    }

  ngOnInit(): void {
  }

}

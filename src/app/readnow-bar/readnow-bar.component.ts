import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-readnow-bar',
  templateUrl: './readnow-bar.component.html',
  styleUrls: ['./readnow-bar.component.css']
})
export class ReadnowBarComponent implements OnInit {


  constructor(public constants:AppConstants,private router:Router) { }

  ngOnInit(): void {
  }

}

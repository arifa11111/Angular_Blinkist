import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-finished-bar',
  templateUrl: './finished-bar.component.html',
  styleUrls: ['./finished-bar.component.css']
})
export class FinishedBarComponent implements OnInit {


  constructor(public constants:AppConstants,private router:Router) { }

  ngOnInit(): void {
  }

}

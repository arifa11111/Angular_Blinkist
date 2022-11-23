import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(public constants:AppConstants) {
  }


  Item(){
    console.log(this.constants.searchItem)
  }


  ngOnInit(): void {
  }

}

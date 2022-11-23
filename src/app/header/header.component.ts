import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public constants:AppConstants) { }

  dropDown() {
  this.constants.modal = this.constants.modal ? 0 : 1;
    }

  library() {
    console.log("library")
    }

  ngOnInit(): void {
  }

}

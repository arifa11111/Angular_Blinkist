import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
 
  constructor( private router: Router, public constants : AppConstants) {}

  navFun(i:number){
    if(i==0){
      console.log('navigate to home')
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {}
}

import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title = 'Explore by category';
  heading = ['See recently added titles', 'See popular titles'];
  row1 = [
    ['../../assets/icons/entrepreneurship.svg', 'Entrepreneurship'],
    ['../../assets/icons/science.svg', 'Science'],
    ['../../assets/icons/ecomnomics.svg', 'Economics'],
    ['../../assets/icons/corporate-culture.svg', 'Corporate Culture'],
    ['../../assets/icons/psycho.svg', 'Psychology'],
    ['../../assets/icons/leaf.svg', 'Nature & Environment'],
  ];
  row2 = [
    ['../../assets/icons/politics.svg', 'Politics'],
    ['../../assets/icons/hospital.svg', 'Health & Nutrition'],
    ['../../assets/icons/history.svg', 'History'],
    ['../../assets/icons/inspiration.svg', 'Motivation & Inspiration'],
    ['../../assets/icons/productivity.svg', 'Productivity'],
    ['../../assets/icons/success.svg', 'Career & Success'],
  ];
  row3 = [
    ['../../assets/icons/sales.svg','Marketing & Sales'],
    ['../../assets/icons/development.svg','Personal Development'],
    ['../../assets/icons/comm.svg','Communication Skills'],
    ['../../assets/icons/money.svg','Money & Investments'],
    ['../../assets/icons/relationship.svg','Sex & Relationship'],
    ['../../assets/icons/edu.svg','Education'],
  ];

  constructor( private router: Router) {}

  navFun(i:number){
    if(i==0){
    console.log('navigate to home')
    this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {}
}

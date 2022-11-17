import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title='Explore by category'
  heading = ['See recently added titles', 'See popular titles'];
  row1 = [
    'Entrepreneurship',
    'Science',
    'Economics',
    'Corporate Culture',
    'Psychology',
    'Nature & Environment',
  ];
  row2 = [
    'Politics',
    'Health & Nutrition',
    'History',
    'Motivation & Inspiration',
    'Productivity',
    'Career & Success',
  ];
  row3 = [
    'Marketing & Sales',
    'Personal Development',
    'Communication Skills',
    'Money & Investments',
    'Sex & Relationship',
    'Education',
  ];

  constructor() {}

  ngOnInit(): void {}
}

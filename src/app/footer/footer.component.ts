import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  details = [
    '../../assets/icons/logo.png',
    'Big ideas in small packages Start learnign now',
  ];
  headings = ['Editorial', 'Useful links', 'Company'];
  links1 = [
    'Book lists',
    'What is Nonfiction?',
    'What to read next?',
    'Benefits of reading',
  ];
  links2 = [
    'Pricing',
    'Blinkist business',
    'Gift cards',
    'Blinkist magaine',
    'Contact & help',
  ];
  links3 = ['About', 'Careers', 'partners', 'Code of Conduct'];
  rights ='© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies';


  constructor() {}

  ngOnInit(): void {}
}

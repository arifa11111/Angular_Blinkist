import { Injectable } from '@angular/core';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root',
})
export class AppConstants {
  readAgain = 'Read again';
  finished = 'Finished';
  libraryBtn = '+ Add to library';
  booklist = ['Trending blinks', 'Just added', 'Featured audio blinks'];
  bookDetail = [
    'Get the key ideas from',
    'Read now',
    'Finished Reading',
    'Send to kindle',
  ];
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
  rights =
    '© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies';
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
    ['../../assets/icons/sales.svg', 'Marketing & Sales'],
    ['../../assets/icons/development.svg', 'Personal Development'],
    ['../../assets/icons/comm.svg', 'Communication Skills'],
    ['../../assets/icons/money.svg', 'Money & Investments'],
    ['../../assets/icons/relationship.svg', 'Sex & Relationship'],
    ['../../assets/icons/edu.svg', 'Education'],
  ];
  sources = [
    '../../assets/icons/time.svg',
    '../../assets/icons/user.svg',
    '../../assets/icons/bigboss.svg',
  ];
  bookList:Book[]=[]
}

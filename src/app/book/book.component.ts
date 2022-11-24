import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import { BookDataService } from '../shared/book-data.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:Book={
    src: "../../assets/icons/bigboss.svg",
    cardName: "Being Boss",
    authorName: "Kathleen Shannon and Emily...",
    timeStamp: "13-minute read",
    id: 1,
    isread: false,
    reads: "",
    status: "",
    just: false,
    audio: false,
    startedBook: false,
    startedread: false
  }
  @Input() index:number |undefined;
  @Input()
  btnText: string='';

  constructor(public constants:AppConstants,private bookservice:BookDataService) {}

  addToLibrary(id:number|undefined) {
      if(id!==undefined){
      this.constants.id=id-1;
      }
    }

    onRead(book: Book) {
            this.bookservice.updateFinish(book);

    }

    onFinish(book: Book) {
      this.bookservice.updateBooks(book).subscribe();

    }

  ngOnInit(): void {
  }

}

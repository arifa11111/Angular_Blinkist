export class Book {
  [x: string]: any;
  public id: number ;
  public audio: boolean ;
  public authorName: string ;
  public cardName: string ;
  public isread: boolean ;
  public just: boolean ;
  public reads: string ;
  public src: string ;
  public startedBook: boolean ;
  public startedread: boolean ;
  public status: string;
  public timeStamp: string ;

  constructor(
    id: number ,
    audio: boolean ,
    authorName: string ,
    cardName: string ,
    isread: boolean ,
    just: boolean ,
    reads: string ,
    src: string ,
    startedBook: boolean ,
    startedread: boolean ,
    status: string ,
    timeStamp: string 
  ) {
    this.id=id;
    this.audio=audio;
    this.authorName=authorName;
    this.cardName=cardName;
    this.isread=isread;
    this.just=just;
    this.reads=reads;
    this.src=src;
    this.startedBook=startedBook;
    this.startedread=startedread;
    this.status=status;
    this.timeStamp=timeStamp;

  }
}

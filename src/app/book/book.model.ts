export class Book {
  [x: string]: any;
  public id: number | undefined;
  public audio: boolean | undefined;
  public authorName: string | undefined;
  public cardName: string | undefined;
  public isread: boolean | undefined;
  public just: boolean | undefined;
  public reads: string | undefined;
  public src: string | undefined;
  public startedBook: boolean | undefined;
  public startedread: boolean | undefined;
  public status: boolean | undefined;
  public timeStamp: string | undefined;

  constructor(
    id: number | undefined,
    audio: boolean | undefined,
    authorName: string | undefined,
    cardName: string | undefined,
    isread: boolean | undefined,
    just: boolean | undefined,
    reads: string | undefined,
    src: string | undefined,
    startedBook: boolean | undefined,
    startedread: boolean | undefined,
    status: boolean | undefined,
    timeStamp: string | undefined
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

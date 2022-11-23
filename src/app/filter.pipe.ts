import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book/book.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    const resultArray: Book[] = [];

    for (let item of value) {
      if (
        item?.cardName.toLowerCase().includes(filterString.toLowerCase()) ||
        item?.authorName.toLowerCase().includes(filterString.toLowerCase())
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

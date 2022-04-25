import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  transform(value: string): unknown {
    let array = value.split('');
    let reversedArray = array.reverse();
    let reversedString = reversedArray.join('');
    return reversedString;
  }

}

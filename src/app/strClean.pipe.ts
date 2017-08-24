
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'strClean'})

export class StrCleanPipe implements PipeTransform {
  transform(value: string): string {
    let res = '';
     for (var i = 0 ; i < value.length ; i++){
       // console.log(value.charAt(i));
       if (value.charAt(i).match(/^[a-z0-9\s]+$/i)) {
          res += value.charAt(i);
       }
     }
  return res.trim();
  }

}

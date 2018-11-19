import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHyphen'
})
export class RemoveHyphenPipe implements PipeTransform {

  transform(value: any, character?: string): any {
    let val = value as string;

    return val.replace(character, ' ')
  }
}
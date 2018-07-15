import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;
    let prepositions = ['of', 'the'];
    let words = value.split(' ');
    let filteredstring = "";
    for (var i = 0; i < words.length; i++) {
      if (i > 0 && prepositions.includes(words[i].toLocaleLowerCase())) {
        words[i] = words[i].toLocaleLowerCase();
      }
      else{ 
        words[i] = words[i].substr(0,1).toLocaleUpperCase() + words[i].substr(1).toLocaleLowerCase();
      }
    }
    return words.join(' ');
  }

}

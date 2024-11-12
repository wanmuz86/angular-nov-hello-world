import { Pipe, PipeTransform } from '@angular/core';

// The pipe name is called exclamation {{ | exclamatiom}}
@Pipe({
  name: 'exclamation',
  standalone: true
})
export class ExclamationPipe implements PipeTransform {

  // Override this function to perform the transformation
  // value refer to left part  {left | exclamation}
  // args (number) is what you passed as argument {left| 'number:3' }
  // It takes value and num as argument defaulted at 1

  transform(value: string, num:number=1): string {
    return value+'!'.repeat(num);
  }

}

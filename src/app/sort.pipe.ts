import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  // input value - type Product[]
  // : Product[] -> return type 
  transform(value: Product[]): Product[] {
    if (value){
      return value.sort((a:Product, b:Product)=>{
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()){
          return -1;
        } 
        else if (b.name.toLocaleLowerCase() < a.name.toLocaleLowerCase()){
          return 1;
        }
          return 0;
      });
    }
    return [];
    }
  }



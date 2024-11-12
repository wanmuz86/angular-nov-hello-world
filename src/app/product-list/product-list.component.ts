import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // The "" on the key not compulsary for Typescript
  // BUT it is compulsary for JSON (When you work with remote data)
  products: Product[] = [
    {
      name:"IPhone 16",
      price:6999.00
    },
    {
      name:"Webcam",
      price:100
    },
    {
      name:"Wireless Keyboard",
      price:200
    },
    {
      name:"Microphone",
      price:150
    }
  ];

}

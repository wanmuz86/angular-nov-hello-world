import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  
  // Implicit declaration
  // I don't specify the type
  // Angular/Typescript will define the type based on initial value
  message = "This is a message from Example component";

  // Explicit declaration
  // I specify the data type
  tired:boolean = true;
  scores:number[] = [30,50,70,100,80]

  sayHello(){
    alert("Hello World");
  
  }

}

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

  // Function with return type void - no return just execution
  sayHello() : void{
    alert("Hello World");
  
  }
  // Function that will take a (number), b (number) and return number
  calculate(a:number,b:number) : number {
    return a+b;
  }
}

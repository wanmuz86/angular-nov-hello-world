import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter:number = 0;
  message = "";

  increment(){
    // In Angular, to refer to the variable/property
    // add this
    this.message = "";
    this.counter++;
  }

  decrement(){
    if (this.counter == 0){
      this.message="Number cannot be less than 0"
    } else {
    this.counter--;
    }
  }

  reset(){
    this.message = "";
    this.counter = 0;
  }
}

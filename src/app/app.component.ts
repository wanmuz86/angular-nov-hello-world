import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { HeaderComponent } from "./header/header.component";
import { CounterComponent } from "./counter/counter.component";
import { ChildComponent } from "./child/child.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExclamationPipe } from './exclamation.pipe';
import { ProductListComponent } from "./product-list/product-list.component";
// Decorator - Angular Notation 
@Component({
  // How to call/ bring out this component
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, HeaderComponent, CounterComponent, ChildComponent, CommonModule, FormsModule, ExclamationPipe, ProductListComponent],
  // The UI
  templateUrl: './app.component.html',
  // The Styling
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // Declaring variable  in Angular/Typescript
 name = "Muzaffar";
 age = 30;
 profession = "trainer";
 message = "Hello from parent"
 messageFromChild = "";


 /// Pipe lab
 title = "Angular Pipe Example";
 currentDate = new Date();
 amount = 1234.56;
 text = 'Angular Pipes are AWESOME!!'


// Function that will be invoked when there is a message passed from child to parent
 receiveMessage(message:string){
// I will assign the message passed to messageFromChild
// With that we are able to bring out the value of message to the UI using messageFromChild
  this.messageFromChild = message;

}

ngOnInit(): void {
  console.log("Page successfully loaded");
}
}

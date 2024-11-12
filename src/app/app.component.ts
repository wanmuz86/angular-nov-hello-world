import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { HeaderComponent } from "./header/header.component";
import { CounterComponent } from "./counter/counter.component";
import { ChildComponent } from "./child/child.component";
import { CommonModule } from '@angular/common';

// Decorator - Angular Notation 
@Component({
  // How to call/ bring out this component
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, HeaderComponent, CounterComponent, ChildComponent, CommonModule],
  // The UI
  templateUrl: './app.component.html',
  // The Styling
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Declaring variable  in Angular/Typescript
 name = "Muzaffar";
 age = 30;
 profession = "trainer";
 message = "Hello from parent"
 messageFromChild = "";

// Function that will be invoked when there is a message passed from child to parent
 receiveMessage(message:string){
// I will assign the message passed to messageFromChild
// With that we are able to bring out the value of message to the UI using messageFromChild
  this.messageFromChild = message;

}
}

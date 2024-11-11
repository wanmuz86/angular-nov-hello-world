import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { HeaderComponent } from "./header/header.component";
import { CounterComponent } from "./counter/counter.component";

// Decorator - Angular Notation 
@Component({
  // How to call/ bring out this component
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, HeaderComponent, CounterComponent],
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
}

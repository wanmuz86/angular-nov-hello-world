import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message:string = ''; // Expecting message to be passed from parent using @Input
  
  // The message to parent will be passed here
  // Later we will addd [messageEvent] property on the component declartion <app-child [messageEvent]>
  @Output() messageEvent = new EventEmitter<string>();

  // Function to invoke sending Property/ message to parent
  // This function will be called from a Button for eg
  sendMessageToParent(){
    this.messageEvent.emit('Hello From Child Component')
  }



}

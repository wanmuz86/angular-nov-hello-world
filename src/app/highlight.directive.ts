import { HostListener } from "@angular/core";
import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

// ElementRef - refer to the HTML element calling the directive
// <p [appHighlight]> -> the p that's calling the directing
// Renderer - A class to help us modify the element 
// OnInit - to perform the change upon Initilziation of the element
@Directive({
  // THis is my directive/custom property name 
  // later i will use appHighlight
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{
  // Dependency Injection
  // If we want to use a "Service", we will define it like this

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) { }
  @Input() appHighlight = 'yellow';

  // THis is where I am going to customize the elemnt
  ngOnInit(): void {
    //when the directive is used, change the colour of el to yellow
    // this.renderer - to help change the style
    // this.el -> p
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',this.appHighlight);
  }


  // When the mouse entered the element, highlight to blue
  @HostListener('mouseenter') mouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',this.appHighlight);
  }

  // Mouse leave, remove the highlight
  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','');
  }

  
}

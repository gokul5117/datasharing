import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {

   }

   @HostBinding('style.color')background='black';

   @HostListener('mouseenter') mouseenter(){
    this.background='red'
   }
   
   @HostListener('mouseleave') mouseleave(){
    this.background='green'
   }

}

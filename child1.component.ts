import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor() { }



 @Input() age:any;
 
 @Output() senddata:EventEmitter<any>=new EventEmitter<any>();
 
 
 ngOnInit(): void {


 

  
}


emit(){
  this.senddata.emit(this.age)
}


hello(){
  let hello="hello from child1 component"
  console.log("hello from child1 component")
}
}

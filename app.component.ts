import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datasharing';

  customer:any=[
    { name:'ranjith',age:15,city:'chennai',position:'developer'},
    { name:'rajesh',age:20,city:'mumbai',position:'designer'},
    { name:'sathish',age:22,city:'bengaluru',position:'tester'},
    { name:'kumar',age:24,city:'kolkata',position:'manager'},
    { name:'prem',age:30,city:'hyderabad',position:'backend developer'},
  ]

  temp:any;
  parent:any="";
  
  
  @ViewChild(Child1Component) childcomp: Child1Component = new Child1Component; 
  

  
  constructor(){this.getage()}
    getage(){
      this.temp = this.customer.filter((data:any)=> data.age <= 24);
      





    }

    receiveddata(data:any){
      console.log(data)
      this.parent=data;
     

    }
setsession(){
  sessionStorage.setItem('name','gokul')
}

getsession(){
  sessionStorage.getItem('name')
}

setlocal(){
  localStorage.setItem('ID','5')
}

getlocal(){
  localStorage.getItem('ID')
}

// remove(){
//   localStorage.clear();
// }



  
}

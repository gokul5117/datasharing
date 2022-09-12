import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Employeedetails } from './employeedetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'httprequest';

  emptable:any=[];

  constructor(private http:HttpClient){ 

  }

  

employeeform:any;
i:any;
editmode:boolean=false;
currentID:any


  ngOnInit(){

    this.getempdetails();
    this.employeeform = new FormGroup({

     name: new FormControl('',[Validators.required]),
     id: new FormControl('',[Validators.required]),
     dob: new FormControl('',[Validators.required]),
     position: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.email,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
     address: new FormControl('',[Validators.required])

    })


}

onsubmit(empdata:{name:string,id:string,email:string,address:string}){

if(!this.editmode){

  let headers= new HttpHeaders({'myheader': 'employeedetails'});
  this.http.post<{name:string}>('https://angular-2aef9-default-rtdb.firebaseio.com/empdetails.json',empdata,{headers:headers})
  .subscribe((res)=>{

  });

}
else{
  this.update(this.currentID,empdata)
}

 

}


private getempdetails(){

  this.http.get<{[key:string]:Employeedetails}>('https://angular-2aef9-default-rtdb.firebaseio.com/empdetails.json')
  .pipe(map((res:{[key:string]:Employeedetails})=>{
    let details=[];
    for(let key in res){
      if(res.hasOwnProperty(key)){
        details.push({...res[key],index:key})
      }
  }
    return details;

  }))
  .subscribe((details)=>{
     console.log(details)
     this.emptable=details;
  })

}

delete(index:string){
  this.http.delete('https://angular-2aef9-default-rtdb.firebaseio.com/empdetails/'+index+'.json')
  .subscribe();

}

edit(index:any){

  let editdetail=this.emptable.find((data)=>{
    this.currentID=index
    return data.index===index
   });
   this.employeeform.patchValue(
    editdetail
   )
  console.log(editdetail)
  this.editmode=true

}



  update(index:string,value:any){
    this.http.put('https://angular-2aef9-default-rtdb.firebaseio.com/empdetails/'+index+'.json',value)
    .subscribe()
}



}

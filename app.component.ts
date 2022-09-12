import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactiveform';

  employeeform: any;
  employeedetails: any = []
  k: any;
  editmode: boolean = false;

  ngOnInit() {
    this.employeeform = new FormGroup({

      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      address: new FormControl('', [Validators.required])

    })


  }

  onsubmit() {
    console.log(this.employeeform);

    if (!this.editmode) {
      this.employeedetails.push(this.employeeform.value);

    }
    else {
      this.update(this.employeeform, this.k)
    }


    this.employeeform.reset();
  }


  OnEditClicked(data: any, index: any) {

    this.k = index;
    this.employeeform.patchValue({


      id: data.id,
      name: data.name,
      position: data.position,
      address: data.address


    })
    this.editmode = true;
  }

  OnDeleteClicked(data: any) {
    this.employeedetails.forEach((value: string, index: any) => {
      if (value == data) {
        this.employeedetails.splice(index, 1)
      }
    })

  }

  update(employeeform: any, k: any) {
    this.employeedetails.splice(k, 1, Object.assign({}, this.employeeform.value))
    //console.log(k);
    this.editmode = false;
  }


  get employeecontrols() {
    return this.employeeform.controls;
  }





}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upadte-dashboard',
  templateUrl: './upadte-dashboard.component.html',
  styleUrls: ['./upadte-dashboard.component.css']
})
export class UpadteDashboardComponent implements OnInit {
  updatedashboard: FormGroup;
  formDetails: any;
   httpOptions= {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'User-Agent': 'insomnia/2020.3.3',
      'Host': 'ltrx.herokuapp.com',
      'Accept': '*/*',
      'Content-Length':'1',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjoiNWY1MjE1NWFlMDM5MWIwMDE3ZDhkOTc3IiwiZXhwIjoxNTk5ODE5ODA4LCJpYXQiOjE1OTkyMTUwMDh9.IdvApTIzuFAWXjDPEgAi1yklj0z0dCwtPoP0_nj5wfI' 
  })
};
  newTokendash: any;

  constructor(private userservice: UserService,private fbuilder: FormBuilder) { this.updatedashboard = this.fbuilder.group({
    fname:   ['', [Validators.required]],
    lname:   ['', [Validators.required]],
    Country:   ['', [Validators.required]],
    Bio:   ['', [Validators.required]],
    Username:   ['', [Validators.required]],
    Email:   ['', [Validators.required, Validators.email]]
  }); }

  ngOnInit(): void {
  }

  Onsave(){
   
    this.formDetails = {
      fname: this.updatedashboard.get('fname').value,
    lname: this.updatedashboard.get('lname').value,
    Country: this.updatedashboard.get('Country').value,
    Bio: this.updatedashboard.get('Bio').value,
    Username: this.updatedashboard.get('Username').value,
    Email:   this.updatedashboard.get('Email').value  }

    console.log(this.formDetails,this.updatedashboard.get('fname').value)
    this.userservice.saveDetails(this.httpOptions).subscribe(data =>{
      // console.log(data);
    },(error => { 
      this.handleError(error);
    }))
  }

  getNewTokendash(){
    this.userservice.refreshtoken().subscribe(data => {
      this.newTokendash = data.refreshToken;
      localStorage.setItem('token',this.newTokendash)
    })
  }

  handleError(error){
    // console.log("sdfdsfdsf",error)
    if(error.error.status == 400 || error.error.status == 401){
      this.getNewTokendash();
    }
  }

}

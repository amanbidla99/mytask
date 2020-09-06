import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

   
  userDetails = {
    fname: "Vivek",
      lname: "Kumar",
      Country: "India",
      Bio:"xyz",
      Username: "Aman",
      Email: "kumarvivke20@gmail.com"
  };
  dashboard: FormGroup;
  latestToken: any;


  constructor(private userservice: UserService,private fbuilder: FormBuilder,private router: Router) {
    this.dashboard = this.fbuilder.group({
      fname:   ['', [Validators.required]],
      lname:   ['', [Validators.required]],
      Country:   ['', [Validators.required]],
      Bio:   ['', [Validators.required]],
      Username:   ['', [Validators.required]],
      Email:   ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {
    
    // this.userservice.getUser(this.httpOptions).subscribe(data => {
    //   this.userDetails = data;
    //   console.log(data);
    // }),(error => {console.log(error);})
  }

  navigate(){
    this.router.navigate(['/updatedetails']);
  }

  getlatestToken(){
    this.userservice.refreshtoken().subscribe(data => {
      this.latestToken = data.refreshToken;
      localStorage.setItem('token',this.latestToken)
    })
  }

  handleError(error){
    if(error.error.status == 401 && error.error.code == 'TOKEN_EXPIRED'){
      this.getlatestToken();
    }
  }

}

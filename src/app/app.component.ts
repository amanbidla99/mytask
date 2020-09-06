import { UserService } from './../../../mytask/src/app/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // username: string;
  // password: string;
  // myform: FormGroup;
  // credentials: any;

  // constructor(private fbuilder: FormBuilder, private userservice: UserService, private router: Router){
  //   this.myform = this.fbuilder.group({
  //     username: new FormControl(),
  //     password: new FormControl()
  //   });
  // }

  // ngOnInit(){
  // //   let httpOptions= {
  // //     headers: new HttpHeaders({
  // //       'Content-Type':'application/x-www-form-urlencoded',
  // //       'User-Agent': 'insomnia/2020.3.3',
  // //       'Host': 'ltrx.herokuapp.com',
  // //       'Accept': '*/*',
  // //       'Content-Length':'61'
  // //   })
  // // };
  // // this.userservice.userverification(httpOptions)
  // // .subscribe(data => {
  // //   this.credentials = data;
  // //   })
  // // ,(error => {console.log(error);})
  // }
  

  

  // fsubmit(){
  //   this.router.navigate(['/dashboard']);
  // //   let httpOptions= {
  // //     headers: new HttpHeaders({
  // //       'Content-Type':'application/x-www-form-urlencoded',
  // //       'User-Agent': 'insomnia/2020.3.3',
  // //       'Host': 'ltrx.herokuapp.com',
  // //       'Accept': '*/*',
  // //       'Content-Length':'50',
  // //       'Authorization': 'Basic' + btoa('tetstuser@mailinator.com:hello123') 
  // //   })
  // // };
  // //   //console.log(this.myform.get('username').value,this.myform.get('password').value)
  // //   this.userservice.userLogin(this.myform.get('username').value,this.myform.get('password').value,httpOptions)
  // //     .subscribe(data => {
  // //       this.credentials = data;
  // //       })
  // //     ,(error => {console.log(error);})
  //   }

  }
 

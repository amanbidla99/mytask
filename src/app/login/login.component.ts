import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  myform: FormGroup;
  credentials: any;
  newToken: any;

  constructor(private fbuilder: FormBuilder, private userservice: UserService, private router: Router) { 
    this.myform = this.fbuilder.group({
      username:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required]]
    });
  }

   httpOptions= {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'User-Agent': 'insomnia/2020.3.3',
      'Host': 'ltrx.herokuapp.com',
      'Accept': '*/*',
      'Content-Length':'50',
      'Authorization': 'Basic' + btoa('tetstuser@mailinator.com:hello123') 
  })
};

  ngOnInit(): void {
    //localStorage.removeItem('token');
     //   let httpOptions= {
  //     headers: new HttpHeaders({
  //       'Content-Type':'application/x-www-form-urlencoded',
  //       'User-Agent': 'insomnia/2020.3.3',
  //       'Host': 'ltrx.herokuapp.com',
  //       'Accept': '*/*',
  //       'Content-Length':'61'
  //   })
  // };
  // this.userservice.userverification(httpOptions)
  // .subscribe(data => {
  //   this.credentials = data;
  //   })
  // ,(error => {console.log(error);})
  }
   

  

  fsubmit(){
  let  uname = this.myform.get('username').value;
  let  upasword = this.myform.get('password').value;
  //   this.userservice.userreg(this.myform.get('username').value,this.myform.get('password').value,this.httpOptions)
  //     .subscribe(data => {
  //       this.credentials = data;
  //       console.log(this.credentials.hashToken);
  //       localStorage.setItem('hashToken',this.credentials.hashToken);
  //       if(this.credentials.hashToken){
  //         this.router.navigate(['/dashboard']);
  //       }else {
  //         this.router.navigate(['']);
  //       }
  //       })
  //     ,(error => {console.log(error);})
  this.userservice.userverification(this.httpOptions)
  .subscribe(data => {
    this.credentials = data;
    // console.log("data",data)
    },(error => {
      this.handleError(error);
      // console.log("error1",error);
      
    }))
  


  this.userservice.userLogin(uname,upasword,this.httpOptions)
  .subscribe(data => {
    this.credentials = data;
    // console.log("this.credentials",this.credentials.token)
    localStorage.setItem('token',this.credentials.token);
    if(this.credentials.token){
            this.router.navigate(['/dashboard']);
          }else {
            this.router.navigate(['']);
          }
    // console.log("data",data.refreshToken)
    },(error => {
      this.handleError(error);
      // console.log("error2",error.error.status == 400);
    }))
  
    }


    getNewToken(){
      this.userservice.refreshtoken().subscribe(data => {
        this.newToken = data.refreshToken;
        localStorage.setItem('token',this.newToken)
      })
    }

    handleError(error){
      if(error.error.status == 401 && error.error.code){
        this.getNewToken();
      }
    }
}

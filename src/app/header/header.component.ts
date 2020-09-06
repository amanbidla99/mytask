import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  first: string;
  last: string;

  constructor(private router: Router) { }

  userDetails = {
    fname: "Vivek",
      lname: "Kumar",
      Country: "India",
      Bio:"xyz",
      Username: "Aman",
      Email: "kumarvivke20@gmail.com"
  };

  ngOnInit(): void {
  this.first =  this.userDetails.fname.slice(0,1) ; 
  this.last = this.userDetails.lname.slice(0,1) ;
  }

  logout(){
    this.router.navigate(['login']);
  }

}

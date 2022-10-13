import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  adminRef = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    home_address: new FormControl(),
    contact: new FormControl(),
    gender: new FormControl(),
    password: new FormControl(),
  })

  errorMsg: string = "";

  constructor(public as:AdminService, public router:Router) { }

  ngOnInit(): void {
  }

  adminSignUp() {
    let admin = this.adminRef.value;
    this.as.adminSignUp(admin).subscribe({
      next:(result:any) => this.errorMsg=result,
      error:(error:any) => this.errorMsg=error,
      complete:()=>console.log("completed")
    })
  }

}

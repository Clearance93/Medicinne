import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public totalItem: number = 0;

  constructor(private cart:CartService, public router:Router) { }

  ngOnInit(): void {
    this.cart.getMedicine().subscribe(res => {
      this.totalItem = res.length;
    })
  }

  logout() {
    sessionStorage.removeItem("userInfo");
    this.router.navigate(["/login"]);
  }

}

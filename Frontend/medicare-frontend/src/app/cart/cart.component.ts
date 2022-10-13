import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {


  public medicine: any = [];
  public grandTotal: number = 0;

  dtOptions: DataTables.Settings = {};
  dttrigger: Subject<any> = new Subject<any>();

  constructor(public cart:CartService) { }

  ngOnDestroy(): void {
    this.dttrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.cart.getMedicine().subscribe(res => {
      this.medicine = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
    
  }

  removeItem(medicine: any) {
      this.cart.removecartItem(medicine);
  }

  emptyCart() {
    this.cart.removeAllCart();
  }

}



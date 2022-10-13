import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartListItem: any = [];
  public medicineList = new BehaviorSubject<any>([])


  constructor() { }

  getMedicine(){
    return this.medicineList.asObservable();
  }

  addToCart(medicine: any) {
    this.cartListItem.push(medicine);
    this.medicineList.next(this.cartListItem);
    this.getTotalPrice();
    console.log(this.cartListItem)
  }

  getTotalPrice(): number {
    let grandTotal = 0
    this.cartListItem.map((a:any) => {
      grandTotal += a.total
    })
    return grandTotal;
  }

  removecartItem(medicine: any) {
    this.cartListItem.map((a:any, index:any) => {
      if(medicine.is === a.id){this.cartListItem.splice(index, 1)};
    })
    this.medicineList.next(this.cartListItem);
  }

  removeAllCart() {
    this.cartListItem = []
    this.medicineList.next(this.cartListItem);
  }
}

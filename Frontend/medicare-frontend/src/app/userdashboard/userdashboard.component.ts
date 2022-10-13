import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  medicines:Array<Medicine>=[];
  flag:boolean = false;
  mid:number =0;
  price:number =0;
  quantity:number =0;
  mname:string ="";
  image:string ="";
  description:string="";

  public totalItem: number = 0;
  public medicineList: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  userName:string="";
  constructor(public router:Router, public ms:MedicineService, public cart:CartService) { }

  ngOnInit(): void {

    this.ms.getAllMedicineDetails().subscribe(res => {
      this.medicineList = res;

      this.medicineList.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })

    this.cart.getMedicine().subscribe(res => {
      this.totalItem = res.length;
    })

    this.dtTrigger.unsubscribe();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
    this.ms.getAllMedicineDetails().subscribe({
      next:(result:any)=>this.medicines=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    });
    
    let obj = sessionStorage.getItem("userInfo");
    
    if(obj!=null){
      this.userName=obj;
    }

  }

 

  addToCart(mm: any){
    this.cart.addToCart(mm);
  }

}

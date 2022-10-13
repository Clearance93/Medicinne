import { Component, OnDestroy, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-medicine-retrieve',
  templateUrl: './admin-medicine-retrieve.component.html',
  styleUrls: ['./admin-medicine-retrieve.component.css']
})
export class AdminMedicineRetrieveComponent implements OnInit, OnDestroy {
  medicines:Array<Medicine>=[];
  flag:boolean = false;
  mid:number =0;
  price:number =0;
  quantity:number =0;
  mname:string ="";
  image:string ="";

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private ms:MedicineService) { }

  ngOnDestroy(): void {
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
  }

  ngOnInit(): void {
    this.loadAllMedicineDetails();
  }

  loadAllMedicineDetails(){
    this.ms.getAllMedicineDetails().subscribe({
      next:(result:any)=>this.medicines=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    });
  }
  
  deleteMedicine(mid:any){
    //console.log(mid);
    this.ms.deleteMedicineDetals(mid).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
        this.loadAllMedicineDetails()
      }
    })
  }

  updateMedicine(mm:any){
    this.flag=true;
    this.mid = mm.mid;
    console.log(this.mid)
    this.price=mm.price;
    this.quantity=mm.quantity;
  }

  updateMedicineInfo(){
    let mm = {mid:this.mid,quantity:this.quantity,price:this.price};
    this.ms.updateMedicineDetails(mm).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
        this.loadAllMedicineDetails()
        this.flag=false;
      }
    })
  }
}

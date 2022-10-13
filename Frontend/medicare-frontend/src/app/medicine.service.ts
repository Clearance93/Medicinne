import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Medicine } from './medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  baseURL:string="http://localhost:8080/medicine";
  constructor(private http:HttpClient) { }
  storeMedicineDetails(medicine:any):Observable<string> {
    return this.http.post(this.baseURL+"/store",medicine,{responseType:"text"});
  }
  updateMedicineDetails(medicine:any):Observable<string> {
    return this.http.put(this.baseURL+"/update",medicine,{responseType:"text"});
  }
  getAllMedicineDetails():Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.baseURL+"/findAllMedicine").pipe(map((res:any) => {
      return res;
    }));
  }
  findMedicineInfo(mid:any):Observable<string>{
    return this.http.get(this.baseURL+"/findMedicine/"+mid,{responseType:"text"});
  }

  deleteMedicineDetals(mid:any):Observable<string> {
    return this.http.delete(this.baseURL+"/deleteMedicine/"+mid,{responseType:"text"});
  }

}

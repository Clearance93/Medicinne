import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMedicineRetrieveComponent } from './admin-medicine-retrieve/admin-medicine-retrieve.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"adminhome",component:AdmindashboardComponent},
  {path:"userhome",component:UserdashboardComponent},
  {path:"login/signUp",component:SignupComponent},
  {path:"addMedicine",component:MedicineAddComponent},
  {path:"adminRetrieveMedicine",component:AdminMedicineRetrieveComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  { path: 'admin', component:AdminComponent },
  { path: 'adminlogin', component:AdminloginComponent },
  { path: 'cart', component:CartComponent },
  { path: 'checkout', component:CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

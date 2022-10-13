import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { AdminMedicineRetrieveComponent } from './admin-medicine-retrieve/admin-medicine-retrieve.component';
import { UserMedicineRetrieveComponent } from './user-medicine-retrieve/user-medicine-retrieve.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminComponent } from './admin/admin.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    MedicineAddComponent,
    AdminMedicineRetrieveComponent,
    UserMedicineRetrieveComponent,
    AdminComponent,
    AdminSignUpComponent,
    AdminloginComponent,
    CartComponent,
    MainComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

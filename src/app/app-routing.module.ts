import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';

const routes: Routes = [
{ path: 'customerForm', component: CustomerFormComponent },
{ path: 'main', component: MainPageComponent },
{ path: 'searchCustomer', component: SearchCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

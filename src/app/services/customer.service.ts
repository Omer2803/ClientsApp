import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl: String = 'https://localhost:44390/Customers/';
  private customer = new BehaviorSubject<Customer>(null);
  selectedCustomer = this.customer.asObservable();

  constructor(private http: HttpClient) { }

  updateCustomer(customer: Customer) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/UpdateCustomer', JSON.stringify(customer), { headers: headers });
  }

  addNewCustomer(customer: Customer) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/AddNewCustomer', JSON.stringify(customer), { headers: headers });
  }

  searchCustomer(filterBy, filterValue) {
    return this.http.get(this.baseUrl + 'SearchCustomer?filterBy=' + filterBy + '&filterValue=' + filterValue);
  }

  editCustomer(customer) {
    this.customer.next(customer);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  searchCustomerForm: FormGroup;
  filterBy: string;
  submitted: Boolean;
  filteredList: Customer[] = [];

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.editCustomer(null);
    this.filterBy = 'id';
    this.searchCustomerForm = this.formBuilder.group({
      filterValue: ['', Validators.required]
    })
  }

  searchCustomer(searchFormValue) {
    this.submitted = true;
    if (this.searchCustomerForm.invalid) {
      return;
    }

    this.customerService.searchCustomer(this.filterBy, searchFormValue.filterValue).subscribe((filteredList: Customer[]) => {
      this.filteredList = filteredList;
    })
  }

  onSelectChange(filterBy) {
    this.filterBy = filterBy;
  }

  editUser(customer) {
    this.customerService.editCustomer(customer);
    this.router.navigate(['/customerForm']);
  }

}

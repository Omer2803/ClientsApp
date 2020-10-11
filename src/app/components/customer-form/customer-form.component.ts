import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;
  submitted: Boolean;
  customerSelected: Customer;
  isUpdate: Boolean;
  constructor(private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.customerService.selectedCustomer.subscribe(customer => {
      if (customer) {
        this.isUpdate = true;
      }
      this.customerSelected = customer;
      let date = this.datePipe.transform(this.customerSelected?.DateBirth, 'yyyy-MM-dd');
      this.customerForm = this.formBuilder.group({
        identity: [this.customerSelected?.Identity, Validators.required],
        dateBirth: [date, new FormControl()],
        firstName: [this.customerSelected?.FirstName, new FormControl()],
        lastName: [this.customerSelected?.LastName, new FormControl()],
        phoneNumber: [this.customerSelected?.PhoneNumber, Validators.required],
        remarks: [this.customerSelected?.Remarks, new FormControl()]
      })
    });
  }

  onSubmit(customer) {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    if (this.isUpdate) {
      this.customerService.updateCustomer(customer).subscribe((res: Customer) => {
      }, error => console.log('cannot update this customer'));
    }
    else {
      this.customerService.addNewCustomer(customer,).subscribe((res: Customer) => {
      }, error => console.log('This identity already exsits'));
    }
  }

}

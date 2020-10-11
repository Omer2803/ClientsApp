import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('main') main;
  @ViewChild('customerForm') customerForm;
  @ViewChild('searchCustomer') searchCustomer;

constructor(private router:Router){}

  ngOnInit(): void {
  }
  activateButton(button){
    this.main.nativeElement.style.color = 'Black';
    this.customerForm.nativeElement.style.color = 'Black';
    this.searchCustomer.nativeElement.style.color = 'Black';
    
    if (button == 'main') {
      debugger;
      this.main.nativeElement.style.color = 'Green';
      this.router.navigate(['/main']);
    } else if (button == 'customerForm') {
      debugger;
      this.customerForm.nativeElement.style.color = 'Green';
      this.router.navigate(['/customerForm']);
    } else{
      debugger;
      this.searchCustomer.nativeElement.style.color = 'Green';
      this.router.navigate(['/searchCustomer']);
    }
  }

}

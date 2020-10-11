import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  title:string;
  constructor(private translateService:TranslateService,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.editCustomer(null);
    this.translateService.getTitle().subscribe((res:any)=>{
      this.title = res.title;
    })
  }

}

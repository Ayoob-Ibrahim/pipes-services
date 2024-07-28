import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataAPIServiceService } from 'src/app/service/data-api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  list: any;
  percentage: any;
  constructor(private dataService: DataAPIServiceService, private router: Router) {
    this.mockableData()
  }
  getData() {
    this.dataService.getDataService().subscribe(data => {
      console.log(data);
    })
  }

  mockableData() {
    this.dataService.mockableAPI().subscribe(data => {
      this.list = data;
      console.log(this.list, "list values")
    })
  }

  test() {
    console.log(this.percentage)
  }

  navi() {
    console.log("nav works");
    this.router.navigate(['filterdata'])
  }
}

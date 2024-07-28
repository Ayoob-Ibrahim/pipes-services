import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataAPIServiceService } from 'src/app/service/data-api-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  dataJSON: any;
  constructor(private router: Router, private dataService: DataAPIServiceService) {
    //this.mockableAPI();
    this.getData()
  }

  navigation() {
    console.log("nav");
    this.router.navigate(['table']);
  }

  mockableAPI() {
    this.dataService.mockableAPI().subscribe(data => {
      console.log(data, "mockabel api data test")
    })
  }

  getData() {
    console.log("get data");
    this.dataService.getJSON().subscribe(data => {
      this.dataJSON = data;
      console.log(this.dataJSON, "json function")
    })
  }

  filterTrue() {
    console.log("filter works");
    var temp = this.dataJSON.filter((value: { subscribe: string; }) => value.subscribe == "true")
    console.log(temp, "temp value")
  }
  filterFalse() {
    console.log("filter works");
    var temp = this.dataJSON.filter((value: { subscribe: string; }) => value.subscribe == "false")
    console.log(temp, "temp value")
  }

  formArray() {
    this.router.navigate(['form']);
  }
  media() {
    this.router.navigate(['media']);
  }

}

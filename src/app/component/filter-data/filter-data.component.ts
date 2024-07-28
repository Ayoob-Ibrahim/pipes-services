import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss']
})
export class FilterDataComponent {
  filteredString: string = "";
  inputtext: string = "";
  users = [{
    name: "test-21", joineddate: new Date(15, 2, 2014)
  }, {
    name: "test-22", joineddate: new Date(15, 2, 2016)
  }, {
    name: "test-23", joineddate: new Date(15, 2, 2018)
  }, {
    name: "test-24", joineddate: new Date(15, 2, 2020)
  },
  {
    name: "mohammad", age: '23', gender: 'male',
  },
  {
    name: "fathima", age: '55', gender: 'female',
  },
  {
    name: "Ayoob", age: '18', gender: 'male',
  },
  {
    array: ["Test Content 21 21 21"]
  }
  ]
};


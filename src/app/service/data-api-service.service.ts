import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DataAPIServiceService {

  constructor(private http: HttpClient) { }


  getDataService() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
  }

  mockableAPI() {
    let url = 'http://demo1278123.mockable.io/';
    return this.http.get(url)
    // .catch((error)=>{
    //   return Observable.throw(error);
      
    // })
  }

  getJSON(){
    return this.http.get('http://demo9464393.mockable.io')
  }
}

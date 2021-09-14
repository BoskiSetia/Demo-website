import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './Shared-Component/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  httpOptions = {
   
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // 'Access-Control-Allow-Headers': 'Content-Type'
    })
  };

  constructor(public http: HttpClient) { }


  getData(){
    var url = "https://dev.fabcomms.co.uk/dynamic_routemap/api/index.php?page=settings&action=load";
    return this.http.get(url,this.httpOptions);
  }
}

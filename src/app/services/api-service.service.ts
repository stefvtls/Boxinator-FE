import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private readonly http: HttpClient) { }

  getRequest(endpoint: string) {
    const { apiURL } =  environment;
    const url = `${apiURL}${endpoint}`
    let observable = this.http.get(url);
    observable.subscribe((response)=> console.log(response));
  }
}

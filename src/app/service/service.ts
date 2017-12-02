import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class DataService {

 private http: Http;

constructor(http: Http) {
    this.http = http;
  }

  public httpGet(_apiUrl) {
    return this.http.get(_apiUrl).map((res: Response) => res);
  }
  
  


}
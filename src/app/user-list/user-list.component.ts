import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {HttpModule} from '@angular/http';


import { DataService } from "../service/service";
import { AppConfig } from "../config/config";
import { CardDetailComponent } from "../card-detail/card-detail.component"
  
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[DataService,AppConfig,HttpModule,CardDetailComponent]
})
export class UserListComponent implements OnInit {
  private _dataService: DataService;
  private config: AppConfig;
  userArray:any;
  selectedVal:any
  
    constructor(_dataService: DataService,config: AppConfig,private cardDetailVar:CardDetailComponent) {
      this._dataService = _dataService;
      this.config = config;
      
     }

  ngOnInit() {
    this.fetchUserData();
  }


  public fetchUserData(){
    
      this._dataService.httpGet(this.config.URLS.sample_json).subscribe(
          data => {
            let responseJson = data.json();
            console.log("date scratch", responseJson);   
            this.userArray=responseJson;   
          },
          error => {       
            return false;
          }
        );
        }

       

}

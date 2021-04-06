import { Component, OnInit } from '@angular/core';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-share-operator',
  templateUrl: './share-operator.component.html',
  styleUrls: ['./share-operator.component.css']
})
export class ShareOperatorComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  mydata: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const getRequest = this.getUserDetails(); //Return observable - async data from network

    this.toggleSpinnerView(getRequest);

    getRequest.subscribe(value => {
      this.mydata = value;
    });

  }

  toggleSpinnerView(observable : Observable<any> ){
    this.blockUI.start("Initiated Loading Spinner");

    observable.subscribe(value => {
      setTimeout(()=>{
        this.blockUI.stop();
      }, 5000)
      }
    );
  }
  // getUserDetails() : Observable<any>{
  //   return this.httpClient.get("https://reqres.in/api/users/3");
  // }

  //shared version
  getUserDetails() : Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users/3").pipe(
      share()
    );
  }
}

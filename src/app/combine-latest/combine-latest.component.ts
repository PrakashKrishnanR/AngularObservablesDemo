import { Component, OnInit } from '@angular/core';
import {combineLatest, forkJoin, Observable, zip} from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  myObservable = Observable.create((observer) => {
    setTimeout(() => observer.next('New value from the stream1'), 900);
    // setTimeout(() => observer.next('324 from the stream1'), 1200);
    setTimeout(() => observer.complete('Observable completed'), 2000);
  });
  myObservable2 = Observable.create((observer) => {
    setTimeout(() => observer.next('New value from the stream2'), 500);
    // setTimeout(() => observer.error('error'), 600);
    setTimeout(() => observer.complete('Observable completed'), 2000);
  });

  constructor() { }

  ngOnInit() {
    const combineLatestOperator = combineLatest(this.myObservable,this.myObservable2);
    combineLatestOperator.subscribe(value => {
      console.log(value);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap, delay, map, mergeMap, switchMap} from 'rxjs/operators';
import {from, fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.css']
})
export class MergeMapOperatorComponent implements OnInit {
  url = 'https://reqres.in/api/users/';
  user:any;
  combinedValue='';
  showDetails = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const hotObservable = from([1,2,3,4]);
    const remainder = from([1,2,3,4]);
    const newmerator = from(['a','b','c','d']);

    remainder.pipe(
      mergeMap(val1 =>
      newmerator.pipe(map(val2 => {
        return val1+val2;
      })))
    ).subscribe(value => {
      this.combinedValue += value;
      }
    );




    hotObservable.pipe(
      mergeMap( (val:any) => {
        return this.http.get(this.url+val);
      })
    ).subscribe((value:any) => {
      this.user = value.data;
      this.showDetails=true;
    })


    const saveLocation = location => {
      return of(location).pipe(delay(location.x));
    };

    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        mergeMap((e: MouseEvent) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          });
        })
      )
      // Saved! {x: 98, y: 170, ...}
      .subscribe(r => console.log('Saved!', r));

  }

}

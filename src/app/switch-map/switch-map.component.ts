import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, of, throwError} from 'rxjs';
import {catchError, delay, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {error, isNullOrUndefined} from 'util';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
  constructor(private http: HttpClient) { }
  mydata: any;
  searchTerm: any;
  displayValue: any;
  @ViewChild('myInput') typeAhead : ElementRef;
  ngOnInit() {
    const postObservable = of('Post');
    const commentObservable = of('Commmet');

    // const combined = postObservable.pipe(
    //   map(value => {
    //     console.log('postObservable', value);
    //     return commentObservable.pipe(
    //       tap( newvalue => {
    //         console.log('inside comment Observable', newvalue);
    //       })
    //     );
    //   })
    // );

    // const combined = postObservable.pipe(
    //   switchMap (value => {
    //     return commentObservable.pipe( tap (newValue => {
    //       console.log('inside value',value);
    //       console.log('inside New Value',newValue);
    //     }));
    //   }));

    // combined.subscribe(value => {
    //   this.mydata = value;
    // });


    const myInputObservable = fromEvent<KeyboardEvent>(this.typeAhead.nativeElement,
      'keyup');

    myInputObservable.pipe(
      switchMap( value => this.getEmployeeDetails(this.typeAhead.nativeElement.value)),
      catchError( (err, caught)=> {
        console.log('handling and logging error',err);
        return caught;
      })
    ).subscribe(res =>{
        this.displayValue = res;
      });
  }


  getEmployeeDetails(value : any) :  Observable<any>{
    if(value == 111){
      return  throwError(value);
    }
    return this.http.get("https://reqres.in/api/users/3");
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {

  constructor() { }

  @ViewChild('myDetails') inputSrcElmnt : ElementRef;
  keyEntered: any;
  inputvalue: any;

  ngOnInit() {
    const buttonEventObservable =  fromEvent(document.getElementById('myButton'), 'click')
      .subscribe(res => console.log(res));

    //without Map Operatoe Example
    //  const inputEventObservable =  fromEvent<KeyboardEvent>(this.inputSrcElmnt.nativeElement, 'keyup')
    //   .subscribe(res => {
    //     this.inputvalue=this.inputSrcElmnt.nativeElement.value;
    //     this.keyEntered = res.key;
    //   });

     //Adding Map Operator to the Example
    // const mappedOperatorObservable =
    //   fromEvent<KeyboardEvent>(this.inputSrcElmnt.nativeElement, 'keyup')
    //     .pipe(
    //       map(res => res.key.toUpperCase())
    //     )
    //     .subscribe(res => {
    //       this.inputvalue=this.inputSrcElmnt.nativeElement.value;
    //       this.keyEntered = res;
    //     });

    //Adding Tap Operator to the Example

    const myTapOpertaorObsevable =
      fromEvent<KeyboardEvent>(this.inputSrcElmnt.nativeElement, 'keyup')
        .pipe(
          tap(res => res.key.toUpperCase())
        )
        .subscribe(res => {
          this.inputvalue=this.inputSrcElmnt.nativeElement.value;
          this.keyEntered = res;
        });
  }

}

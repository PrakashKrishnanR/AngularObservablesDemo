import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {map, take, takeLast, takeUntil, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-take-operators',
  templateUrl: './take-operators.component.html',
  styleUrls: ['./take-operators.component.css']
})
export class TakeOperatorsComponent implements OnInit {
  takeCounter=0;
  takeWhileCounter : any;
  takeLastCounter='';
  takeUntilCounter=0;
  @ViewChild('take') takeButton: ElementRef;
  @ViewChild('takewhile') takewhileButton: ElementRef;
  @ViewChild('takeLast') takeLastButton: ElementRef;
  @ViewChild('takeUntil') takeUntilButton: ElementRef;
  @ViewChild('stop') stopButton: ElementRef;

  myObservable = Observable.create((observer) => {
    observer.next('Observable Initiated');
    setTimeout(() => observer.next('New value from the stream'), 100);
    setTimeout(() => observer.next('Value 2'), 500);
    setTimeout(() => observer.next('value 3'), 500);
    setTimeout(() => observer.next('value 4'), 500);
    setTimeout(() => observer.next('value 5'), 500);
    setTimeout(() => observer.complete('Observable completed'), 2000);
  });
  constructor() { }

  ngOnInit() {

    const takeObservable = fromEvent(this.takeButton.nativeElement,'click');

    const takeWhileOperator = fromEvent(this.takewhileButton.nativeElement, 'input');

    const takeLastOperator = fromEvent(this.takeLastButton.nativeElement,'click');

    const takeUntilOperator = fromEvent(this.takeUntilButton.nativeElement, 'click');

    const stopOperator = fromEvent(this.stopButton.nativeElement, 'click');

    takeObservable.pipe(
      take(2)
    ).subscribe(value => {
      this.takeCounter++;
    });


    this.myObservable.pipe(
      takeLast(2)
    ).subscribe(value =>{
      this.takeLastCounter = this.takeLastCounter+'  '+value;
    });

    takeWhileOperator.pipe(
      map((e: KeyboardEvent) => ((e.target as HTMLInputElement).value)),
      takeWhile( e => e!='abcd')
    ).subscribe(value => {
      this.takeWhileCounter = value;
    });


    takeUntilOperator.pipe(
      takeUntil(stopOperator)
    ).subscribe(value => {
      this.takeUntilCounter++;
    });

  }

}

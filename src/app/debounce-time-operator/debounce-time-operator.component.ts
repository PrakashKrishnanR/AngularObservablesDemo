import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-debounce-time-operator',
  templateUrl: './debounce-time-operator.component.html',
  styleUrls: ['./debounce-time-operator.component.css']
})
export class DebounceTimeOperatorComponent implements OnInit {

  @ViewChild('myInput') myInput : ElementRef;
  searchTerm: any;
  displayValue: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const inputObservable = fromEvent(this.myInput.nativeElement, 'input');

    inputObservable.pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(value => {
      this.http.get("https://reqres.in/api/users/3").subscribe(value1 => {
        console.log(value1);
      });
      this.displayValue = value;
    })

  }

}

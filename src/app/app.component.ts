import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-observable-demo';

  @ViewChild('buttonElement') mybuttob : ElementRef;

  constructor(private httpClient: HttpClient) {
  }
  myObservable = Observable.create((observer) => {
    observer.next('Observable Initiated');
    setTimeout(() => observer.next('New value from the stream'), 3000);
    setTimeout(() => observer.next('Another New Value'), 5000);
    setTimeout(() => observer.complete('Observable completed'), 6000);
    setTimeout(() => observer.next('AFTER COMPLETE'), 6000);
  });

  ngOnInit() {
    this.myObservable.subscribe(
      data => this.addItem(data),
      error => this.addItem(error),
      () => this.addItem('the End')
    )

    // const buttonobservable = fromEvent(this.mybuttob.nativeElement,'click')
    //   .pipe(tap(value => console.log(value))).subscribe();
  }

  addItem(value: any){
    // do nothoing
  }
  // addItem(value: any) {
  //   const newNode = document.createElement('li');
  //   const textNode = document.createTextNode(value);
  //   newNode.appendChild(textNode);
  //   document.getElementById('output').appendChild(newNode);
  // }
  callMe() {
    this.httpClient.get('https://reqres.in/api/users/3').subscribe();
  }
}



import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-simple-subjects',
  templateUrl: './simple-subjects.component.html',
  styleUrls: ['./simple-subjects.component.css']
})
export class SimpleSubjectsComponent implements OnInit {
  mySubjectvalue: any;
  myBehaviourSubjectvalue: any;
  mySubject: Subject<any>;
  myBehaviourSubject: BehaviorSubject<any>;
  constructor() { }

  ngOnInit() {
    this.mySubject = new Subject<any>();
    this.myBehaviourSubject = new BehaviorSubject<any>('Initial');
    const subjectSubscriber1 = this.mySubject.subscribe(value  => {
      console.log("S.subscriber 1: "+ value);
    })
    const behaviorSubjectSubscriber1 = this.myBehaviourSubject.subscribe(value  => {
      console.log("B.subscriber 1: "+ value);
    })
    this.mySubject.next('newSubject');
    this.myBehaviourSubject.next('New Behaviour Subject');

    console.log('Directly acessing Behavioursubject: '+ this.myBehaviourSubject.getValue() );
  }



}

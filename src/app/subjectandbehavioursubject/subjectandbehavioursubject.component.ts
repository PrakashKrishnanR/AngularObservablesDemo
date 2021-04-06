import { Component, OnInit } from '@angular/core';
import {StateServiceService} from '../state-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-subjectandbehavioursubject',
  templateUrl: './subjectandbehavioursubject.component.html',
  styleUrls: ['./subjectandbehavioursubject.component.css']
})
export class SubjectandbehavioursubjectComponent implements OnInit {
  behaviourData: any;
  subjectData: any;
  subjectData2: any;
  behaviourData2: any;

  subjectSubscription1 : Subscription;
  subjectSubscription2 : Subscription;
  behaviourSubjectSubscription1 : Subscription;
  behaviourSubjectSubscription2 : Subscription;

  constructor(private mysateService: StateServiceService) {
  }

  ngOnInit() {
  }

  subscribeToBehaviorSubject() {
    this.behaviourSubjectSubscription1 = this.mysateService.behaviourSubjectServiceObservable.subscribe(
      value => {
        console.log('Behaviour subject subcribed : ' + value);
        this.behaviourData = value;
      }
    );
  }

  subscribeToSubject() {

  this.subjectSubscription2 =
    this.mysateService.subjectServiceObservable.subscribe(value => {
    console.log('subject subcribed :' + value);
    this.subjectData = value;
  });

  }

  addNewSubject() {
    this.mysateService.sendMessageToSubject(Math.random()*219);
  }

  addNewBehaviourSubject() {
    this.mysateService.sendMessageToBehaviourSubject(Math.random()*874);
  }

  subscribeToSubject2() {
    this.subjectSubscription2 =
      this.mysateService.subjectServiceObservable.subscribe(value => {
      console.log('subject subcribed 2 :' + value);
      this.subjectData2 = value;
    });

  }

  subscribeToBehaviorSubject2() {
   this.behaviourSubjectSubscription2 =
     this.mysateService.behaviourSubjectServiceObservable.subscribe(
      value => {
        console.log('Behaviour subject subcribed 2: ' + value);
        this.behaviourData2 = value;
      }
    );
  }
  ngOnDestroy(){
    this.subjectSubscription2.unsubscribe();
    this.behaviourSubjectSubscription2.unsubscribe();
    this.subjectSubscription1.unsubscribe();
    this.behaviourSubjectSubscription1.unsubscribe();
  }
}

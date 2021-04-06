import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService implements OnDestroy{

  private subjectService = new Subject<any>();
  private behaviourSubjectService = new BehaviorSubject<any>('first data');

  subjectServiceObservable = this.subjectService.asObservable();
  behaviourSubjectServiceObservable = this.behaviourSubjectService.asObservable();
  constructor() { }

  sendMessageToSubject(data:any){
    this.subjectService.next(data);
  }

  sendMessageToBehaviourSubject(data: any){
    this.behaviourSubjectService.next(data);
  }

  ngOnDestroy(){
    this.subjectService.complete();
    this.behaviourSubjectService.complete();
  }
}

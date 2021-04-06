import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectandbehavioursubjectComponent } from './subjectandbehavioursubject.component';

describe('SubjectandbehavioursubjectComponent', () => {
  let component: SubjectandbehavioursubjectComponent;
  let fixture: ComponentFixture<SubjectandbehavioursubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectandbehavioursubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectandbehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

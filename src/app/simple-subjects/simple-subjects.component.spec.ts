import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSubjectsComponent } from './simple-subjects.component';

describe('SimpleSubjectsComponent', () => {
  let component: SimpleSubjectsComponent;
  let fixture: ComponentFixture<SimpleSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

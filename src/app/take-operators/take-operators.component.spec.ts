import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOperatorsComponent } from './take-operators.component';

describe('TakeOperatorsComponent', () => {
  let component: TakeOperatorsComponent;
  let fixture: ComponentFixture<TakeOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfCreatingObservablesComponent } from './types-of-creating-observables.component';

describe('TypesOfCreatingObservablesComponent', () => {
  let component: TypesOfCreatingObservablesComponent;
  let fixture: ComponentFixture<TypesOfCreatingObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfCreatingObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfCreatingObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

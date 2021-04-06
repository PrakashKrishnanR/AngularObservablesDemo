import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypesOfCreatingObservablesComponent } from './types-of-creating-observables/types-of-creating-observables.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import {FormsModule} from '@angular/forms';
import { ShareOperatorComponent } from './share-operator/share-operator.component';
import {BlockUIModule} from 'ng-block-ui';
import {HttpClientModule} from '@angular/common/http';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { DebounceTimeOperatorComponent } from './debounce-time-operator/debounce-time-operator.component';
import { TakeOperatorsComponent } from './take-operators/take-operators.component';
import { MergeMapOperatorComponent } from './merge-map-operator/merge-map-operator.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SubjectandbehavioursubjectComponent } from './subjectandbehavioursubject/subjectandbehavioursubject.component';
import { SimpleSubjectsComponent } from './simple-subjects/simple-subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesOfCreatingObservablesComponent,
    MapOperatorComponent,
    ShareOperatorComponent,
    SwitchMapComponent,
    DebounceTimeOperatorComponent,
    TakeOperatorsComponent,
    MergeMapOperatorComponent,
    CombineLatestComponent,
    SubjectandbehavioursubjectComponent,
    SimpleSubjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BlockUIModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

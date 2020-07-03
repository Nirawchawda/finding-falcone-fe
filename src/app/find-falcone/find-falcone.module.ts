import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindFalconeRoutingModule } from './find-falcone-routing.module';
import { FindFalconeComponent } from './find-falcone.component';
import { SuccessComponent } from './success/success.component';
import { StoreModule } from '@ngrx/store';  
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './../store';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FailureComponent } from './failure/failure.component';

@NgModule({
  declarations: [FindFalconeComponent, SuccessComponent, FailureComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FindFalconeRoutingModule,
    ComponentsModule,
    StoreModule.forFeature('findFalcone',reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class FindFalconeModule { }

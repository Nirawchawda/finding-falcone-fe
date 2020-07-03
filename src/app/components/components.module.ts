import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DestinationComponent } from './destination/destination.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
 imports:      [ CommonModule , FormsModule, ReactiveFormsModule],
 declarations: [ DestinationComponent],
 exports:      [ DestinationComponent,FormsModule]
})
export class ComponentsModule { }
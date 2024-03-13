import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import { PostTripComponent } from './post-trip/post-trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../MaterialModule';


@NgModule({
  declarations: [
    TripsComponent,
    PostTripComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class TripsModule { }

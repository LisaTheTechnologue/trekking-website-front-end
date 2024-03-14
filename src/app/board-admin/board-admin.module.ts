import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardAdminRoutingModule } from './board-admin-routing.module';
import { TripsComponent } from './trips/trips.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    TripsComponent,
    DestinationsComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    BoardAdminRoutingModule
  ]
})
export class BoardAdminModule { }

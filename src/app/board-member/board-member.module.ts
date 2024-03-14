import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardMemberRoutingModule } from './board-member-routing.module';
import { PostsComponent } from './posts/posts.component';
import { TripsComponent } from './trips/trips.component';


@NgModule({
  declarations: [
    PostsComponent,
    TripsComponent
  ],
  imports: [
    CommonModule,
    BoardMemberRoutingModule
  ]
})
export class BoardMemberModule { }

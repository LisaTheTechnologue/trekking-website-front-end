import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommunityComponent } from './community/community.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostDestinationComponent } from './admin/post-destination/post-destination.component';

const routes: Routes = [
  { path: 'trips', component: TripsComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/destination', component: PostDestinationComponent },
  { path: 'member', component: MemberComponent },
  { path: 'about', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

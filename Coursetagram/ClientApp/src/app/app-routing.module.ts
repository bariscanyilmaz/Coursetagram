import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DetailPostComponent } from './post/detail-post/detail-post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { ExploreComponent } from './explore/explore/explore/explore.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
const appRoutes= [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path:'p',component:AddPostComponent},
  {path:'p/:id',component:DetailPostComponent},
  {path:'explore',component:ExploreComponent},
  { path: 'counter', component: CounterComponent },
  { path: 'u/:username', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }


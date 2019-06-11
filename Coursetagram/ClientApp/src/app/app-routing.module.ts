import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetailPostComponent } from './post/detail-post/detail-post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { ExploreComponent } from './explore/explore/explore/explore.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './profile/user/user.component';
const appRoutes= [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path:'p',component:AddPostComponent},
  {path:'p/:id',component:DetailPostComponent},
  {path:'explore',component:ExploreComponent},
  { path: 'u/:username', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }


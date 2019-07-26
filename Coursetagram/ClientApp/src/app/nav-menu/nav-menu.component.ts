import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { IUserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  /**
   *
   */

  constructor(private profileService:ProfileService,private router:Router) {

  }

  value='';
  isExpanded = false;
  users:IUserModel[]=[];

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  search(){
    if(this.value.length>3){
      this.profileService.getUsers(this.value).subscribe(u=>{
        this.users=u;
      },err=>{
        console.log(err)
      },()=>{
        console.log(this.users);
      });

    }else{
      this.users=[];
    }
  }

  clear(){
    this.value='';
    this.users=[];
  }

  logout(){
    this.router.navigate(['/login']);
  }

}

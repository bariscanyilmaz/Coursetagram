import { Injectable } from '@angular/core';
import { IUserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private dataUrl='assets/users.json';
  constructor(private http:HttpClient) {

  }

  getUsers(username:string):Observable<IUserModel[]>{
    return this.http.get<IUserModel[]>(this.dataUrl);
  }

}

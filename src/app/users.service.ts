import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseurl = env.API_URL + env.USER_ENDPOINT

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.baseurl)
  }

  findOne(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseurl}/${id}`)
  }

  addOne(user: User): Observable<User>{
    return this.http.post<User>(this.baseurl, user)
  }

}

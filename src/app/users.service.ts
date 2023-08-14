import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url =  "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  findOne(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`)
  }

  addOne(user: User): Observable<User>{
    return this.http.post<User>(this.url, user)
  }

}

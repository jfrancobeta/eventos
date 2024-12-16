import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private url: string = "http://localhost:8091/api/usuario/";
  constructor(private http: HttpClient) {

   }


   crear(user: User): Observable<User>{
      return this.http.post<User>(this.url + "crear",user)
   }
   
}

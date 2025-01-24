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

   findAll(): Observable<User[]>{
     return this.http.get<User[]>(this.url + 'listar');
   }

   findByid(id: number): Observable<User>{
     return this.http.get<User>(this.url + 'listar/' + id);
   }  

   crear(user: User): Observable<User>{
      return this.http.post<User>(this.url + "crearu",user)
   }

   eliminar(id: number): Observable<void>{
     return this.http.delete<void>(this.url + 'eliminar/' + id);
   }
   desactivar(id: number): Observable<void>{
     return this.http.delete<void>(this.url + 'desactivar/' + id);
   }
   activar(id: number): Observable<void>{
     return this.http.put<void>(this.url + 'activar/' + id,null);
   }

   total(): Observable<number>{
     return this.http.get<number>(this.url + 'total');
   }

   forgotPassword(email: string): Observable<void>{
     return this.http.post<void>(this.url + 'forgot-password', email);
   }


   resetPassword(token: string, password: string): Observable<void>{
    console.log('Token:', token);
     return this.http.post<void>(this.url + 'reset-password', {token: token, newPassword: password});
   }

   
   
}

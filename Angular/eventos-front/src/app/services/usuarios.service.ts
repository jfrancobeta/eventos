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

   
   
}

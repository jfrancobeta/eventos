import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventos: Evento[] = []
  constructor(private http: HttpClient) { 

    
  }

  private url: string = "http://localhost:8091/api/eventos/";


  findAll(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.url + "listar");
  }

  crear(evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(this.url + "crear", evento)
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(this.url + "eliminar/" + id)
  }

  editar(evento:Evento):Observable<Evento>{
    return this.http.put<Evento>(this.url + "crear/" + evento.id , evento)
  }

  total(): Observable<number>{
    return this.http.get<number>(this.url + 'total');
  }

  estado(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.url + 'estado');
  }
}

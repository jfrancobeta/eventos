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
}
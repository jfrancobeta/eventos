import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistente } from '../models/Asistente';

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {


  private url: string = "http://localhost:8091/api/asistentes/";
  constructor(private http : HttpClient) { }

  crear(asistente: Asistente): Observable<Asistente>{
    console.log(asistente)
    return this.http.post<Asistente>(this.url + "crear",asistente)
  }
}

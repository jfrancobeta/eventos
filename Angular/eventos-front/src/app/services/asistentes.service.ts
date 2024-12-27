import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistente } from '../models/Asistente';
import { AsistenteDto } from '../models/AsistenteDto';

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

  listar(): Observable<AsistenteDto[]>{
    return this.http.get<AsistenteDto[]>(this.url + "listarid") 
  }

  listarPorEvento(id:number): Observable<Asistente[]>{
    return this.http.get<Asistente[]>(this.url + "listarEventoId/" + id)
  }

  delete(id:number): Observable<void>{
    return this.http.delete<void>(this.url + "eliminar/" + id)
  }
}

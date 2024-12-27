import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _tokenEvent = new EventEmitter();

  private _inscritosEvent =  new BehaviorSubject<number | null>(null);;

  constructor() { }

  get tokenEvent(){
    return this._tokenEvent
  }

  get inscritosEvent() {
    return this._inscritosEvent.asObservable();
  }

  // Método para emitir valores
  emitirInscrito(id: number) {
    this._inscritosEvent.next(id);
  }

  
}

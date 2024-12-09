import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _tokenEvent = new EventEmitter();
  constructor() { }

  get tokenEvent(){
    return this._tokenEvent
  }
}

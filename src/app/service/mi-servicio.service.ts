import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  private miSubject: BehaviorSubject<string[]> = new BehaviorSubject(['HOLA']);

  constructor() { }

  getInformacion(){
    return this.miSubject.asObservable();
  }

  setInformacion(informacion: string[]){
    this.miSubject.next(informacion);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RespuestaNoticias } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  private miSubject: BehaviorSubject<string[]> = new BehaviorSubject(['HOLA']);

  constructor(private leerArticulosFicheroHttp: HttpClient) { }

  getInformacion(){
    return this.miSubject.asObservable();
  }

  setInformacion(informacion: string[]){
    this.miSubject.next(informacion);
  }

  getDatosDesdeJson(){
    let respNoticiasObservable: Observable<RespuestaNoticias>;
    respNoticiasObservable = this.leerArticulosFicheroHttp.get<RespuestaNoticias>("/assets/datos/articulos.json");
    return respNoticiasObservable;
  }
}

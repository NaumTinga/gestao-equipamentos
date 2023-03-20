
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {configUrl} from "../../app.api";
import {Modelo} from "../../modelo/data/modelo.model";

@Injectable()
export class ModeloService {

  constructor(private http: HttpClient) { }

  configUrl = configUrl +'/modelo'

  list(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.configUrl+'/list');
  }

  // list() {
  //    return this.http.get<any>(this.configUrl+'/list');
  //  }

  show(id: any) {
    return this.http.get<any>(this.configUrl+'/show/'+id);
  }

  save(nome: any) {
    return this.http.post<any>(this.configUrl+'/save', {nome});
  }

  update(id: any, nome: any) {
    return this.http.post<any>(this.configUrl+'/update', {nome, id});
  }

  delete(id: any) {
    return this.http.post<any>(this.configUrl+'/delete', {id});
  }
}

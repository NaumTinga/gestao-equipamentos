import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {configUrl} from "../../app.api";
import {Marca} from "./marca.model";



@Injectable()
export class MarcaService {
  constructor(private http: HttpClient) { }

  configUrl = configUrl +'/marca'


  list(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.configUrl+'/list');
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

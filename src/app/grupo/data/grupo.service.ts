import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {configUrl} from "../../app.api";
import {Grupo} from "./grupo.model";
import {Observable} from "rxjs";

@Injectable()
export class GrupoService {

  constructor(private http: HttpClient) {}

  configUrl = configUrl + '/grupo'

  list(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.configUrl + '/list')
  }

  show(id: any) {
    return this.http.get<any>(this.configUrl+ '/show' + id)
  }

  save(nome: any) {
    return this.http.post<any>(this.configUrl + '/save', {nome})
  }

  update(id: any, nome: any) {
    return this.http.post<any>(this.configUrl + '/update', {nome, id})
  }

  delete(id: any) {
    return this.http.post<any>(this.configUrl + '/delete', {id})
  }

}

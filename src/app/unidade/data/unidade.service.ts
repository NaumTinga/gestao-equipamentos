import {HttpClient} from "@angular/common/http";
import {configUrl} from "../../app.api";
import {Observable} from "rxjs";
import {Unidade} from "./unidade.model";


export class UnidadeService{

  constructor(private http: HttpClient) {}

  configUrl = configUrl +'/unidade'

  list(): Observable<Unidade[]> {
    return this.http.get<Unidade[]>(this.configUrl+'/list');
  }

  show(id: any) {
    return this.http.get<any>(this.configUrl+'/show'+id);
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

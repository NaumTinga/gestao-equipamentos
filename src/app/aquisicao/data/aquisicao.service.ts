import {HttpClient} from "@angular/common/http";
import {configUrl} from "../../app.api";
import {Observable} from "rxjs";
import {Aquisicao} from "./aquisicao.model";

export class AquisicaoService {

  constructor(private http: HttpClient) {
  }

  configUrl = configUrl + '/aquisicao'

  list(): Observable<Aquisicao[]> {
    return this.http.get<Aquisicao[]>(this.configUrl + '/list')
  }
  show(id: any) {
    return this.http.get<any>(this.configUrl + '/show' + id)
  }

  save(descricao: any, dataAquisicao: any,
       numeroConcurso: any, pathContracto: any) {
    return this.http.post<any>(this.configUrl + '/save', {descricao, dataAquisicao, numeroConcurso, pathContracto})
  }

  update(id: any, descricao: any, dataAquisicao: any,
       numeroConcurso: any, pathContracto: any) {
    return this.http.post<any>(this.configUrl + '/save', {descricao, dataAquisicao, numeroConcurso, pathContracto, id})
  }

  delete(id: any) {
    return this.http.post<any>(this.configUrl + '/delete', {id})
  }

}

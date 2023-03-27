import {HttpClient} from "@angular/common/http";
import {configUrl} from "../../app.api";
import {Equipamento} from "./equipamento.model";
import {Observable} from "rxjs";

export class EquipamentoService {

  constructor(private http: HttpClient) {
  }

  configUrl = configUrl + 'equipamento'

  list(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.configUrl + '/list')
  }

  show(id: any) {
    return this.http.get<any>(this.configUrl+'/show/'+id);
  }

  save(numeroSerie: any, dataRegisto: any) {
    return this.http.post<any>(this.configUrl+'/save', {numeroSerie, dataRegisto});
  }

  update(id: any, nome: any) {
    return this.http.post<any>(this.configUrl+'/update', {nome, id});
  }

  delete(id: any) {
    return this.http.post<any>(this.configUrl+'/delete', {id});
  }

}

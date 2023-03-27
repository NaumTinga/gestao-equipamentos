import { Component } from '@angular/core';
import {Aquisicao} from "../data/aquisicao.model";
import {AquisicaoService} from "../data/aquisicao.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-aquisicao.persist',
  templateUrl: './aquisicao.persist.component.html',
  styleUrls: ['./aquisicao.persist.component.scss']
})
export class AquisicaoPersistComponent {
  id: any
  descricao: any
  dataAquisicao: any
  numeroConcurso: any
  pathContracto: any
  constructor(private aquisicaoService: AquisicaoService,
              private route: ActivatedRoute,
              private router: Router) {}

  save() {
    this.aquisicaoService.save(this.descricao, this.dataAquisicao,
      this.numeroConcurso, this.pathContracto).subscribe((response: any) => {

      if (response.status){
        alert(response.message)
        this.router.navigate(['/list']);

      } else {
        alert(response.message)
        this.router.navigate(['/list']);
        //location.reload();
      }


    }, error => {
      console.log(error)
      alert('Erro ao chamar a API')
    })
  }


}

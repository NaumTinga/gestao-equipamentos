import { Component } from '@angular/core';
import {UnidadeService} from "../data/unidade.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-unidade.persist',
  templateUrl: './unidade.persist.component.html',
  styleUrls: ['./unidade.persist.component.scss']
})
export class UnidadePersistComponent {

  unidades: any [] = []
  id: any
  nome: any
  constructor(private unidadeService: UnidadeService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  save() {
    this.unidadeService.save(this.nome).subscribe((response: any) => {
      if (response.status){
        alert(response.message)
        this.router.navigate(['/unidade']);

      } else {
        alert(response.message)
        //this.router.navigate(['/marca']);
        location.reload();
      }

    }, error => {
      console.log(error)
      alert('Erro ao chamar a API')
    })
  }
}

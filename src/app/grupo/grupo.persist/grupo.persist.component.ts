import { Component } from '@angular/core';
import {Grupo} from "../data/grupo.model";
import {GrupoService} from "../data/grupo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-grupo.persist',
  templateUrl: './grupo.persist.component.html',
  styleUrls: ['./grupo.persist.component.scss']
})
export class GrupoPersistComponent {

  id: any
  nome: any


  constructor(private grupoService: GrupoService,
              private route: ActivatedRoute,
              private router: Router) {}

  save() {
    this.grupoService.save(this.nome).subscribe((response: any) => {

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

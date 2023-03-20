import { Component } from '@angular/core';
import {ModeloService} from "../data/modelo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modelo.persist',
  templateUrl: './modelo.persist.component.html',
  styleUrls: ['./modelo.persist.component.scss']
})
export class ModeloPersistComponent {



  id: any
  nome: any
  dataRegisto: any
  modelos: any[] = []

  constructor(private modeloService: ModeloService,
              private route: ActivatedRoute,
              private router: Router) {}
  save(){

    this.modeloService.save(this.nome).subscribe((response: any) => {

      if (response.status){
        alert(response.message)
        this.router.navigate(['/modeloList']);

      } else {
        alert(response.message)
        this.router.navigate(['/modeloList']);
        //location.reload();
      }


    }, error => {
      console.log(error)
      alert('Erro ao chamar a API')
    })
  }
}

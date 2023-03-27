import { Component } from '@angular/core';
import {EquipamentoService} from "../data/equipamento.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-equipamento.persist',
  templateUrl: './equipamento.persist.component.html',
  styleUrls: ['./equipamento.persist.component.scss']
})
export class EquipamentoPersistComponent {

  id: any
  dataRegisto: any
  numeroSerie: any
  equipamentos: any[] = []
  constructor (private equipamentoService: EquipamentoService,
               private route: ActivatedRoute,
               private router: Router) {}

  save() {

    this.equipamentoService.save(this.numeroSerie, this.dataRegisto).subscribe((response: any) => {
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

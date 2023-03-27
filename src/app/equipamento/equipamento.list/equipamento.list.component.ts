import { Component } from '@angular/core';
import {EquipamentoService} from "../data/equipamento.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-equipamento.list',
  templateUrl: './equipamento.list.component.html',
  styleUrls: ['./equipamento.list.component.scss']
})
export class EquipamentoListComponent {

  id: any
  dataRegisto: any
  numeroSerie: any
  equipamentos: any[] = []
  constructor (private equipamentoService: EquipamentoService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {

    this.equipamentoService.list().subscribe((response: any) => {

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

  delete() {

    this.equipamentoService.delete(this.id).subscribe((response: any) => {

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

import { Component } from '@angular/core';
import {MarcaService} from "../data/marca.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-persist',
  templateUrl: './marca.persist.component.html',
  styleUrls: ['./marca.persist.component.scss']
})
export class MarcaPersistComponent {

  id: any
  nome: any
  dataRegisto: any



  constructor(private marcaService: MarcaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  save(){

    this.marcaService.save(this.nome).subscribe((response: any) => {

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

import { Component } from '@angular/core';
import {MarcaService} from "../data/marca.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-persist',
  templateUrl: './persist.component.html',
  styleUrls: ['./persist.component.scss']
})
export class PersistComponent {

  id: any
  nome: any
  dataRegisto: any
  marcas: any[] = []
  // marca = Marca

  constructor(private marcaService: MarcaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  save(){

    this.marcaService.save(this.nome).subscribe((response: any) => {

      if (response.status){
        alert(response.message)
        this.router.navigate(['/marca']);

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

import { Component } from '@angular/core';
import {Grupo} from "../data/grupo.model";
import {GrupoService} from "../data/grupo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-grupo.list',
  templateUrl: './grupo.list.component.html',
  styleUrls: ['./grupo.list.component.scss']
})
export class GrupoListComponent {

  id: any
  nome: any
  grupos: Grupo [] = []

  constructor(private grupoService: GrupoService,
              private route: ActivatedRoute,
              private router: Router
              ) {}


  ngOnInt(): void {
    this.grupoService.list().subscribe(data => this.grupos = data)
  }

  delete() {
    this.grupoService.delete(this.id).subscribe((response: any) => {
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

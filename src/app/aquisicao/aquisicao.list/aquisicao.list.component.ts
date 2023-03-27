import { Component } from '@angular/core';
import {AquisicaoService} from "../data/aquisicao.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Aquisicao} from "../data/aquisicao.model";

@Component({
  selector: 'app-aquisicao.list',
  templateUrl: './aquisicao.list.component.html',
  styleUrls: ['./aquisicao.list.component.scss']
})
export class AquisicaoListComponent {

  id: any
  descricao: any
  dataAquisicao: any
  numeroConcurso: any
  pathContracto: any
aquisicoes: Aquisicao[] = []
  constructor(private aquisicaoService: AquisicaoService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.aquisicaoService.list().subscribe((response: any) => {

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
    this.aquisicaoService.delete(this.id).subscribe((response: any) => {
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

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModeloService} from "../data/modelo.service";

@Component({
  selector: 'app-modelo.list',
  templateUrl: './modelo.list.component.html',
  styleUrls: ['./modelo.list.component.scss']
})
export class ModeloListComponent implements OnInit{

  id: any
  nome: any
  dataRegisto: any
  modelos: any[] = []

  constructor(private modeloService: ModeloService,
              private route: ActivatedRoute,
              private router: Router) {}

   ngOnInit(): void {
      this.modeloService.list().subscribe(data => this.modelos = data)
   }

  delete(){

    this.modeloService.delete(this.id).subscribe((response: any) => {

      if (response.status){
        alert(response.message)
        this.router.navigate(['/modelo']);

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

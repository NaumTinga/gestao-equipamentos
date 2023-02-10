import { Component } from '@angular/core';
import {MarcaService} from "./data/marca.service";
import {Marca} from "./data/marca.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent {

   nome: any
  dataRegisto: any
   marcas: any[] = []


  constructor(private marcaService: MarcaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

 //Listar que funciona
 this.marcaService.list().subscribe(data => this.marcas = data);

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



// Listar que nao funciona
//   this.marcaService.list().subscribe((marcas: Marca[]) => {
//     this.marcas = marcas;
//      console.log('xxx aiii uiii'+this.nome)
//
//   }, error => {
//     console.log(error)
//     alert('Erro ao chamar a API')
//   })
//
// }
// this.marcaService.list().subscribe((data: any) => {
//
//      console.log('xxx aiii uiii'+this.data.nome)
//
//   }, error => {
//     console.log(error)
//     alert('Erro ao chamar a API')
//   })
//

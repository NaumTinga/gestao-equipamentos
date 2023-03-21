import {Component, Injectable, OnInit} from '@angular/core';
import {Unidade} from "../data/unidade.model";
import {UnidadeService} from "../data/unidade.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-unidade.list',
  templateUrl: './unidade.list.component.html',
  styleUrls: ['./unidade.list.component.scss']
})


export class UnidadeListComponent implements  OnInit{



  constructor(private unidadeService: UnidadeService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  unidades: any [] = []

  ngOnInit() {
    this.unidadeService.list().subscribe((response: any) => {
      if (response.status){
        alert(response.message)
        this.router.navigate(['/unidade']);

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

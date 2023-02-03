import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MarcaComponent } from './marca/marca.component';

import {ROUTES} from "./app.routes";
import { ModeloComponent } from './modelo/modelo.component';
import { TipoEquipamentoComponent } from './tipo-equipamento/tipo-equipamento.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { AquisicaoComponent } from './aquisicao/aquisicao.component';
import { EmpresaComponent } from './empresa/empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    MarcaComponent,
    ModeloComponent,
    TipoEquipamentoComponent,
    EquipamentoComponent,
    AquisicaoComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

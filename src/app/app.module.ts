import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MarcaListComponent } from './marca/marca.list/marca.list.component';

import {ROUTES} from "./app.routes";
import { ModeloComponent } from './modelo/modelo.component';
import { TipoEquipamentoComponent } from './tipo-equipamento/tipo-equipamento.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { AquisicaoComponent } from './aquisicao/aquisicao.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { GrupoComponent } from './grupo/grupo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { ReparacaoComponent } from './empresa/reparacao/reparacao.component';
import {MarcaService} from "./marca/data/marca.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MarcaPersistComponent } from './marca/marca.persist/marca.persist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    MarcaListComponent,
    ModeloComponent,
    TipoEquipamentoComponent,
    EquipamentoComponent,
    AquisicaoComponent,
    EmpresaComponent,
    UnidadeComponent,
    GrupoComponent,
    UsuarioComponent,
    PerfilComponent,
    ReparacaoComponent,
    MarcaPersistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [MarcaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

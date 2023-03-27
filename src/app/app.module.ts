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
import { ModeloPersistComponent } from './modelo/modelo.persist/modelo.persist.component';
import { ModeloListComponent } from './modelo/modelo.list/modelo.list.component';
import { ModeloShowComponent } from './modelo/modelo.show/modelo.show.component';
import {ModeloService} from "./modelo/data/modelo.service";
import { UnidadeListComponent } from './unidade/unidade.list/unidade.list.component';
import { UnidadePersistComponent } from './unidade/unidade.persist/unidade.persist.component';
import { UnidadeShowComponent } from './unidade/unidade.show/unidade.show.component';
import {UnidadeService} from "./unidade/data/unidade.service";
import { GrupoPersistComponent } from './grupo/grupo.persist/grupo.persist.component';
import { GrupoShowComponent } from './grupo/grupo.show/grupo.show.component';
import { GrupoListComponent } from './grupo/grupo.list/grupo.list.component';
import {GrupoService} from "./grupo/data/grupo.service";
import { EquipamentoListComponent } from './equipamento/equipamento.list/equipamento.list.component';
import { EquipamentoPersistComponent } from './equipamento/equipamento.persist/equipamento.persist.component';
import { EquipamentoShowComponent } from './equipamento/equipamento.show/equipamento.show.component';

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
    MarcaPersistComponent,
    ModeloPersistComponent,
    ModeloListComponent,
    ModeloShowComponent,
    UnidadeListComponent,
    UnidadePersistComponent,
    UnidadeShowComponent,
    GrupoPersistComponent,
    GrupoShowComponent,
    GrupoListComponent,
    EquipamentoListComponent,
    EquipamentoPersistComponent,
    EquipamentoShowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [MarcaService, ModeloService, UnidadeService, GrupoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Routes} from "@angular/router";
import {MarcaListComponent} from "./marca/marca.list/marca.list.component";
import {HomeComponent} from "./layouts/home/home.component";
import {ModeloComponent} from "./modelo/modelo.component";
import {TipoEquipamentoComponent} from "./tipo-equipamento/tipo-equipamento.component";
import {EquipamentoComponent} from "./equipamento/equipamento.component";
import {AquisicaoComponent} from "./aquisicao/aquisicao.component";
import {UnidadeComponent} from "./unidade/unidade.component";
import {GrupoComponent} from "./grupo/grupo.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {PerfilComponent} from "./usuario/perfil/perfil.component";
import {EmpresaComponent} from "./empresa/empresa.component";
import {ReparacaoComponent} from "./empresa/reparacao/reparacao.component";
import {MarcaPersistComponent} from "./marca/marca.persist/marca.persist.component";
import {ModeloListComponent} from "./modelo/modelo.list/modelo.list.component";
import {ModeloPersistComponent} from "./modelo/modelo.persist/modelo.persist.component";
import {UnidadeListComponent} from "./unidade/unidade.list/unidade.list.component";
import {UnidadePersistComponent} from "./unidade/unidade.persist/unidade.persist.component";
import {UnidadeShowComponent} from "./unidade/unidade.show/unidade.show.component";
import {GrupoListComponent} from "./grupo/grupo.list/grupo.list.component";
import {GrupoShowComponent} from "./grupo/grupo.show/grupo.show.component";
import {GrupoPersistComponent} from "./grupo/grupo.persist/grupo.persist.component";
import {EquipamentoListComponent} from "./equipamento/equipamento.list/equipamento.list.component";
import {EquipamentoPersistComponent} from "./equipamento/equipamento.persist/equipamento.persist.component";
import {EquipamentoShowComponent} from "./equipamento/equipamento.show/equipamento.show.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  //Marca routes
  {path: 'marca', component: MarcaListComponent,
  children: [
    {path: '', redirectTo: 'marca', pathMatch: 'full'},
    {path: 'list', component: MarcaListComponent},
    {path: 'marcaPersist', component: MarcaPersistComponent},
    {path: 'show', component: MarcaPersistComponent},
  ]},

  //Modelo routes
  {path: 'modelo', component: ModeloListComponent,
  children: [
    {path: '', redirectTo: 'modelo', pathMatch: 'full'},
    {path: 'list', component: ModeloListComponent},
    {path: 'modeloPersist', component: ModeloPersistComponent},
  ]},


  {path: 'tipoEquipamento', component: TipoEquipamentoComponent},

  //Equipamento
  {path: 'equipamento', component: EquipamentoComponent},
  {path: 'equipamentoList', component: EquipamentoListComponent},
  {path: 'equipamentoPersist', component: EquipamentoPersistComponent},
  {path: 'equipamentoShow', component: EquipamentoShowComponent},

  //Aquisicao
  {path: 'aquisicao', component: AquisicaoComponent},

  //Unidade
  {path: 'unidade', component: UnidadeComponent},
  {path: 'unidadeList', component: UnidadeListComponent},
  {path: 'unidadePersist', component: UnidadePersistComponent},
  {path: 'unidadeShow', component: UnidadeShowComponent},

  //Grupo
  {path: 'grupo', component: GrupoComponent},
  {path: 'grupoList', component: GrupoListComponent},
  {path: 'grupoPersist', component: GrupoPersistComponent},
  {path: 'grupoShow', component: GrupoShowComponent},


  {path: 'usuario', component: UsuarioComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'reparacao', component: ReparacaoComponent},
  // {path: 'usuario/:id', component: UsuarioComponent,
  //     children: [
  //       {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  //       {path: 'perfil', component: PerfilComponent},
  //     ]},
]

import {Routes} from "@angular/router";
import {MarcaComponent} from "./marca/marca.component";
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

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'modelo', component: ModeloComponent},
  {path: 'tipoEquipamento', component: TipoEquipamentoComponent},
  {path: 'equipamento', component: EquipamentoComponent},
  {path: 'aquisicao', component: AquisicaoComponent},
  {path: 'unidade', component: UnidadeComponent},
  {path: 'grupo', component: GrupoComponent},
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

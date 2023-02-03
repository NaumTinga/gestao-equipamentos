import {Routes} from "@angular/router";
import {MarcaComponent} from "./marca/marca.component";
import {HomeComponent} from "./layouts/home/home.component";
import {ModeloComponent} from "./modelo/modelo.component";
import {TipoEquipamentoComponent} from "./tipo-equipamento/tipo-equipamento.component";
import {EquipamentoComponent} from "./equipamento/equipamento.component";
import {AquisicaoComponent} from "./aquisicao/aquisicao.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'modelo', component: ModeloComponent},
  {path: 'tipoEquipamento', component: TipoEquipamentoComponent},
  {path: 'equipamento', component: EquipamentoComponent},
  {path: 'aquisicao', component: AquisicaoComponent},
]

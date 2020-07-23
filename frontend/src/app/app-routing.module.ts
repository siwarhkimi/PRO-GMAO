import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RmComponent } from './rm/rm.component';
import { RsComponent } from './rs/rs.component';
import { MainComponent } from './main/main.component';
import { MachinesComponent } from './rm/machines/machines.component';

import { AddComponent } from './rm/workorder/add/add.component';
import { EnQueueComponent } from './rm/workorder/en-queue/en-queue.component';

import { EquipmentsComponent } from './rm/equipments/equipments.component';
import { WorkorderComponent } from './rm/workorder/workorder.component';
import { CreateaccountComponent } from './rm/createaccount/createaccount.component';
import { MachinslistComponent } from './rm/machines/machinslist/machinslist.component';
import { AddmachinsComponent } from './rm/machines/addmachins/addmachins.component';
import { PreventionComponent } from './rm/machines/prevention/prevention.component';
import { CorrectionComponent } from './rm/machines/correction/correction.component';
//siw 
//import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
//end siw


const routes: Routes = [
  //siw 
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  //end siw
  { path: 'director', component: RmComponent },
  { path: 'responsable', component: RsComponent },
  { path: '', component: MainComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'listmachines', component: MachinslistComponent },
  { path: 'addmachins', component: AddmachinsComponent },
  { path: 'prevention', component: PreventionComponent },
  { path: 'correction', component: CorrectionComponent },
  { path: 'equipments', component: EquipmentsComponent },

  { path: 'workorder', component: WorkorderComponent },
  { path: 'create', component: CreateaccountComponent },
  { path: 'EnQueueComponent', component: EnQueueComponent },
  { path: 'AddWork-order', component: AddComponent },
  //siw 
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
  //end siw
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerialsComponent } from './serials/serials.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',  redirectTo: '/serials', pathMatch: 'full'},
  { path: 'serials', component: SerialsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

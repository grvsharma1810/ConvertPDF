import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JpgToPdfComponent} from "./jpgtopdf/jpgtopdf.component";
import {PdftojpgComponent} from "./pdftojpg/pdftojpg.component";


const routes: Routes = [
  { path: 'jpgtopdf', component: JpgToPdfComponent },
  { path: 'pdftojpg', component: PdftojpgComponent },
  { path: '',   redirectTo: '/jpgtopdf', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

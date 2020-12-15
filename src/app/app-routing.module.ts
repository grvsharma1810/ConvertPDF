import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JpgToPdfComponent} from "./jpgtopdf/jpgtopdf.component";
import {PdftoImageComponent} from "./pdftoimage/pdftoimage.component";


const routes: Routes = [
  { path: 'jpgtopdf', component: JpgToPdfComponent },
  { path: 'pdftoimage', component: PdftoImageComponent },
  { path: '',   redirectTo: '/jpgtopdf', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

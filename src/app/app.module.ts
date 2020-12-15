import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { JpgToPdfComponent} from "./jpgtopdf/jpgtopdf.component";
import { DraganddropDirective } from './directives/draganddrop.directive';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PdftoImageComponent} from "./pdftoimage/pdftoimage.component";
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JpgToPdfComponent,
    DraganddropDirective,
    PdftoImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

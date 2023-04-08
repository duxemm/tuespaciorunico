import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunaSelectorComponent } from './components/runa-selector/runa-selector.component';
import { NavVarComponent } from './components/nav-var/nav-var/nav-var.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HomeComponent } from './components/home/home/home.component';
import { HistoriaComponent } from './components/historia/historia/historia.component';
import { TiradasComponent } from './components/tiradas/tiradas/tiradas.component';
import { ConsultasComponent } from './components/consultas/consultas/consultas.component';
import { ContactoComponent } from './components/contacto/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RunaSelectorComponent,
    NavVarComponent,
    FooterComponent,
    HomeComponent,
    HistoriaComponent,
    TiradasComponent,
    ConsultasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

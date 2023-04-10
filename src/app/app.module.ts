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

//material components
import {MaterialComponentsModule} from '../material.module';
import { ConsultaConsejoComponent } from './components/modules/consulta-consejo/consulta-consejo.component';
import { ConsultaSuperficialComponent } from './components/modules/consulta-superficial/consulta-superficial.component';
import { ConsultaAmpliaComponent } from './components/modules/consulta-amplia/consulta-amplia.component';
import { ConsultaProfundaComponent } from './components/modules/consulta-profunda/consulta-profunda.component';
import { VerMasComponent } from './components/modules/ver-mas/ver-mas.component';

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
    ContactoComponent,
    ConsultaConsejoComponent,
    ConsultaSuperficialComponent,
    ConsultaAmpliaComponent,
    ConsultaProfundaComponent,
    VerMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas/consultas.component';
import { ContactoComponent } from './components/contacto/contacto/contacto.component';
import { HistoriaComponent } from './components/historia/historia/historia.component';
import { HomeComponent } from './components/home/home/home.component';
import { TiradasComponent } from './components/tiradas/tiradas/tiradas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'tiradas',
    component: TiradasComponent
  },
  {
    path: 'consultas',
    component: ConsultasComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

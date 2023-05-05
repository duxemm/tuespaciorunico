import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.scss'],
})
export class NavVarComponent {
  mostrarMenu = '';

  showMenu(clase: string) {
    switch (clase) {
      case 'menu-list':
        this.mostrarMenu = 'menu-list-no';
        break;
      case 'menu-list-no':
        this.mostrarMenu = 'menu-list';
        break;
      default:
        this.mostrarMenu = 'menu-list'
        break;
    }
  }

  hideMenu() {
    this.mostrarMenu = 'menu-list-no';
  }
}

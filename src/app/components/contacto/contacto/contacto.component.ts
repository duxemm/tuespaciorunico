import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  constructor(private clipBoard: Clipboard, private snackBar: MatSnackBar) {
  }

  copy():void {
    this.clipBoard.copy("+525539875239");
    this.snackBar.open('¡Texto copiado al portapapeles!',undefined,{
      duration: 2000,
      panelClass: 'snackbar'
    });
  }

}

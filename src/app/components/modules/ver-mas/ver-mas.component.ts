import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss'],
})
export class VerMasComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, text: string, img: string, sig: string}) { }

}

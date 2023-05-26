import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-amplia',
  templateUrl: './consulta-amplia.component.html',
  styleUrls: ['./consulta-amplia.component.scss'],
})
export class ConsultaAmpliaComponent implements OnInit {
  
  NUMDELPADRECERO: string = '0';
  NUMDELPADREUNO: string = '1';
  NUMDELPADREDOS: string = '2';
  NUMDELPADRETRES: string = '3';
  NUMDELPADRECUATRO: string = '4';

  CONSULTADELPADRE: string = 'C5R';

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.setItem(
      'C5R',
      '{"0": "false", "1": "false", "2": "false", "3": "false", "4": "false"}'
    );
  }
}

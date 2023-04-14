import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-profunda',
  templateUrl: './consulta-profunda.component.html',
  styleUrls: ['./consulta-profunda.component.scss'],
})
export class ConsultaProfundaComponent implements OnInit {
  NUMDELPADRECERO: string = '0';
  NUMDELPADREUNO: string = '1';
  NUMDELPADREDOS: string = '2';
  NUMDELPADRETRES: string = '3';
  NUMDELPADRECUATRO: string = '4';
  NUMDELPADRECINCO: string = '5';

  CONSULTADELPADRE: string = 'CCR';

  ngOnInit() {
    localStorage.setItem(
      'CCR',
      '{"0": "false", "1": "false", "2": "false", "3": "false", "4": "false", "5": "false"}'
    );
  }
}

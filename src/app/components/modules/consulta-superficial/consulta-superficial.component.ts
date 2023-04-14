import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-superficial',
  templateUrl: './consulta-superficial.component.html',
  styleUrls: ['./consulta-superficial.component.scss']
})
export class ConsultaSuperficialComponent implements OnInit {

  NUMDELPADRECERO: string = '0';
  NUMDELPADREUNO: string = '1';
  NUMDELPADREDOS: string = '2';
  CONSULTADELPADRE: string = 'C3R';

  ngOnInit() {
    localStorage.setItem('C3R', '{"0": "false", "1": "false", "2": "false"}');
  }
}

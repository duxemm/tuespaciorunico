import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiradas',
  templateUrl: './tiradas.component.html',
  styleUrls: ['./tiradas.component.scss']
})
export class TiradasComponent {

  consejoItem: boolean = false;
  superficialItem: boolean = false;
  ampliaItem: boolean = false;
  profundaItem: boolean = false;
  aviso: boolean = true;
  actions: boolean = false;
  hexagonClassC: string = 'hexagon';
  hexagonClassS: string = 'hexagon';
  hexagonClassA: string = 'hexagon';
  hexagonClassP: string = 'hexagon';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.showerSwitch(params['tirada']);  
    });
  }

  showerSwitch(itemSelected: string) {

    switch(itemSelected) {
      case 'consejo': {
        this.consejoItem = true;
        this.superficialItem = false;
        this.ampliaItem = false;
        this.profundaItem = false;
        this.aviso = false;
        this.actions = true;
        this.hexagonClassC = 'hexagon-selected';
        this.hexagonClassS = 'hexagon';
        this.hexagonClassA = 'hexagon';
        this.hexagonClassP = 'hexagon';
        break
      }
      case 'superficial': {
        this.consejoItem = false;
        this.superficialItem = true;
        this.ampliaItem = false;
        this.profundaItem = false;
        this.aviso = false;
        this.actions = true;
        this.hexagonClassS = 'hexagon-selected';
        this.hexagonClassC = 'hexagon';
        this.hexagonClassA = 'hexagon';
        this.hexagonClassP = 'hexagon';
        break
      }
      case 'amplia': {
        this.consejoItem = false;
        this.superficialItem = false;
        this.ampliaItem = true;
        this.profundaItem = false;
        this.aviso = false;
        this.actions = true;
        this.hexagonClassA = 'hexagon-selected';
        this.hexagonClassS = 'hexagon';
        this.hexagonClassC = 'hexagon';
        this.hexagonClassP = 'hexagon';
        break
      }
      case 'profunda': {
        this.consejoItem = false;
        this.superficialItem = false;
        this.ampliaItem = false;
        this.profundaItem = true;
        this.aviso = false;
        this.actions = true;
        this.hexagonClassP = 'hexagon-selected';
        this.hexagonClassS = 'hexagon';
        this.hexagonClassA = 'hexagon';
        this.hexagonClassC = 'hexagon';
        break
      }
      default : {
        this.consejoItem = false;
        this.superficialItem = false;
        this.ampliaItem = false;
        this.profundaItem = false;
        this.aviso = true;
        this.actions = false;
        this.hexagonClassC = 'hexagon';
        this.hexagonClassS = 'hexagon';
        this.hexagonClassA = 'hexagon';
        this.hexagonClassP = 'hexagon';
        break
      }
    }

  }

}

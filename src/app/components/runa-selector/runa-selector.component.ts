import { Component, OnInit } from '@angular/core';
import { RunasInterface } from 'src/app/interfaces/runas-interface';
import runasJsonList from 'src/assets/archivos/runas.json';

@Component({
  selector: 'app-runa-selector',
  templateUrl: './runa-selector.component.html',
  styleUrls: ['./runa-selector.component.less']
})
export class RunaSelectorComponent implements OnInit{

  runasList = [
    'fe','fe-i','ur','ur-i','th','th-i','an','an-i','ra','ra-i','ka','ka-i',
    'ge','wu','wu-i','ha','na','na-i','is','je','ei',
    'pe','pe-i','al','al-i','so','te','te-i','be','be-i','eh','eh-i','ma',
    'ma-i','la','la-i','in','da','ot','ot-i','od'];

  runasJson: RunasInterface[] = runasJsonList;

  contador = 0;

  TOTAL_RUNAS = 41;

  intervalSeleccion: any;

  IMAGE_RUNES: String = "/assets/archivos/img/logo.png";

  isIniciar: boolean = true;
  isSeleccionar: boolean = false;
  isGif: boolean = false;


  
  ngOnInit() {


  }


  iniciar() {

    console.log("Iniciando.....");

    this.isIniciar = false
    this.isSeleccionar = true
    this.isGif = true

    this.contador = -1
    this.IMAGE_RUNES = "/assets/archivos/img/runas-gif.gif"
    this.intervalSeleccion = setInterval(() => {
      this.seleccionar();
    }
      , 100);

  }

  seleccionar() {

    this.contador++;
    this.shuffledNumbersMethod();
    
  }

  detener() {
    this.isGif = false
    clearInterval(this.intervalSeleccion)
    if (this.contador > this.TOTAL_RUNAS) {
      let entero = 0
      this.contador = this.contador / this.TOTAL_RUNAS
      entero = Math.trunc(this.contador)
      this.contador = Math.trunc((this.contador - entero) * this.TOTAL_RUNAS)
    }

    this.IMAGE_RUNES = this.findRuna(this.runasList[this.contador])

    this.isSeleccionar = false
    this.isIniciar = true
    
  }
  
  shuffledNumbersMethod() {

    return this.runasList.sort(function () {
      return Math.random() - 0.5;
    });

  }

  findRuna(abrevRune: String) {  
    return this.runasJson.filter(runa => runa.abrev == abrevRune)[0].coord;
  }

}

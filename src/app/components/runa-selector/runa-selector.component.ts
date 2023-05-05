import { Component, Input, OnInit } from '@angular/core';
import { RunasInterface } from 'src/app/interfaces/runas-interface';
import { MatDialog } from '@angular/material/dialog';
import runasJsonList from 'src/assets/archivos/runas.json';
import { VerMasComponent } from '../modules/ver-mas/ver-mas.component';

@Component({
  selector: 'app-runa-selector',
  templateUrl: './runa-selector.component.html',
  styleUrls: ['./runa-selector.component.scss'],
})
export class RunaSelectorComponent implements OnInit {
  @Input() MINUMERO: string = '';
  @Input() MICONSULTA: string = '';

  runasList = [
    'fe',
    'fe-i',
    'ur',
    'ur-i',
    'th',
    'th-i',
    'an',
    'an-i',
    'ra',
    'ra-i',
    'ka',
    'ka-i',
    'ge',
    'wu',
    'wu-i',
    'ha',
    'na',
    'na-i',
    'is',
    'je',
    'ei',
    'pe',
    'pe-i',
    'al',
    'al-i',
    'so',
    'te',
    'te-i',
    'be',
    'be-i',
    'eh',
    'eh-i',
    'ma',
    'ma-i',
    'la',
    'la-i',
    'in',
    'da',
    'ot',
    'ot-i',
    'od',
  ];

  runasJson: RunasInterface[] = runasJsonList;

  contador = 0;

  TOTAL_RUNAS = 41;

  intervalSeleccion: any;

  IMAGE_RUNES = '/assets/archivos/img/logo.png';

  runaName = '';
  runaSig = '';
  runaDesc = '';

  isIniciar: boolean = true;
  isSeleccionar: boolean = false;
  isGif: boolean = false;
  isDialog: boolean = false;

  padre = 'padre-ap';
  images = 'images-ap';
  btnsBox = 'btns-box-ap';
  btn = 'btn-ap';
  card = 'card-ap';

  gif = 'gif-ap';
  btnMas = 'btn-mas-ap';

  runa = 'runa-ap';
  isButtonDisable = false;

  miConsulta = 'CC';
  miNumero = '0';
  localS: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.miConsulta = this.MICONSULTA;
    this.miNumero = this.MINUMERO;

    setInterval(() => {
      this.validarFuncionalidad()
     }, 200);
  }

  validarFuncionalidad() {
    try {
      this.localS = localStorage.getItem(this.miConsulta);
    } catch (error) {
      this.localS = '{}';
    }

    this.localS = JSON.parse(this.localS);

    if (this.miConsulta !== 'CC' && this.miNumero !== '0') {
      let mn = parseInt(this.miNumero) - 1;     
      if (this.localS[mn.toString()] === "false") {
        this.runa = 'runa-disable';
        this.isButtonDisable = true;
      } 

      if (this.localS[mn.toString()] === "true") {
        console.log('entro a activar');
        
        this.runa = 'runa-ap';
        this.isButtonDisable = false;
      }
      
    }
  }

  iniciar() {

    this.isIniciar = false;
    this.isSeleccionar = true;
    this.isGif = true;
    this.isDialog = false;

    this.contador = -1;
    this.IMAGE_RUNES = '/assets/archivos/img/runas-gif.gif';
    this.intervalSeleccion = setInterval(() => {
      this.seleccionar();
    }, 100);
  }

  seleccionar() {
    this.contador++;
    this.shuffledNumbersMethod();
  }

  detener() {
    this.isGif = false;
    clearInterval(this.intervalSeleccion);
    if (this.contador > this.TOTAL_RUNAS) {
      let entero = 0;
      this.contador = this.contador / this.TOTAL_RUNAS;
      entero = Math.trunc(this.contador);
      this.contador = Math.trunc((this.contador - entero) * this.TOTAL_RUNAS);
    }

    this.findRuna(this.runasList[this.contador]);

    this.isSeleccionar = false;
    this.isIniciar = true;
    this.isDialog = true;

    this.localS[this.miNumero] = "true";

    localStorage.setItem(this.miConsulta, JSON.stringify(this.localS));
    
  }

  shuffledNumbersMethod() {
    return this.runasList.sort(function () {
      return Math.random() - 0.5;
    });
  }

  findRuna(abrevRune: String) {
    this.IMAGE_RUNES = this.runasJson.filter(
      (runa) => runa.abrev == abrevRune
    )[0].coord;
    this.runaName = this.runasJson.filter(
      (runa) => runa.abrev == abrevRune
    )[0].name;
    this.runaSig = this.runasJson.filter(
      (runa) => runa.abrev == abrevRune
    )[0].sig;
    this.runaDesc = this.runasJson.filter(
      (runa) => runa.abrev == abrevRune
    )[0].desc;
  }

  openDialog() {
    this.dialog.open(VerMasComponent, {
      data: {
        name: this.runaName,
        text: this.runaDesc,
        img: this.IMAGE_RUNES,
        sig: this.runaSig,
      },
    });
  }
}

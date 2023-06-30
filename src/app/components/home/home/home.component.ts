import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  defaultTouch = { x: 0, y: 0, time: 0 };

  imgBackgroundRoute: string = '';
  imgNumber = 1;
  maxImg = 7;
  minImg = 1;
  maxImgMbl = 13;
  minImgMbl = 7;
  textoMatriz = [
    'En determinadas situaciones, es necesario comprender o ampliar nuestra perspectiva, y en esos momentos las runas pueden ser muy útiles. Por esta razón, Tu espacio rúnico es un sitio creado para descubrir y comprender el mensaje que encierran las Runas Antiguas.',
    'Únete a mí en este recorrido para descubrir juntos los secretos que se ocultan en las runas. Para esto, utilizaremos TER, un simulador virtual de consultas runicas.',
    'Sin embargo, antes de acceder a él, es importante que comprendamos algunos conceptos fundamentales que nos permitirán tener una experiencia más enriquecedora y personalizada.',
    'Empecemos por aprender...',
    '¿Qué son las runas?',
    'El término "runa" significa enigmático, susurro o secreto y se utiliza para adivinación y resolución de dudas. El alfabeto Futhark, compuesto por líneas rectas, tiene letras con nombres y sonidos significativos. En el pasado, las runas se grababan en madera o hueso, pero ahora se pueden plasmar en diferentes materiales.',
    '¿Qué es un oraculo?',
    'Para comprender a las runas, es esencial comprender ¿Qué es? y ¿Cómo funciona un oráculo?. El oráculo es una herramienta que proporciona una respuesta divina a través de un intermediario y a veces se manifiesta en señales físicas o símbolos que los expertos interpretan.',
    'El oráculo no da instrucciones o predicciones, sino que enfoca en los motivos y miedos ocultos que influyen en el futuro. Al reconocer estas opciones, puede mostrar una nueva oportunidad o confirmar una alternativa existente.',
    '¿Cómo funcionan las runas?',
    '¿Cómo pueden las Runas ser útiles en mi vida cotidiana? Aunque se han propuesto varias teorías para responder a esta pregunta, exploraremos algunas posibilidades. Una explicación podría ser que las interpretaciones de las Runas son tan evocativas que cada una ofrece un consejo aplicable a algún aspecto de nuestra vida en cualquier momento del día.',
    'En mi opinión, estos símbolos aleatorios pueden ser una forma en la que nuestro ser superior y sabio nos transmite mensajes y consejos, recordándonos que la solución a cualquier adversidad está en nuestro interior.',
    'Siéntete en libertad de explorar y participar en las secciones que se encuentran debajo, comparte tus vivencias con este sitio mediante mis redes sociales. Te doy la bienvenida..',
  ];
  numTextoActual = 0;
  textoslide = this.textoMatriz[this.numTextoActual];
  isMobile = false;

  @HostListener('touchstart', ['$event'])
  //@HostListener('touchmove', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: any) {

    let touch = event.touches[0] || event.changedTouches[0];

    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      console.log(deltaTime);
      console.log(`deltax -> ${Math.abs(deltaX)}`);
      
      // simulte a swipe -> less than 500 ms and more than 60 px
      if (deltaTime < 500) {
        // touch movement lasted less than 500 ms
        if (Math.abs(deltaX) > 60) {
          // delta x is at least 60 pixels
          if (deltaX > 0) {
            // Swipe Rigth
            this.previous();
          } else {
            // Swipe Left
            this.next();
            
          }
        }
      }
    }
  }

  constructor(private responsive: BreakpointObserver) {
    this.imgBackgroundRoute = `/assets/archivos/img/backgrounds/bg-${this.imgNumber}.jpg`;
    this.getSize();
  }

  previous() {
    if (this.numTextoActual == 0) {
      this.textoslide = this.textoMatriz[this.textoMatriz.length - 1];
      this.numTextoActual = this.textoMatriz.length - 1;
    } else {
      this.numTextoActual--;
      this.textoslide = this.textoMatriz[this.numTextoActual];
    }
    if (this.isMobile) {
      this.getRandomArbitraryImage(this.minImgMbl, this.maxImgMbl);
    } else {
      this.getRandomArbitraryImage(this.minImg, this.maxImg);
    }
  }

  next() {
    if (this.numTextoActual == this.textoMatriz.length - 1) {
      this.textoslide = this.textoMatriz[0];
      this.numTextoActual = 0;
    } else {
      this.numTextoActual++;
      this.textoslide = this.textoMatriz[this.numTextoActual];
    }
    if (this.isMobile) {
      this.getRandomArbitraryImage(this.minImgMbl, this.maxImgMbl);
    } else {
      this.getRandomArbitraryImage(this.minImg, this.maxImg);
    }
  }

  getRandomArbitraryImage(min: number, max: number) {
    this.imgNumber = Math.floor(Math.random() * (max - min) + min);
    this.imgBackgroundRoute = `/assets/archivos/img/backgrounds/bg-${this.imgNumber}.jpg`;
  }

  selectText() {
    if (this.numTextoActual == this.textoMatriz.length) {
      this.numTextoActual = 0;
      this.textoslide = this.textoMatriz[this.numTextoActual++];
    }
    this.textoslide = this.textoMatriz[this.numTextoActual++];
  }

  getSize() {
    this.responsive.observe([Breakpoints.XSmall]).subscribe((result) => {
      this.isMobile = false;
      this.imgBackgroundRoute = `/assets/archivos/img/backgrounds/bg-${this.imgNumber}.jpg`;

      if (result.matches) {
        this.isMobile = true;
        this.imgBackgroundRoute = `/assets/archivos/img/backgrounds/bg-7.jpg`;
      } else {
        this.isMobile = false;
        this.imgBackgroundRoute = `/assets/archivos/img/backgrounds/bg-1.jpg`;
      }
    });
  }
}

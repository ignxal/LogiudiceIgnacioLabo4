import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ejercicio Clase 1 - Ignacio Logiudice ';
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  calcular() {
    if (this.edadUno >= 0 && this.edadDos >= 0) {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = (this.edadUno + this.edadDos) / 2;
    }
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES, 'es');

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  texto: string = 'Texto que se va a ir transformando';
  numero: number = 1200.753;
  fecha: Date = new Date();
  nombre: string = "GARCÍA LÓPEZ, ANTONIO"; // ANTONIO GARCÍA LÓPEZ
  precio: number = 67.59;

  constructor() { }

  ngOnInit(): void {
  }

}

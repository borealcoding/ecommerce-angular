import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent implements OnInit {
  @Input() articulo?: Articulo;
  @Input() textoBoton: string = "Detalles";
  @Output() click: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  constructor() { }

  ngOnInit(): void {
  }

  public clickBoton(): void {
    this.click.emit(this.articulo);
  }
}

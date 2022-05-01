import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Categorias } from '../categorias.model';

@Component({
  selector: 'app-categorias-card',
  templateUrl: './categorias-card.component.html',
  styleUrls: ['./categorias-card.component.scss']
})
export class CategoriasCardComponent implements OnInit {
  @Input() categoria?: Categorias;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public getArticulosRest(): void {
    this.click.emit(this.categoria?.getId());
  }

}

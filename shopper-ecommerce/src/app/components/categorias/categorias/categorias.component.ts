import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { Categorias } from '../categorias.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: Categorias[] = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.getCategoriasRest();
  }

  private getCategoriasRest() {
    this.categoriasService.getCategoriasRest().subscribe(
      (data) => {
        data.forEach((categoria) => {
          const categoriaObtenida: Categorias = new Categorias(categoria.id, categoria.nombreCategoria, categoria.imagen);
          this.categorias.push(categoriaObtenida);
        })
      }
    );
  }

}

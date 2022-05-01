import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {
  articulos: Articulo[] = [];
  modo?: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.getArticuloParams();
    this.getArticulosRest();
  }

  private getArticulosRest() {
    this.articuloService.getArticulosRest().subscribe(
      (data) => {
        data.forEach((articulo) => {
          this.articulos.push(articulo);
        })
      }
    );
  }

  private getArticuloParams(): void {
    this.modo = (this.route.snapshot.queryParamMap.get('modo')) ?? undefined;
  }

  public navigateToArticulo(articulo: Articulo): void {
    this.router.navigate(['articulo-ficha', articulo.id]);
  }

}

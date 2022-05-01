import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {
  articulo: Articulo = new Articulo();
  // idArticulo?: string;

  constructor(private route: ActivatedRoute, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    let idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
    // let idArticulo = this.route.snapshot.paramMap.get('idArticulo');
    this.articuloService.getArticuloRest(idArticulo).subscribe(
      (data: any) => {
        this.articulo = data[0];
      }
    )
  }

}

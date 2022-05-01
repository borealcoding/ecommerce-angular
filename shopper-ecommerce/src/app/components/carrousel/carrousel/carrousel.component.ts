import { Component, Input, OnInit } from '@angular/core';
import { CarrouselService } from 'src/app/services/carrousel/carrousel.service';
import { Carrousel } from '../carrousel.model';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  //@Input() carrousel?: Carrousel;
  carrouselItems: Carrousel[] = [];

  constructor(private carrouselService: CarrouselService) { }

  ngOnInit(): void {
    this.getCarrouselItemsRest();
  }

  private getCarrouselItemsRest() {
    this.carrouselService.getCarrouselItemsRest().subscribe(
      (data) => {
        data.forEach((carrousel) => {
          const carrouselItemObtenido: Carrousel = new Carrousel(carrousel.id, carrousel.imagen);
          this.carrouselItems.push(carrouselItemObtenido);
        })
      }
    );
  }

}

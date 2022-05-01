import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarrousel } from 'src/app/components/carrousel/carrousel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  constructor(private http: HttpClient) { }

  public getCarrouselItemsRest(): Observable<ICarrousel[]> {
    const urlEndPoint: string = "http://localhost:3001/carrousel";
    return this.http.get<ICarrousel[]>(urlEndPoint);
  }
}

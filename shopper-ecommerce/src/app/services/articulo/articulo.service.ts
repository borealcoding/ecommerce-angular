import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulo } from 'src/app/components/articulo/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  public getArticulosRest(): Observable<IArticulo[]> {
    const urlEndPoint: string = "http://localhost:3001/items";
    return this.http.get<IArticulo[]>(urlEndPoint);
  }

  public getArticuloRest(idArticulo: any): Observable<IArticulo> {
    const urlEndPoint: string = "http://localhost:3001/items/" + `articulo-ficha/${idArticulo}`;
    return this.http.get<IArticulo>(urlEndPoint);
  }
}

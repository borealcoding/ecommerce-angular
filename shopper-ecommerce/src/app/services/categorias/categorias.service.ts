import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorias } from 'src/app/components/categorias/categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public getCategoriasRest(): Observable<ICategorias[]> {
    const urlEndPoint: string = "http://localhost:3001/categories";
    return this.http.get<ICategorias[]>(urlEndPoint);
  }
}

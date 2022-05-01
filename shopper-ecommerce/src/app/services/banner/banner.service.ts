import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from 'src/app/components/banner/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  public getBannersRest(): Observable<IBanner[]> {
    const urlEndPoint: string = "http://localhost:3001/banner";
    return this.http.get<IBanner[]>(urlEndPoint);
  }
}

import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Banner } from '../banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banners: Banner[] = [];

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.getBannersRest();
  }

  private getBannersRest() {
    this.bannerService.getBannersRest().subscribe(
      (data) => {
        data.forEach((banner) => {
          const bannerObtenido: Banner = new Banner(banner.id, banner.imagen);
          this.banners.push(bannerObtenido);
        })
      }
    );
  }


}

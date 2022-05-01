import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../banner.model';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {
  @Input() banner?: Banner;

  constructor() { }

  ngOnInit(): void {
  }

}

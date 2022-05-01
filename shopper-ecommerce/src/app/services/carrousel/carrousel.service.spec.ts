import { TestBed } from '@angular/core/testing';

import { CarrouselService } from './carrousel.service';

describe('CarrouselService', () => {
  let service: CarrouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

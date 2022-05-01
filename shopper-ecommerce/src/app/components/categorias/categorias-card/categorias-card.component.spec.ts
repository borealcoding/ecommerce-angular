import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCardComponent } from './categorias-card.component';

describe('CategoriasCardComponent', () => {
  let component: CategoriasCardComponent;
  let fixture: ComponentFixture<CategoriasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

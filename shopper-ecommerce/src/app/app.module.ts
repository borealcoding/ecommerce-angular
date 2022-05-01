import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda/tienda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros/nosotros.component';
import { ArticuloListComponent } from './components/articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './components/articulo/articulo-form/articulo-form.component';
import { BannerComponent } from './components/banner/banner/banner.component';
import { PipesComponent } from './pipes/pipes.component';
import { InversorNombrePipe } from './shared/inversor-nombre.pipe';
import { ArticuloCardComponent } from './components/articulo/articulo-card/articulo-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerCardComponent } from './components/banner/banner-card/banner-card.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CategoriasCardComponent } from './components/categorias/categorias-card/categorias-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    NavbarComponent,
    NosotrosComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    BannerComponent,
    PipesComponent,
    InversorNombrePipe,
    ArticuloCardComponent,
    BannerCardComponent,
    CategoriasComponent,
    CategoriasCardComponent,
    CarrouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

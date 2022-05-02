import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './components/tienda/tienda/tienda.component';
import { NosotrosComponent } from './components/nosotros/nosotros/nosotros.component';
import { ArticuloListComponent } from './components/articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './components/articulo/articulo-form/articulo-form.component';


const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'articulos', component: ArticuloListComponent},
  { path: 'articulo-ficha/:idArticulo', component: ArticuloFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCatalogueComponent } from './pages/pokemoncatalogue/pokemoncatalogue.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonCatalogueComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCatalogueComponent } from './pages/pokemoncatalogue/pokemoncatalogue.component';
import { PokemonDetailsComponent } from './pages/pokemondetails/pokemondetails.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonCatalogueComponent
  },
  {
    path: 'pokemons/details/:id',
    component: PokemonDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

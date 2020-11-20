import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PokemonCatalogueComponent } from './pages/pokemoncatalogue/pokemoncatalogue.component';
import { PokemonDetailsComponent } from './pages/pokemondetails/pokemondetails.component';

import { SelectTrainerComponent } from './pages/select-trainer/select-trainer.component';
import { TrainerComponent } from './pages/trainer/trainer.component';

const routes: Routes = [
  { path: 'login', component: SelectTrainerComponent },
  { path: 'trainer', component: TrainerComponent, canActivate: [ AuthGuard ] },
  { path: 'pokemons', component: PokemonCatalogueComponent },
  { path: 'pokemons/details/:id', component: PokemonDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

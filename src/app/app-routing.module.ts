import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCatalogueComponent } from './pages/pokemoncatalogue/pokemoncatalogue.component';
import { SelectTrainerComponent } from './pages/select-trainer/select-trainer.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonCatalogueComponent },
  { path: '', component: SelectTrainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

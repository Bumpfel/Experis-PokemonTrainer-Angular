import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PokemonCatalogueComponent } from './pages/pokemoncatalogue/pokemoncatalogue.component';
import { SelectTrainerComponent } from './pages/select-trainer/select-trainer.component';
import { TrainerComponent } from './pages/trainer/trainer.component';

const routes: Routes = [
  { path: 'trainer', component: TrainerComponent, canActivate: [ AuthGuard ] },
  { path: 'pokemons', component: PokemonCatalogueComponent },
  { path: '', component: SelectTrainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

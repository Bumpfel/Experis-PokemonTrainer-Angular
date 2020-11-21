// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { PokemonCatalogueComponent } from 'src/app/pages/pokemoncatalogue/pokemoncatalogue.component';
import { PokemonDetailsComponent } from './pages/pokemondetails/pokemondetails.component';
import { MenuComponent } from './components/menu/menu.component';

// Services
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { FetchService } from './services/fetch.service';
import { SelectTrainerComponent } from './pages/select-trainer/select-trainer.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent,
    PokemonDetailsComponent,
    SelectTrainerComponent,
    TrainerComponent,
    MenuComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    FetchService,
    AuthService,
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

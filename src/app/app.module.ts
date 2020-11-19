// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { PokemonCatalogueComponent } from 'src/app/pages/pokemoncatalogue/pokemoncatalogue.component';
import { PokemonDetailsComponent } from './pages/pokemondetails/pokemondetails.component';

// Services
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { FetchService } from './services/fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FetchService,
    AuthService,
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

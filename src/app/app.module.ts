// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { PokemonCatalogueComponent } from 'src/app/pages/pokemoncatalogue/pokemoncatalogue.component';
import { PokemonDetailsComponent } from './pages/pokemondetails/pokemondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

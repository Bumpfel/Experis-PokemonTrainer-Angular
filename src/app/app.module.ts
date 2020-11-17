// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { PokemonCatalogueComponent } from 'src/app/pages/pokemoncatalogue/pokemoncatalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

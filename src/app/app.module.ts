// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { PokemonCatalogueComponent } from 'src/app/pages/pokemoncatalogue/pokemoncatalogue.component';

// Services
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { FetchService } from './services/fetch.service';
import { SelectTrainerComponent } from './pages/select-trainer/select-trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogueComponent,
    SelectTrainerComponent
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

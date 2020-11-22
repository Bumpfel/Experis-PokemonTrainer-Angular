import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/services/auth.service';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-pokemoncatalogue',
  templateUrl: './pokemoncatalogue.component.html',
  styleUrls: ['./pokemoncatalogue.component.scss']
})
export class PokemonCatalogueComponent implements OnInit {

  pokemons: Pokemon[] = [];
  currentPage: number = 0
  maxPage: number = 0
  isLoaded = false

  constructor(private fetchService: FetchService, public route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  async fetchPokemons(page: number): Promise<void> {
    this.isLoaded = false
    this.currentPage = page
    const data = await this.fetchService.getPokemons(page)
    
    // due to async requests, results can come back in "incorrect" order, thus showing the wrong page
    // this makes sure the latest requested page data is shown
    if(page === this.currentPage) {
      this.maxPage = data.maxPage
      this.pokemons = data.pokemons;
      this.isLoaded = true
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

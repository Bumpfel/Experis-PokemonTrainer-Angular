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

  pokemons: Pokemon[] | undefined;
  currentPage: number = 0
  maxPage: number = 0

  constructor(private fetchService: FetchService, public route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getPokemons(0)
  }

  async getPokemons(page: number) {
    const data = await this.fetchService.getPokemons(page)
    this.maxPage = data.maxPage
    this.pokemons = data.pokemons;
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-pokemoncatalogue',
  templateUrl: './pokemoncatalogue.component.html',
  styleUrls: ['./pokemoncatalogue.component.scss']
})
export class PokemonCatalogueComponent implements OnInit {

  pokemonz: Pokemon[] | undefined;
  
  constructor(private fetchService: FetchService) {
    console.log(this.fetchService);
   }

  ngOnInit(): void {
  }

  getPokemons() {
  this.fetchService.getPokemons().then(data => {
    this.pokemonz = data;
  });
  }

}

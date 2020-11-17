import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-pokemoncatalogue',
  templateUrl: './pokemoncatalogue.component.html',
  styleUrls: ['./pokemoncatalogue.component.scss']
})
export class PokemonCatalogueComponent implements OnInit {

  pokemon: Pokemon = { 
    name: 'Pikachu', 
    imgUrl: 'https://vignette.wikia.nocookie.net/sonicpokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/1000?cb=20200831092023' 
  }
  pokemon2: Pokemon = { 
    name: 'Squirtle', 
    imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' 
  }
  pokemon3: Pokemon = { 
    name: 'Bulbasaur', 
    imgUrl: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png' 
  }
  pokemon4: Pokemon = { 
    name: 'Charmander', 
    imgUrl: 'https://vignette.wikia.nocookie.net/sonicpokemon/images/e/e0/Charmander_AG_anime.png/revision/latest?cb=20130714191911' 
  }
  pokemon5: Pokemon = { 
    name: 'Meowth', 
    imgUrl: 'https://vignette.wikia.nocookie.net/sonicpokemon/images/0/02/Meowth_anime.png/revision/latest?cb=20130624045447' 
  }

  pokemons: any = [this.pokemon, this.pokemon2, this.pokemon3, this.pokemon4, this.pokemon5];

  constructor() { }

  ngOnInit(): void {
  }

}

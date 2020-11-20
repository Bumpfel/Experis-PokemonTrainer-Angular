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
  detailId = this.route.snapshot.params['id'];

  constructor(private fetchService: FetchService, public route: ActivatedRoute, private authService: AuthService) {
   }

  ngOnInit(): void {
    
    this.fetchService.getPokemons().then(data => {
    this.pokemons = data;
    });
  
  }

  getDetails(id: any) {
    this.fetchService.getPokemon(id).then(data => {
      this.pokemons = [data];
    });
  }

  get isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}

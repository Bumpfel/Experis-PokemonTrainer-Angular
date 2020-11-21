import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss'], 
})
export class PokemonDetailsComponent implements OnInit {

  pokemons: Pokemon[] | undefined;
  detailId = this.route.snapshot.params['id'];


  constructor(private fetchService: FetchService, public route: ActivatedRoute) {
   }

  ngOnInit(): void {
      this.fetchService.getPokemon(this.detailId).then(data => {
      this.pokemons = [data];
    });
  }

  goBack() {
    window.history.go(-1)
  }
  
}

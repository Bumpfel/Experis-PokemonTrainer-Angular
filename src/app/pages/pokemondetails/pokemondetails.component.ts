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

  pokemon: Pokemon | undefined;
  
  constructor(private fetchService: FetchService, public route: ActivatedRoute) {
  }
  
  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params['id'];
    this.pokemon = await this.fetchService.getPokemon(id)
  }

  goBack(): void {
    window.history.go(-1)
  }
}

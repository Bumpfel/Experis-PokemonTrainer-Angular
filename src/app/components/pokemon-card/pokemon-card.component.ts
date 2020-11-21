import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon = {} as Pokemon;
  @Input() showCollectButton: boolean = false;

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  addPokemon(){
    this.trainerService.addPokemon(this.pokemon);
  }

  get acquiredPokemon(){
    return this.trainerService.hasPokemon(this.pokemon);
  }

}

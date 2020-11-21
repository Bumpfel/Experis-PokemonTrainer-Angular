import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { Trainer } from '../models/trainer';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  pokemon: Pokemon[] | undefined;

  constructor(private storageService: StorageService, private route: ActivatedRoute) { }

  addPokemon(pokemon: Pokemon){
    const trainer = this.storageService.getActiveTrainer() as Trainer
    if (!trainer.pokemons){
      trainer.pokemons = [] 
    }
    trainer.pokemons.push(pokemon);
    this.storageService.save(trainer, false);
  }

  hasPokemon(pokemon: Pokemon): boolean{
    const trainer = this.storageService.getActiveTrainer() as Trainer
    if (!trainer.pokemons){
      return false;
    }  

    const foundPokemon = trainer.pokemons.find((chosenPokemon:Pokemon) => chosenPokemon.id === pokemon.id);
    return Boolean(foundPokemon);
  }

}

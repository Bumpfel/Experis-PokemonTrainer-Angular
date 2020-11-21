import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Trainer } from 'src/app/models/trainer';
import { StorageService } from 'src/app/services/storage.service';
import { TrainerService } from 'src/app/services/trainer.service';

const POKEMONS_PER_PAGE = 20

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  
  trainer: Trainer | undefined
  paginatedPokemons: Pokemon[] | undefined
  maxPage: number = 0

  constructor(private storageService: StorageService, private trainerService: TrainerService) { }
  
  ngOnInit(): void {
    const stored = this.storageService.getActiveTrainer();
    if(stored) {
      this.trainer = stored
      this.paginate(0)
      
      if(this.trainer.pokemons) {
        this.maxPage = Math.ceil((this.trainer.pokemons.length) / POKEMONS_PER_PAGE)
      }
    }
  }

  paginate(page: number) {
    if(this.trainer && this.trainer.pokemons) {
      const from = page * POKEMONS_PER_PAGE
      this.paginatedPokemons = this.trainer.pokemons.slice(from, from + POKEMONS_PER_PAGE)
    }
  }
}

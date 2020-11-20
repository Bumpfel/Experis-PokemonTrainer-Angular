import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private fetchLimit: number = 20

  constructor() { }

  async getPokemons(page: number = 0): Promise<Pokemon[]> {
    const offset = page * this.fetchLimit

    const response = await fetch(`${environment.apiUrl}/pokemon?limit=${this.fetchLimit}&offset=${offset}`)
    const parsed = JSON.parse(await response.text())
    
    const results = parsed.results
    const pokemons: Pokemon[] = []
     
    results.forEach(async (pokemon: any) => {
      const resp = await fetch(pokemon.url)
      const details = JSON.parse(await resp.text())
      pokemons.push({ id: details.id, name: pokemon.name, imgUrl: details.sprites.front_default})
    })
    
    return pokemons
  }

  async getPokemon(id: number): Promise<Pokemon> {
    const response = await fetch(`${environment.apiUrl}/pokemon/${id}`)
    const pokemon = JSON.parse(await response.text())
    
    const baseStats: { [key: string]: number } = {}
    pokemon.stats.forEach((item: any) => baseStats[item.stat.name] = item.base_stat)
    
    return {
      id: pokemon.id,
      name: pokemon.name,
      imgUrl: pokemon.sprites.front_default,
      types: pokemon.types.map((item: any) => item.type.name),
      baseStats,
      height: pokemon.height,
      weight: pokemon.weight,
      abilities: pokemon.abilities.map((item: any) => item.ability.name),
      baseXP: pokemon.base_experience,
      moves: pokemon.moves.map((item: any) => item.move.name)
    }
  }
}
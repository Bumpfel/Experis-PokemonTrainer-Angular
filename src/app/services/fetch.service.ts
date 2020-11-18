import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private fetchLimit: number = 20

  constructor() { }

  async getPokemons(page: number = 0): Promise<Pokemon[]> {
    const offset = page * this.fetchLimit

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.fetchLimit}&offset=${offset}`)
    const parsed = JSON.parse(await response.text())
    const results = parsed.results
    const pokemons: Pokemon[] = []
  
    results.forEach(async (pokemon: any) => {
      const resp = await fetch(pokemon.url)
      const details = JSON.parse(await resp.text())
      pokemons.push({ name: pokemon.name, imgUrl: details.sprites.front_default})
    })

    return pokemons
  }

  async getPokemon(id: number): Promise<Pokemon> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = JSON.parse(await response.text())
    
    const baseStats = new Map<string, number>()

    return {
      name: pokemon.name,
      imgUrl: pokemon.sprites.front_default,
      types: pokemon.types.map((item: any) => item.type.name),
      baseStats: pokemon.stats.forEach((item: any) => baseStats.set(item.stat.name, item.base_stat)),
      height: pokemon.height,
      weight: pokemon.weight,
      abilities: pokemon.abilities.map((item: any) => item.ability.name),
      baseXP: pokemon.base_experience,
      moves: pokemon.moves.map((item: any) => item.move.name)
    }
  }
}

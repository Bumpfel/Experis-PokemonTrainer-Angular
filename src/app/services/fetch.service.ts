import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private fetchLimit: number = 20
  // private prev: string | undefined
  // private next: string | undefined

  constructor() { }

  async getPokemons(page: number = 0): Promise<Pokemon[]> {
    let response = undefined
    const offset = page * this.fetchLimit

    response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.fetchLimit}&offset=${offset}`)
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
}

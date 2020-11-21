import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private fetchLimit = 20

  constructor(private httpClient: HttpClient) { }

  async getPokemons(page: number = 0): Promise<{ maxPage: number, pokemons: Pokemon[] }> {
    const offset = page * this.fetchLimit
    let pokemons: Pokemon[] = []

    const data: any = await this.httpClient.get(`${environment.apiUrl}/pokemon?limit=${this.fetchLimit}&offset=${offset}`).toPromise()
    const results = data.results
    
    const maxPage = Math.ceil((data.count - 1) / this.fetchLimit)
   
    for(let i = 0; i < results.length; i ++) {
      const pokemon = results[i]
      const details: any = await this.httpClient.get(pokemon.url).toPromise()
      pokemons[i] = { id: details.id, name: pokemon.name, imgUrl: details.sprites.front_default}
    }
    return { maxPage, pokemons }
  }

  async getPokemon(id: number): Promise<Pokemon> {
    const data: any = await this.httpClient.get(`${environment.apiUrl}/pokemon/${id}`).toPromise()

    const baseStats: { [key: string]: number } = {}
    data.stats.forEach((item: any) => baseStats[item.stat.name] = item.base_stat)

    return {
      id: data.id,
      name: data.name,
      imgUrl: data.sprites.front_default,
      types: data.types.map((item: any) => item.type.name),
      baseStats,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((item: any) => item.ability.name),
      baseXP: data.base_experience,
      moves: data.moves.map((item: any) => item.move.name)
    }
  }
}
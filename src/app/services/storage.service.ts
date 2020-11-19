import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private trainerKey: string = 'trainer'

  constructor() { }

  save(trainer: Trainer): void {
    localStorage.setItem(this.trainerKey, JSON.stringify(trainer))
  }

  resetActiveTrainer() {
    localStorage.removeItem(this.trainerKey)
  }

  load(): Trainer | undefined {
    const stored = localStorage.getItem(this.trainerKey)
    if(stored) {
      return JSON.parse(stored)
    }
    return undefined
  }
}

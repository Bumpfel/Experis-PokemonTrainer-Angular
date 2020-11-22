import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer';

const TRAINER_KEY: string = 'trainers'
const ACTIVE_TRAINER_KEY: string = 'activeTrainer'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  /**
   * Sets the trainer as the active trainer and saves it to an array of available trainers if isNew is set to true
   * @param trainer 
   * @param isNew controls whether a new instance should be saved or not
   */
  save(trainer: Trainer, isNew: boolean): void {
    localStorage.setItem(ACTIVE_TRAINER_KEY, JSON.stringify(trainer))
    
    const stored = localStorage.getItem(TRAINER_KEY)
    
    let trainers: Trainer[] = []
    if(stored) {
      trainers = JSON.parse(stored)
  
      if(!isNew) {
        trainers = trainers.filter((t: Trainer) => t.name !== trainer.name)
      }  
    }
    trainers.push(trainer)

    localStorage.setItem(TRAINER_KEY, JSON.stringify(trainers))
  }

  getActiveTrainer(): Trainer | undefined {
    const stored = localStorage.getItem(ACTIVE_TRAINER_KEY)
    if(stored) {
      return JSON.parse(stored)
    }
    return undefined
  }

  resetActiveTrainer(): void {
    localStorage.removeItem(ACTIVE_TRAINER_KEY)
  }

  findTrainer(name: string): Trainer | undefined {
    const stored =  localStorage.getItem(TRAINER_KEY)
    if(stored) {
      const trainers: Trainer[] = JSON.parse(stored)
      return trainers.find((trainer: Trainer) => trainer.name === name)
    }
    return undefined
  }
}

import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private trainersKey: string = 'trainers'
  private activeTrainerKey: string = 'activeTrainer'

  constructor() { }

  /**
   * Sets the trainer as the active trainer and saves it to an array of available trainers if isNew is set to true
   * @param trainer 
   * @param isNew controls whether a new instance should be saved or not
   */
  save(trainer: Trainer, isNew: boolean): void {
    localStorage.setItem(this.activeTrainerKey, JSON.stringify(trainer))
        
    const stored = localStorage.getItem(this.trainersKey)
    
    let trainers = []
    if(stored) {
      trainers = JSON.parse(stored)

      if(isNew) {
        trainers.push(trainer)
      }
    } else {
      trainers.push(trainer)
    }

    localStorage.setItem(this.trainersKey, JSON.stringify(trainers))
  }

  getActiveTrainer(): Trainer | undefined {
    const stored = localStorage.getItem(this.activeTrainerKey)
    if(stored) {
      return JSON.parse(stored)
    }
    return undefined
  }

  resetActiveTrainer() {
    localStorage.removeItem(this.activeTrainerKey)
  }

  findTrainer(name: string): Trainer | undefined {
    const stored =  localStorage.getItem(this.trainersKey)
    if(stored) {
      const trainers: Trainer[] = JSON.parse(stored)
      return trainers.find((trainer: Trainer) => trainer.name === name)
    }
    return undefined
  }
}

import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private trainersKey: string = 'trainers'

  constructor() { }

  save(trainer: Trainer): void {
    localStorage.setItem(this.trainersKey, JSON.stringify(trainer))
  }

  load() {
    return localStorage.getItem(this.trainersKey)
  }
}

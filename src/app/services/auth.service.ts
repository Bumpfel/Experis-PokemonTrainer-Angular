import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../models/trainer';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(name: string): boolean {
    const existingTrainer = this.storageService.findTrainer(name)
    
    if(existingTrainer && !this.validateName(name)) {
      return false
    }

    const trainer = existingTrainer || { name }
    this.storageService.save(trainer, existingTrainer === undefined)
    return true
  }

  logout() {
    this.storageService.resetActiveTrainer()
  }

  isLoggedIn(): boolean {
    return this.storageService.getActiveTrainer() != undefined
  }

  getLoggedInTrainer(): Trainer | undefined {
    return this.storageService.getActiveTrainer()
  }

  private validateName(name: string): boolean {
    return name.trim().length !== 0
  }
}

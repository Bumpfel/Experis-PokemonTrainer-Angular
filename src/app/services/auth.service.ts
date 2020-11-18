import { Injectable } from '@angular/core';

import { Trainer } from '../models/trainer';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  login(name: string): boolean {
    if(name.trim().length === 0) {
      return false
    }
    
    const trainer: Trainer = { name }
    this.storageService.save(trainer)
    return true
  }

  isLoggedIn(): boolean {
    return this.storageService.load() != null
  }
}

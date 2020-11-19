import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer } from '../models/trainer';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService, private router: Router) { }

  login(name: string): boolean {
    if(this.validateName(name)) {
      this.router.navigateByUrl('/trainer')
      this.storageService.save({ name })
      return true
    }
    return false
  }

  logout() {
    // destroys current trainer
    this.storageService.resetActiveTrainer()
  }

  isLoggedIn(): boolean {
    return this.storageService.load() != null
  }

  getLoggedInTrainer(): Trainer | undefined {
    return this.storageService.load()
  }

  private validateName(name: string): boolean {
    return name.trim().length !== 0
  }
}

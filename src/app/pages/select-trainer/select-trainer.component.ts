import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-select-trainer',
  templateUrl: './select-trainer.component.html',
  styleUrls: ['./select-trainer.component.scss']
})
export class SelectTrainerComponent implements OnInit {

  private _activeTrainer: Trainer | undefined

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.updateActiveTrainer()
  }
  
  login(name: string): void {
    this.authService.login(name)
    this.updateActiveTrainer()
  }

  logout() {
    if(confirm('Logging out removes the active trainer. Are you sure?')) {
      this.authService.logout()
      this.updateActiveTrainer()
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  get loggedInTrainer(): string {
    if(this._activeTrainer) {
      return 'Trainer: ' + this._activeTrainer.name
    }
    return 'Not logged in'
  }

  private updateActiveTrainer() {
    this._activeTrainer = this.authService.getLoggedInTrainer()
  }

}

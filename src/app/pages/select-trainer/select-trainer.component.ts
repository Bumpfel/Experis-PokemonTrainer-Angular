import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-select-trainer',
  templateUrl: './select-trainer.component.html',
  styleUrls: ['./select-trainer.component.scss']
})
export class SelectTrainerComponent implements OnInit {

  private _activeTrainer: Trainer | undefined

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.redirect()
    }
  }
  
  login(name: string): void {
    if(this.authService.login(name)) {
      this.redirect()
    }
  }

  logout() {
    this.authService.logout()
  }

  private redirect() {
    this.router.navigateByUrl('/trainer')
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-trainer',
  templateUrl: './select-trainer.component.html',
  styleUrls: ['./select-trainer.component.scss']
})
export class SelectTrainerComponent implements OnInit {

  private _activeTrainer: Trainer | undefined

  loginForm: FormGroup = new FormGroup({
    trainername : new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.redirect()
    }
  }
  
 get trainername(){
   return this.loginForm.get('trainername' );
 }

  login(): void {
    if(this.authService.login(this.loginForm.value)) {
      this.redirect()
    }
  }

  logout() {
    this.authService.logout()
  }

  testLogin(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
  }

  private redirect() {
    this.router.navigateByUrl('/trainer')
  }
}

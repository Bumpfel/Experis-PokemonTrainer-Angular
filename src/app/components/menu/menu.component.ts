import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignOut(): void {
    this.router.navigateByUrl('/')
    this.authService.logout()
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }
}

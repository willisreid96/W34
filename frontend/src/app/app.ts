import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private auth: AuthService, private router: Router) {}

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule}  from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.error = null;
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => (this.error = 'Invalid username or password')
    });
  }

}

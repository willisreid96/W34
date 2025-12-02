import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

const API_BASE = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private TOKEN_KEY = 'w34_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string){
    return this.http.post<{token: string}>(`${API_BASE}/auth/login`, { username, password }).pipe(
      tap(response => {
        localStorage.setItem(this.TOKEN_KEY, response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

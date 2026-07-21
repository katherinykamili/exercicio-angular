import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-status',
  imports: [],
  templateUrl: './auth-status.html',
  styleUrl: './auth-status.css',
})
export class AuthStatus {
  // Estado usado para demonstrar conteúdo condicional no template.
  protected isLoggedIn = false;

  protected toggleLogin(): void {
    // Alterna entre usuário autenticado e desconectado.
    this.isLoggedIn = !this.isLoggedIn;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-api',
  imports: [FormsModule],
  templateUrl: './lista-api.html',
  styleUrl: './lista-api.css',
})
export class ListaApi {
  protected nome = '';
  protected responsavel = '';
  protected email = '';

  protected cadastrar(): void {
    if (!this.nome.trim() || !this.responsavel.trim() || !this.email.trim()) {
      return;
    }

    // O exercício apenas confirma o envio e limpa o formulário.
    this.nome = '';
    this.responsavel = '';
    this.email = '';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-modelo',
  imports: [],
  templateUrl: './usuario-modelo.html',
  styleUrl: './usuario-modelo.css',
})
export class UsuarioModelo {}

export interface Usuario {
  id: number;
  nome: string;
  idade: number;
}

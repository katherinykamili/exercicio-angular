import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-usuario-modelo',
  imports: [],
  templateUrl: './usuario-modelo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './usuario-modelo.css',
})
export class UsuarioModelo {}

export interface Usuario {
  id: number;
  nome: string;
  idade: number;
}

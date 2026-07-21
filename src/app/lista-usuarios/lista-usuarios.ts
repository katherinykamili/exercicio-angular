import { Component } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuariosComponent {
  // O template percorre esta coleção com @for e rastreia cada item pelo id.
  protected readonly usuarios: Usuario[] = [
    { id: 1, nome: 'Ana Silva', idade: 28 },
    { id: 2, nome: 'Bruno Costa', idade: 34 },
    { id: 3, nome: 'Carla Dias', idade: 22 },
    { id: 4, nome: 'Diego Santos', idade: 40 },
  ];
}

import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class UsuarioComponent {
  // Objetos tipados garantem que todas as propriedades de Pessoa estejam presentes.
  pessoa1: Pessoa = {
    nome: 'Maria Silva',
    sexo: 'Feminino',
    dataNascimento: 'Dez de março de mil novecentos e noventa e oito',
    estadoCivil: 'Solteira'
  };

  // Segundo exemplo usado no mesmo template para demonstrar reutilização.
  pessoa2: Pessoa = {
    nome: 'João Pereira',
    sexo: 'Masculino',
    dataNascimento: 'Vinte e dois de novembro de mil novecentos e noventa e cinco',
    estadoCivil: 'Casado'
  };
}

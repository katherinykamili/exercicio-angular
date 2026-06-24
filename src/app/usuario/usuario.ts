import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

export class AppComponent {
  pessoa1: Pessoa = {
    nome: 'Maria Silva',
    sexo: 'Feminino',
    dataNascimento: 'Dez de março de mil novessentos e noventa e oito',
    estadoCivil: 'Solteira'
  };

  pessoa2: Pessoa = {
    nome: 'João Pereira',
    sexo: 'Masculino',
    dataNascimento: 'Vinte e dois de novembro de mil novessentos e noventa e cinco',
    estadoCivil: 'Casado'
  };
}

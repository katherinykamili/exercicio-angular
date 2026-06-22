import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
maria: Pessoa = {
nome:'Maria Joaquina',
sobrenome: "Santos",
sexo: 'Feminino',
dataDeNascimento: 'Seis de fevereiro de dois mil e dois',
estadoCivil: 'Solteiro'
}
}

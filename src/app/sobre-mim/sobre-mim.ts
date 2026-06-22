import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  imports: [],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.css',
})
export class SobreMim {

nome: string = "Katheriny Kamili"
idade: number = 23
cidade: string = "Blumenau"
estado: string = "SC"
habilidade: string = "autêntica"
programacao: boolean = true
}

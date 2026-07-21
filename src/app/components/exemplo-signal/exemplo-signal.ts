import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exemplo-signal',
  imports: [],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {
  // Signals são lidos como função: idade(). O valor inicial é 23.
  protected readonly idade = signal(23);

  // set substitui diretamente o valor armazenado pelo signal.
  protected mudarValor() {
    this.idade.set(30);
  }

  // update calcula o novo valor usando o valor atual.
  protected incrementarIdade() {
    this.idade.update((valorAtual) => valorAtual + 1);
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exemplo-signal',
  imports: [],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {
  protected readonly idade = signal(23);


protected mudarValor() {
  this.idade.set(30);
}

protected incrementarIdade() {
  this.idade.update((valorAtual) => valorAtual + 1);
}
}
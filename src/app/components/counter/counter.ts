import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // Estado reativo exibido no template por meio de count().
  protected count = signal(0);
  // Ao ultrapassar este limite, o contador volta para zero.
  private limiteImposto = 10;

  protected increment(): void {
    // Atualiza primeiro e depois verifica se o limite foi ultrapassado.
    this.count.update((value) => value + 1);
    this.checarValor();
  }

  private checarValor(): void {
    if (this.count() > this.limiteImposto) {
      this.count = signal(0);
    }
  }

  protected reset(): void {
    // set é usado quando já sabemos exatamente qual será o próximo valor.
    this.count.set(0);
  }
}

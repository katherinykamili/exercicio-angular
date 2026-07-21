import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  protected count = signal(0);
  private limiteImposto = 10;

  protected increment(): void {
    this.count.update((value) => value + 1);
    this.checarValor();
  }

  private checarValor(): void {
    if (this.count() > this.limiteImposto) {
      this.count = signal(0);
    }
  }

  protected reset(): void {
    this.count.set(0);
  }
}

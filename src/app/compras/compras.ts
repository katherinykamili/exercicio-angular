import { Component } from '@angular/core';
import { Mercado } from './mercado';

@Component({
  selector: 'app-compras',
  imports: [],
  templateUrl: './compras.html',
  styleUrl: './compras.css',
})
export class Compras {
  readonly unidades: Mercado[] = [
    { NomeMercado: 'Unidade de Blumenau', NumeroMacaVendidasPorAno: 1000, PrecoVendaMaca: 2.5, NumeroLaranjasVendidasPorAno: 500, PrecoVendaLaranja: 3.0 },
    { NomeMercado: 'Unidade de Joinville', NumeroMacaVendidasPorAno: 800, PrecoVendaMaca: 2.8, NumeroLaranjasVendidasPorAno: 600, PrecoVendaLaranja: 3.2 },
    { NomeMercado: 'Unidade de Florianópolis', NumeroMacaVendidasPorAno: 1200, PrecoVendaMaca: 2.6, NumeroLaranjasVendidasPorAno: 700, PrecoVendaLaranja: 3.1 },
  ];
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMim } from "./sobre-mim/sobre-mim";
import { UsuarioComponent } from "./usuario/usuario";
import { Compras } from "./compras/compras";
import { Portfolio } from "./feats/portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreMim, UsuarioComponent, Compras, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio-angular');
}

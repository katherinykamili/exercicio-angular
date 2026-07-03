import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMim } from "./sobre-mim/sobre-mim";
import { UsuarioComponent } from "./usuario/usuario";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreMim, UsuarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio-angular');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMim } from "./sobre-mim/sobre-mim";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreMim],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio-angular');
}

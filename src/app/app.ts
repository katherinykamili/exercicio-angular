import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // DOCUMENT permite alterar o elemento <html> sem acessar window diretamente.
  private readonly document = inject(DOCUMENT);
  // Guarda o tema atual e atualiza o cabeçalho quando seu valor muda.
  readonly isDarkMode = signal(false);

  constructor() {
    // Recupera a preferência salva para manter o tema após atualizar a página.
    const savedTheme = localStorage.getItem('portfolio-theme');
    this.setTheme(savedTheme === 'dark');
  }

  toggleTheme(): void {
    // Inverte o valor atual quando o usuário aciona o botão de tema.
    this.setTheme(!this.isDarkMode());
  }

  private setTheme(isDark: boolean): void {
    // Sincroniza o signal, o atributo usado pelo CSS e a preferência persistida.
    this.isDarkMode.set(isDark);
    this.document.documentElement.dataset['theme'] = isDark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }
}

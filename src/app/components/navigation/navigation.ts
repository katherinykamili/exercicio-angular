import { Component, HostListener, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navigation.css',
})
export class Navigation {
  // Mantém o estado aberto ou fechado do menu lateral.
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    // Calcula o próximo estado a partir do valor anterior.
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  closeMenuWithEscape(): void {
    // Permite fechar o menu pelo teclado para melhorar a acessibilidade.
    this.closeMenu();
  }
}

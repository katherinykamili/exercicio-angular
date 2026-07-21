import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PillButton } from '../ui';

@Component({
  selector: 'app-header',
  imports: [RouterLink, PillButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Recebe do componente pai o tema que o botão deve representar.
  @Input() darkMode = false;
  // Avisa o componente pai quando o usuário solicita a troca de tema.
  @Output() themeToggle = new EventEmitter<void>();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

// Tipos literais documentam e limitam as opções públicas do botão.
export type PillButtonVariant = 'translucent' | 'outline';
export type PillButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'ui-pill-button',
  standalone: true,
  templateUrl: './pill-button.html',
  styleUrl: './pill-button.css',
})
export class PillButton {
  // Inputs configuram o botão sem duplicar sua estrutura e seus estilos.
  @Input() variant: PillButtonVariant = 'translucent';
  @Input() type: PillButtonType = 'button';
  @Input() disabled = false;
  @Input() ariaLabel: string | null = null;
  @Input() pressed: boolean | null = null;

  // Evento personalizado repassado ao componente que utiliza o botão.
  @Output() activated = new EventEmitter<MouseEvent>();
}

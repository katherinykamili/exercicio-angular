import { Component, EventEmitter, Input, Output } from '@angular/core';

export type PillButtonVariant = 'translucent' | 'outline';
export type PillButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'ui-pill-button',
  standalone: true,
  templateUrl: './pill-button.html',
  styleUrl: './pill-button.css',
})
export class PillButton {
  @Input() variant: PillButtonVariant = 'translucent';
  @Input() type: PillButtonType = 'button';
  @Input() disabled = false;
  @Input() ariaLabel: string | null = null;
  @Input() pressed: boolean | null = null;

  @Output() activated = new EventEmitter<MouseEvent>();
}

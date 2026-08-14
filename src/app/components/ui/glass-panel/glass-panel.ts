import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// Limita o espaçamento às opções previstas pelo design system.
export type GlassPanelPadding = 'compact' | 'regular' | 'spacious';

@Component({
  selector: 'ui-glass-panel',
  standalone: true,
  templateUrl: './glass-panel.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './glass-panel.css',
})
export class GlassPanel {
  // Configurações visuais e acessíveis fornecidas por quem usa o painel.
  @Input() padding: GlassPanelPadding = 'regular';
  @Input() interactive = false;
  @Input() role: string | null = null;
  @Input() ariaLabel: string | null = null;
}
